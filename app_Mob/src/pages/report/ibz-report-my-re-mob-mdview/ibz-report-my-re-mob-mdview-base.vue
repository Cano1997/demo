<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'ibz-report-my-re-mob-mdview': true }">
    
    <ion-header>
        <ion-toolbar v-show="titleStatus" class="ionoc-view-header">
            <ion-buttons slot="start">
                <ion-button v-show="isShowBackButton" @click="closeView">
                    <ion-icon name="chevron-back"></ion-icon>
                    {{$t('app.button.back')}}
                </ion-button>
            </ion-buttons>
            <ion-title class="view-title"><label class="title-label"><ion-icon v-if="model.icon" :name="model.icon"></ion-icon> <img v-else-if="model.iconcls" :src="model.iconcls" alt=""> {{$t(model.srfCaption)}}</label></ion-title>
        </ion-toolbar>
        <app-search-history @quickValueChange="quickValueChange" :model="model" :showfilter="true"></app-search-history>

    
                    <div class="mdview-tools">
                <div class="ibz-report-my-re-mob-mdview-toolbar default-sort">
                    <div class="view-tool">
                        <div class="view-tool-sorts">
                        </div>
                    </div>
                </div>
                <div class="mdview-tools-select">
                    <app-van-select  name="n_type_eq" title="模板" :items="[{value:'weekly',label:'周报'},{value:'daily',label:'日报'},{value:'monthly',label:'月报'},{value:'reportly',label:'汇报'},]" @onConfirm="onCategory"></app-van-select>
                </div>
            </div>
    </ion-header>

    <van-popup get-container="#app" :lazy-render="false" duration="0.2" v-model="searchformState" position="right" class="searchform" style="height: 100%; width: 85%;"  >
        <ion-header>
            <ion-toolbar translucent>
                <ion-title>条件搜索</ion-title>
            </ion-toolbar>
        </ion-header>
        <div class="searchform_content">
            <view_searchform
    :viewState="viewState"
    viewName="IbzReportMyReMobMDView"  
    :viewparams="viewparams" 
    :context="context" 
     
    :viewtag="viewtag"
    :showBusyIndicator="true"
    updateAction=""
    removeAction=""
    loaddraftAction="FilterGetDraft"
    loadAction="FilterGet"
    createAction=""
    WFSubmitAction=""
    WFStartAction=""
    style='' 
    name="searchform"  
    ref='searchform' 
    @search="searchform_search($event)"  
    @load="searchform_load($event)"  
    @closeview="closeView($event)">
</view_searchform>
        </div>
        <ion-footer>
        <div class="search-btn">
            <ion-button class="search-btn-item" shape="round" size="small" expand="full" color="light" @click="onReset">重置</ion-button>
            <ion-button class="search-btn-item" shape="round" size="small" expand="full" @click="onSearch">搜索</ion-button>
        </div>
        </ion-footer>
    </van-popup>
    <div id="searchformibzreportmyremobmdview"></div>
    <ion-content :scroll-events="true" @ionScroll="onScroll" ref="ionScroll" @ionScrollEnd="onScrollEnd">
        <ion-refresher 
            slot="fixed" 
            ref="loadmore" 
            pull-factor="0.5" 
            pull-min="50" 
            pull-max="100" 
            @ionRefresh="pullDownToRefresh($event)">
            <ion-refresher-content
                pulling-icon="arrow-down-outline"
                :pulling-text="$t('app.pulling_text')"
                refreshing-spinner="circles"
                refreshing-text="">
            </ion-refresher-content>
        </ion-refresher>
                <view_mdctrl
            :viewState="viewState"
            viewName="IbzReportMyReMobMDView"  
            :viewparams="viewparams" 
            :context="context" 
            viewType="DEMOBMDVIEW"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchMyReAllReport" 
            :isMutli="!isSingleSelect"
            :isNeedLoaddingText="!isPortalView"
            :showBusyIndicator="true" 
            :isTempMode="false"
            :newdata="newdata"
            :opendata="opendata"
            name="mdctrl"  
            ref='mdctrl' 
            @selectionchange="mdctrl_selectionchange($event)"  
            @beforeload="mdctrl_beforeload($event)"  
            @rowclick="mdctrl_rowclick($event)"  
            @load="mdctrl_load($event)"  
            @closeview="closeView($event)">
        </view_mdctrl>
    </ion-content>
    <ion-footer class="view-footer">
        
    <div class="scroll_tool">
        <div class="scrollToTop" @click="onScrollToTop" v-show="isShouleBackTop" :style="{right:isScrollStop?'-18px':'-70px'}" > <van-icon name="back-top" /></div> 
    </div>
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzReportService from '@/app-core/service/ibz-report/ibz-report-service';

import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import IbzReportUIService from '@/ui-service/ibz-report/ibz-report-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class IbzReportMyReMobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {IbzReportService}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected appEntityService: IbzReportService = new IbzReportService();

    /**
     * 实体UI服务对象
     *
     * @type IbzReportUIService
     * @memberof IbzReportMyReMobMDViewBase
     */
    public appUIService: IbzReportUIService = new IbzReportUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof IbzReportMyReMobMDViewBase
	 */
	protected viewtag: string = 'f49dfaced3944c1bc17f64253fcc95a0';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected model: any = {
        srfTitle: '汇报移动端多数据视图（我收到的）',
        srfCaption: 'ibzreport.views.myremobmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'ibzreport.myremobmdview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected containerModel: any = {
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



    /**
     * 工具栏模型集合名
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    public async pullDownToRefresh($event: any): Promise<any> {
        let mdctrl: any = this.$refs.mdctrl;
        if (mdctrl && mdctrl.pullDownToRefresh instanceof Function) {
            const response: any = await mdctrl.pullDownToRefresh();
            if (response) {
                $event.srcElement.complete();
            }
        }
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string) => {
                this.opendata(args, contextJO, paramJO, $event, xData, container, srfParentDeName);
            },
            mdctrl: this.$refs.mdctrl,
            newdata: (args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string) => {
                this.newdata(args, contextJO, paramJO, $event, xData, container, srfParentDeName);
            },
            searchform: this.$refs.searchform,
            keyPSDEField: 'ibzreport',
            majorPSDEField: 'ibzdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof IbzReportMyReMobMDViewBase
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
     * searchform 部件 search 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected searchform_search($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected searchform_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportMyReMobMDViewBase
     */
    protected mdctrl_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'load', $event);
    }


    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [contextJO={}]
     * @param {*} [paramJO={}]
     * @param {*} [$event]
     * @param {*} [xData]
     * @param {*} [container]
     * @param {string} [srfParentDeName]
     * @returns {Promise<any>}
     * @memberof IbzReportMyReMobMDView
     */
    public async newdata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        //this.$notice.warning('未指定关系视图');
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [contextJO={}]
     * @param {*} [paramJO={}]
     * @param {*} [$event]
     * @param {*} [xData]
     * @param {*} [container]
     * @param {string} [srfParentDeName]
     * @returns {Promise<any>}
     * @memberof IbzReportMyReMobMDView
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        //this.$notice.warning('未指定关系视图');
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof IbzReportMyReMobMDViewBase
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
                        mdctrl.loadStatus = true;
                        await mdctrl.loadBottom()
                        mdctrl.loadStatus = false;
                    }           
                }
            }
        }

    }

    /**
     * onScroll滚动结束事件
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof IbzReportMyReMobMDViewBase
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
     * @memberof IbzReportMyReMobMDViewBase
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public isScrollStop = true;



    /**
     * 搜索表单状态
     *
     * @type {get}
     * @memberof IbzReportMyReMobMDViewBase
     */
    get searchformState(){
        return this.$store.state.searchformStatus;
    }

    /**
     * 搜索表单状态
     *
     * @type {set}
     * @memberof IbzReportMyReMobMDViewBase
     */
    set searchformState(val:any){
        this.$store.commit('setSearchformStatus',val); 
    }

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 执行搜索表单
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onSearch(): void {
        this.$store.commit('setSearchformStatus',false); 
        this.isExpandSearchForm = true;
        const form: any = this.$refs.searchform;
        if (form) {
            form.onSearch();
        }
        this.closeSearchform();
    }

    /**
     * 重置搜索表单
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onReset(): void {
        this.$store.commit('setSearchformStatus',false); 
        this.isExpandSearchForm = false;
        const form: any = this.$refs.searchform;
        if (form) {
            form.onReset();
        }
        this.closeSearchform();
    }

    /**
     * 搜索值
     *
     * @type {string}
     * @memberof IbzReportMyReMobMDViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof IbzReportMyReMobMDViewBase
     */
    public async quickValueChange(event: any) {
        let { detail } = event;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.query = value;

        const mdctrl: any = this.$refs.mdctrl;
        if (mdctrl) {
            mdctrl.quickSearch(this.query);
        }
    }

   /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 排序对象
     *
     * @type {*}
     * @memberof IbzReportMyReMobMDViewBase
     */
    public sort: any = { asc: "", desc: "" };

    /**
     * 点击优先级加主题色
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public hasColor:boolean = false;

    /**
     * 排序
     *
     * @param {*} field
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onSort(field: any) {
        if (this.sort.desc == field) {
            this.sort.desc = "";
            this.sortValue = {};
            this.onViewLoad();
            this.hasColor = false; 
            return
        }
        if (this.sort.asc == field) {
            this.sort.asc = "";
            this.sort.desc = field;
            this.sortValue = { sort: field + ",desc" };
            this.onViewLoad();
            this.hasColor = true;
        } else {
            this.sort.asc = field;
            this.sort.desc = "";
            this.sortValue = { sort: field + ",asc" };
            this.onViewLoad();
            this.hasColor = true;
        }
    }

    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof IbzReportMyReMobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onRefreshView() {
        let mdctrl: any = this.$refs.mdctrl;
        if (mdctrl) {
            mdctrl.refresh();
        }
    }

    /**
     * 打开搜索表单
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformibzreportmyremobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformibzreportmyremobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public isChooseChange(value:any){
        this.isChoose = value;
    }

    /**
     * 多选状态
     *
     * @memberof IbzReportMyReMobMDViewBase
     */
    public isChoose = false;

    /**
     * 取消选择状态
     * @memberof IbzReportMyReMobMDViewBase
     */
    public cancelSelect() {
        this.isChooseChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof IbzReportMyReMobMDViewBase
     */
    public onCategory(value:any){
        Object.assign(this.categoryValue,value);
        this.onViewLoad();
    }
    


}
</script>

<style lang='less'>
@import './ibz-report-my-re-mob-mdview.less';
</style>