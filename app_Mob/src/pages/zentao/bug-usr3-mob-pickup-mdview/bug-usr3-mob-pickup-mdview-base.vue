<template>
<ion-page class="view-container app-mob-pickup-mdview bug-usr3-mob-pickup-mdview">
    <ion-content class="view-content" :scroll-events="true" @ionScroll="onScroll" ref="ionScroll" @ionScrollEnd="onScrollEnd">
        <view_mdctrl
    :viewState="viewState"
    viewName="BugUsr3MobPickupMDView"  
    :viewparams="viewparams" 
    :context="context" 
    viewType="DEMOBPICKUPMDVIEW"
    controlStyle="LISTVIEW"
    updateAction="Update"
    removeAction="Remove"
    loaddraftAction=""
    loadAction="Get"
    createAction="Create"
    fetchAction="FetchReleaseLinkableResolvedBug" 
    :isMutli="!isSingleSelect"
    :isNeedLoaddingText="!isPortalView"
    :showBusyIndicator="true" 
    :isTempMode="false"
    name="mdctrl"  
    ref='mdctrl' 
    @selectionchange="mdctrl_selectionchange($event)"  
    @beforeload="mdctrl_beforeload($event)"  
    @rowclick="mdctrl_rowclick($event)"  
    @load="mdctrl_load($event)"  
    @closeview="closeView($event)">
</view_mdctrl>
    </ion-content>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BugService from '@/app-core/service/bug/bug-service';

import MobPickupMDViewEngine from '@engine/view/mob-pickup-mdview-engine';
import BugUIService from '@/ui-service/bug/bug-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class BugUsr3MobPickupMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 实体UI服务对象
     *
     * @type BugUIService
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BugUsr3MobPickupMDViewBase
	 */
	protected viewtag: string = 'acd5e18444a5a39e5d333b735473cdea';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected navParam: any = { 'product': '%product%', 'release': '%release%' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected model: any = {
        srfTitle: 'Bug移动端选择多数据视图',
        srfCaption: 'bug.views.usr3mobpickupmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'bug.usr3mobpickupmdview',
        iconcls: '',
        icon: 'bug'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected containerModel: any = {
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



    /**
     * 工具栏模型集合名
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 下拉刷新
     *
     * @param {*} $event
     * @returns {Promise<any>}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public async pullDownToRefresh($event: any): Promise<any> {
        setTimeout(() => {
            $event.srcElement.complete();
        }, 2000);
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected engine: MobPickupMDViewEngine = new MobPickupMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            mdctrl: this.$refs.mdctrl,
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BugUsr3MobPickupMDViewBase
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
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr3MobPickupMDViewBase
     */
    protected mdctrl_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
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
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public async onScroll(e:any){
        this.isScrollStop = false;
        if (e.detail.scrollTop>600) {
            this.isShouleBackTop = true;
        }else{
            this.isShouleBackTop = false;
        }
                    let ionScroll :any= this.$refs.ionScroll;
        if(ionScroll){
            let ele =  await ionScroll.getScrollElement();
            if(ele){
                let scrollTop = ele.scrollTop;
                let clientHeight = ele.clientHeight;
                let scrollHeight = ele.scrollHeight;
                if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight){
                    let mdctrl:any = this.$refs.mdctrl; 
                    if(mdctrl && mdctrl.loadBottom && this.$util.isFunction(mdctrl.loadBottom)){
                        mdctrl.loadBottom();
                    }           
                }
            }
        }

    }

    /**
     * onScroll滚动结束事件
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public onScrollToTop() {
        let ionScroll:any = this.$refs.ionScroll;
        if(ionScroll && ionScroll.scrollToTop && this.$util.isFunction(ionScroll.scrollToTop)){
            ionScroll.scrollToTop(500);
        }
    }

    /**
     * 是否应该显示返回顶部按钮
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof BugUsr3MobPickupMDViewBase
     */
    public isScrollStop = true;


   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof BugUsr3MobPickupMDView
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

    /**
     * 搜索值
     *
     * @memberof BugUsr3MobPickupMDView
     */
    public query = "";
    
    /**
     * 快速搜索
     *
     * @memberof BugUsr3MobPickupMDView
     */
    public quickSearch(value:any){
        this.query = value;
        this.viewState.next({tag:'mdctrl',action:'quicksearch',data: value});
    }
    
}
</script>

<style lang='less'>
@import './bug-usr3-mob-pickup-mdview.less';
</style>