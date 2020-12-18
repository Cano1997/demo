<template>
<div class="view-container app-mob-pickup-mdview sys-employee-mob-pickup-tree-view">
    <div class="view-content">
        <view_tree
    :viewState="viewState"
    viewName="SysEmployeeMobPickupTreeView"  
    :viewparams="viewparams" 
    :context="context" 
    :isOptional="false"
    updateAction='Update'
    removeAction='Remove'
    loadAction='Get'
    createAction='Create'
    viewType="DEMOBPICKUPTREEVIEW"
    :isSingleSelect="isSingleSelect"
    name="tree"  
    ref='tree' 
    @selectchange="tree_selectchange($event)"  
    @click="tree_click($event)"  
    @load="tree_load($event)"  
    @closeview="closeView($event)">
</view_tree>
    </div>
</div>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysEmployeeService from '@/app-core/service/sys-employee/sys-employee-service';

import MobPickupTreeViewEngine from '@engine/view/mob-pickup-tree-view-engine';
import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class SysEmployeeMobPickupTreeViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 实体UI服务对象
     *
     * @type SysEmployeeUIService
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public appUIService: SysEmployeeUIService = new SysEmployeeUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof SysEmployeeMobPickupTreeViewBase
	 */
	protected viewtag: string = '58837f4113cb00c058a20da29656ffea';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected model: any = {
        srfTitle: '人员移动端选择树视图',
        srfCaption: 'sysemployee.views.mobpickuptreeview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'sysemployee.mobpickuptreeview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected containerModel: any = {
        view_tree: { name: 'tree', type: 'TREEVIEW' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected engine: MobPickupTreeViewEngine = new MobPickupTreeViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            tree: this.$refs.tree,
            keyPSDEField: 'sysemployee',
            majorPSDEField: 'personname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        if (this.panelViewState) {
            this.panelStateEvent = this.panelViewState.subscribe((res: any) => {
                if (Object.is(res.tag, 'pickupviewpanel')) {
                    if (Object.is(res.action, 'refresh')) {
                        this.viewState.next({ tag: 'tree', action: 'refresh', data: res.data });
                    }
                }
            });
        }


    }


    /**
     * 销毁之前
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }
    if (this.panelStateEvent) {
        this.panelStateEvent.unsubscribe();
    }

    }

    /**
     * tree 部件 selectchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected tree_selectchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'selectchange', $event);
    }

    /**
     * tree 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected tree_click($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'click', $event);
    }

    /**
     * tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    protected tree_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('tree', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
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
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof SysEmployeeMobPickupTreeView
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

    /**
     * 搜索值
     *
     * @memberof SysEmployeeMobPickupTreeView
     */
    public query = "";
    
    /**
     * 快速搜索
     *
     * @memberof SysEmployeeMobPickupTreeView
     */
    public quickSearch(value:any){
        this.query = value;
        this.viewState.next({tag:'tree',action:'quicksearch',data: value});
    }

    /**
     * 面板通知对象
     *
     * @type {Subject<ViewState>}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    @Prop() protected panelViewState?: Subject<ViewState>;

    /**
     * 面板订阅对象
     *
     * @type {Subject<ViewState>}
     * @memberof SysEmployeeMobPickupTreeViewBase
     */
    public panelStateEvent :Subscription | undefined;


}
</script>

<style lang='less'>
@import './sys-employee-mob-pickup-tree-view.less';
</style>