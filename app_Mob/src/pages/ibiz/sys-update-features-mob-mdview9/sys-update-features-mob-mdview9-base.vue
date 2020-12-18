<template>
<embed-view :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview9': true, 'sys-update-features-mob-mdview9': true }">
    <template slot="header">
    </template>

    <template slot="toolbar">
    </template>
    <template slot="content">
                <view_mdctrl
            :viewState="viewState"
            viewName="SysUpdateFeaturesMobMDView9"  
            :viewparams="viewparams" 
            :context="context" 
            viewType="DEMOBMDVIEW9"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchDefault" 
            :isMutli="!isSingleSelect"
            :isNeedLoaddingText="!isPortalView"
            :showBusyIndicator="true" 
            :isTempMode="false"
            :needLoadMore="false"
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
    </template>
    <template slot="footer">
        
    </template>
</embed-view>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysUpdateFeaturesService from '@/app-core/service/sys-update-features/sys-update-features-service';

import MobMDView9Engine from '@engine/view/mob-mdview9-engine';
import SysUpdateFeaturesUIService from '@/ui-service/sys-update-features/sys-update-features-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class SysUpdateFeaturesMobMDView9Base extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {SysUpdateFeaturesService}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected appEntityService: SysUpdateFeaturesService = new SysUpdateFeaturesService();

    /**
     * 实体UI服务对象
     *
     * @type SysUpdateFeaturesUIService
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public appUIService: SysUpdateFeaturesUIService = new SysUpdateFeaturesUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof SysUpdateFeaturesMobMDView9Base
	 */
	protected viewtag: string = '97ddcfc796631c43a9e55b48ab3253c2';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected navContext: any = { 'n_type_eq': '10' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected navParam: any = { 'n_type_eq': '10' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected model: any = {
        srfTitle: '系统更新功能移动端多数据视图（功能增强）',
        srfCaption: 'sysupdatefeatures.views.mobmdview9.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'sysupdatefeatures.mobmdview9',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected containerModel: any = {
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected engine: MobMDView9Engine = new MobMDView9Engine();

    /**
     * 引擎初始化
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
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
            keyPSDEField: 'sysupdatefeatures',
            majorPSDEField: 'sysupdatefeaturesname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        if (this.formDruipart) {
            this.formDruipart.subscribe(($event: any) => {
                if (Object.is($event.action, 'load')) {
                    let opt = { data: $event.data }
                    Object.assign(opt, this.context);
                    this.viewState.next({ tag: 'mdctrl', action: 'load', data: {} })
                }
            });
        }


    }


    /**
     * 销毁之前
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }
        if (this.formDruipart) {
            this.formDruipart.unsubscribe();
        }

    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9
     */
    public async newdata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const params: any = { ...paramJO };
        let context = { ...this.context, ...contextJO };
        if (args.length > 0) {
            Object.assign(context, args[0]);
        }
        let response: any = null;
        let panelNavParam = { } ;
        let panelNavContext = { } ;
        //导航参数处理
        const { context: _context, param: _params } = this.$viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let deResParameters: any[] = [];
        if ((context as any).sysupdatelog && true) {
            deResParameters = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'sysupdatefeatures', parameterName: 'sysupdatefeatures' },
            { pathName: 'mobeditview', parameterName: 'mobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(_context, deResParameters, parameters, args, _params);
        response = await this.globaluiservice.openService.openView(routeParam);
        if (response) {
            if (!response || !Object.is(response.ret, 'OK')) {
                return;
            }
            if (!xData || !(xData.refresh instanceof Function)) {
                return;
            }
            xData.refresh(response.datas);
        }
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
     * @memberof SysUpdateFeaturesMobMDView9
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const params: any = { ...paramJO };
        let _context = { ...this.context, ...contextJO };
        if (args.length > 0) {
            Object.assign(_context, args[0]);
        }
        let response: any = null;
        let panelNavParam = { } ;
        let panelNavContext = { } ;
        //导航参数处理
        const { context, param: _params } = this.$viewTool.formatNavigateParam( panelNavContext, panelNavParam, _context, params, {});
        let deResParameters: any[] = [];
        if ((context as any).sysupdatelog && true) {
            deResParameters = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'sysupdatefeatures', parameterName: 'sysupdatefeatures' },
            { pathName: 'mobeditview', parameterName: 'mobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, args, _params);
        response = await this.globaluiservice.openService.openView(routeParam);
        if (response) {
            if (!response || !Object.is(response.ret, 'OK')) {
                return;
            }
            if (!xData || !(xData.refresh instanceof Function)) {
                return;
            }
            xData.refresh(response.datas);
        }
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public isScrollStop = true;


    /**
     *  app-form-druipart 组件订阅对象
     *
     * @type {Subject}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop() public formDruipart !: Subject<ViewState>;


    /**
     * 搜索值
     *
     * @type {string}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;


    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
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
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public openSearchform() {
      let search :any = this.$refs.searchformsysupdatefeaturesmobmdview9;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformsysupdatefeaturesmobmdview9;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public isChooseChange(value:any){
        this.isChoose = value;
    }

    /**
     * 多选状态
     *
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public isChoose = false;

    /**
     * 取消选择状态
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public cancelSelect() {
        this.isChooseChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof SysUpdateFeaturesMobMDView9Base
     */
    public onCategory(value:any){
        Object.assign(this.categoryValue,value);
        this.onViewLoad();
    }
    


}
</script>

<style lang='less'>
@import './sys-update-features-mob-mdview9.less';
</style>