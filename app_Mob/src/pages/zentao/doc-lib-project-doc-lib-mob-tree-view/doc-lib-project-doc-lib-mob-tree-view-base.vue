<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobtreeview': true, 'doc-lib-project-doc-lib-mob-tree-view': true }">
    
    <ion-header>
        <app-search-history @quickValueChange="quickValueChange" :model="model" :showfilter="false"></app-search-history>

    
    </ion-header>

    <ion-content >
                <view_tree
            :viewState="viewState"
            viewName="DocLibProjectDocLibMobTreeView"  
            :viewparams="viewparams" 
            :context="context" 
            :isOptional="false"
            updateAction='Update'
            removeAction='Remove'
            loadAction='Get'
            createAction='Create'
            viewType="DEMOBTREEVIEW"
            name="tree"  
            ref='tree' 
            @selectchange="tree_selectchange($event)"  
            @click="tree_click($event)"  
            @load="tree_load($event)"  
            @closeview="closeView($event)">
        </view_tree>
    </ion-content>
</ion-page>

</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import DocLibService from '@/app-core/service/doc-lib/doc-lib-service';

import MobTreeViewEngine from '@engine/view/mob-tree-view-engine';
import DocLibUIService from '@/ui-service/doc-lib/doc-lib-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class DocLibProjectDocLibMobTreeViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected appEntityService: DocLibService = new DocLibService();

    /**
     * 实体UI服务对象
     *
     * @type DocLibUIService
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof DocLibProjectDocLibMobTreeViewBase
	 */
	protected viewtag: string = 'b731c5d991dcb4695d925bb8749fa6fc';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected navParam: any = { 'project': '%project%' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected model: any = {
        srfTitle: '文档库移动端树视图',
        srfCaption: 'doclib.views.projectdoclibmobtreeview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'doclib.projectdoclibmobtreeview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  DocLibProjectDocLibMobTreeViewBase
     */
    @Watch('_context')
    on_context(newVal: string, oldVal: string) {
        const _this: any = this;
        this.parseViewParam();
        if (!Object.is(newVal, oldVal) && _this.engine) {
            this.$nextTick(()=>{_this.engine.load();})
        }
        
    }

    /**
     * 视图参数变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @returns
     * @memberof IBizChart
     */
    @Watch('_viewparams',{immediate: true, deep: true})
    on_viewparams(newVal: string, oldVal: string) {
        this.parseViewParam();
        
    }

    /**
     * 设置工具栏状态
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public setViewTitleStatus(){
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected containerModel: any = {
        view_tree: { name: 'tree', type: 'TREEVIEW' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;








    /**
     * 工具栏模型集合名
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected parseViewParam(): void {
        const { context, param } = this.$viewTool.formatNavigateViewParam(this, true);
        this.context = { ...context };
        this.viewparams = { ...param }
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected engine: MobTreeViewEngine = new MobTreeViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            tree: this.$refs.tree,
            keyPSDEField: 'doclib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();


    }


    /**
     * 销毁之前
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();

    }

    /**
     * 第三方容器初始化
     * 
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected  thirdPartyInit(){
        if(!this.isChildView){
            this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);
            this.$viewTool.setThirdPartyEvent(this.closeView);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }

    }

    /**
     * tree 部件 selectchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected tree_selectchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'selectchange', $event);
    }

    /**
     * tree 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected tree_click($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'click', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected tree_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public quitFun() {
        if (!sessionStorage.getItem("firstQuit")) {  // 首次返回时
            // 缓存首次返回的时间
            window.sessionStorage.setItem("firstQuit", new Date().getTime().toString());
            // 提示再按一次退出
            this.$toast("再按一次退出");
            // 两秒后清除缓存（与提示的持续时间一致）
            setTimeout(() => {window.sessionStorage.removeItem("firstQuit")}, 2000);
        } else {
            // 获取首次返回时间
            let firstQuitTime: any = sessionStorage.getItem("firstQuit");
            // 如果时间差小于两秒 直接关闭
            if (new Date().getTime() - firstQuitTime < 2000) {
                this.$viewTool.ThirdPartyClose();
            }
        }
    }
    
    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
        if(this.viewDefaultUsage==="indexView" && this.$route.path === '/appindexview'){
            this.quitFun();
            return;
        }
        if (this.viewDefaultUsage === "routerView" ) {
           if(window.history.length == 1 && this.$viewTool.getThirdPartyName()){
                this.quitFun();
            }else{
                this.$store.commit("deletePage", this.$route.fullPath);
                this.$router.go(-1);
           }
        }
        if (this.viewDefaultUsage === "actionView") {
            this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
        }
        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    @Watch('refreshdata')
    onRefreshData(newVal: any, oldVal: any) {
        if (newVal === null || newVal === undefined) {
            return;
        }
        if (newVal === 0) {
            return;
        }
        const _this: any = this;
        if (_this.onRefreshView && _this.onRefreshView instanceof Function) {
            _this.onRefreshView();
        }
    }

    /**
     * 初始化导航栏标题
     *
     * @param {*} val
     * @param {boolean} isCreate
     * @returns
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 搜索值
     *
     * @type {string}
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof DocLibProjectDocLibMobTreeViewBase
     */
    public async quickValueChange(event: any) {
        let { detail } = event;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.query = value;

        const tree: any = this.$refs.tree;
        if (tree) {
            tree.webLoad(this.query);
        }
    }

}
</script>

<style lang='less'>
@import './doc-lib-project-doc-lib-mob-tree-view.less';
</style>