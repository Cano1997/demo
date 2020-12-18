<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'bug-usr4-mob-mdview': true }">
    
    <ion-header>
        <app-search-history @quickValueChange="quickValueChange" :model="model" :showfilter="false"></app-search-history>

    
                    <div class="mdview-tools">
                <div class="bug-usr4-mob-mdview-toolbar default-sort">
                    <div class="view-tool">
                        <div class="view-tool-sorts">
                            <div class="view-tool-sorts-item">
                                <span :class="{text:true,active:hasColor}" @click="onSort('PRI')">优先级</span>
                                <span class="sort-icon" @click="onSort('PRI')">
                                    <ion-icon :class="{'ios' : true ,'hydrated': true ,'sort-select': sort.asc == 'PRI'}" name="chevron-up-outline" ></ion-icon>
                                    <ion-icon :class="{'ios' : true ,'hydrated': true ,'sort-select': sort.desc == 'PRI'}" name="chevron-down-outline" ></ion-icon>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mdview-tools-select">
                    <app-van-select  name="n_severity_eq" title="严重程度" :items="[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},]" @onConfirm="onCategory"></app-van-select>
                    <app-van-select  name="n_resolution_eq" title="解决方案" :items="[{value:'bydesign',label:'设计如此'},{value:'duplicate',label:'重复Bug'},{value:'external',label:'外部原因'},{value:'fixed',label:'已解决'},{value:'notrepro',label:'无法重现'},{value:'postponed',label:'延期处理'},{value:'willnotfix',label:'不予解决'},{value:'tostory',label:'转为需求'},]" @onConfirm="onCategory"></app-van-select>
                </div>
            </div>
    </ion-header>

    <ion-content :scroll-events="true" @ionScroll="onScroll" ref="ionScroll" @ionScrollEnd="onScrollEnd">
                <view_mdctrl
            :viewState="viewState"
            viewName="BugUsr4MobMDView"  
            :viewparams="viewparams" 
            :context="context" 
            viewType="DEMOBMDVIEW"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchBuildBugs" 
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
                <div :id="viewtag+'_bottom_button'" v-show="!isChoose" class = "fab_container" :style="button_style">
            <div  class="bottom_button" >
                <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1.disabled}" v-show="righttoolbarModels.deuiaction1.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1.disabled" @click="righttoolbar_click({ tag: 'deuiaction1' }, $event),popUpGroup()" size="large">
                    <ion-icon name="link"></ion-icon>
                
                </ion-button>
                
            </div>
        
            </div>
        </div>
        
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
import BugService from '@/app-core/service/bug/bug-service';

import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import BugUIService from '@/ui-service/bug/bug-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class BugUsr4MobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof BugUsr4MobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugUsr4MobMDViewBase
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 实体UI服务对象
     *
     * @type BugUIService
     * @memberof BugUsr4MobMDViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BugUsr4MobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BugUsr4MobMDViewBase
	 */
	protected viewtag: string = 'e9edcd7c360c419ba4ae0114a3209465';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    protected navContext: any = { 'project': '%project%', 'objecttype': 'build', 'srfparentkey': '%build%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    protected navParam: any = { 'srfparentkey': '%build%', 'project': '%project%', 'objecttype': 'build' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    protected model: any = {
        srfTitle: 'Bug移动端多数据视图',
        srfCaption: 'bug.views.usr4mobmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'bug.usr4mobmdview',
        iconcls: '',
        icon: 'bug'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    protected containerModel: any = {
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof BugUsr4MobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 BugUsr4MobMDView 模型
    *
    * @type {*}
    * @memberof BugUsr4MobMDView
    */
    public righttoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'MobBuildLink', target: 'NONE' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDView 
     */
    public righttoolbarShowState: boolean = false;

    /**
     * 工具栏权限
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDView 
     */
    get getToolBarLimit() {
        let toolBarVisable:boolean = false;
        if(this.righttoolbarModels){
            Object.keys(this.righttoolbarModels).forEach((tbitem:any)=>{
                if(this.righttoolbarModels[tbitem].type !== 'ITEMS' && this.righttoolbarModels[tbitem].visabled === true){
                    toolBarVisable = true;
                    return;
                }
            })
        }
        return toolBarVisable;
    }

    /**
     * 工具栏分组是否显示的条件
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDView 
     */
    public showGrop = false;

    /**
     * 工具栏分组是否显示的方法
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDView 
     */
    public popUpGroup (falg:boolean = false) {
        this.showGrop = falg;
    }

    


    /**
     * 工具栏模型集合名
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof BugUsr4MobMDViewBase
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
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof BugUsr4MobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public activated() {
        this.popUpGroup();
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BugUsr4MobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 底部按钮样式
     * 
     * @memberof BugUsr4MobMDViewBase
     */
    public button_style = "";

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BugUsr4MobMDViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();

        // 拖动样式
        AnimationService.draggable(document.getElementById(this.viewtag+'_bottom_button'),(style:any)=>{this.button_style = style});
    }

    /**
     * 第三方容器初始化
     * 
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr4MobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr4MobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr4MobMDViewBase
     */
    protected mdctrl_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugUsr4MobMDViewBase
     */
    protected righttoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.righttoolbar_deuiaction1_click($event, '', $event2);
        }
    }


    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof BugUsr4MobMDViewBase
     */
    protected async righttoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this.$refs.mdctrl;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('bug_ui_action');
        if (curUIService) {
            curUIService.Bug_MobBuildLink(datas, contextJO, paramJO, $event, xData, this);
        }
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
     * @memberof BugUsr4MobMDView
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
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
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
     * @memberof BugUsr4MobMDView
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
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public isScrollStop = true;


    /**
     * 搜索值
     *
     * @type {string}
     * @memberof BugUsr4MobMDViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 排序对象
     *
     * @type {*}
     * @memberof BugUsr4MobMDViewBase
     */
    public sort: any = { asc: "", desc: "" };

    /**
     * 点击优先级加主题色
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public hasColor:boolean = false;

    /**
     * 排序
     *
     * @param {*} field
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof BugUsr4MobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof BugUsr4MobMDViewBase
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
     * @memberof BugUsr4MobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformbugusr4mobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformbugusr4mobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public isChooseChange(value:any){
        this.isChoose = value;
    }

    /**
     * 多选状态
     *
     * @memberof BugUsr4MobMDViewBase
     */
    public isChoose = false;

    /**
     * 取消选择状态
     * @memberof BugUsr4MobMDViewBase
     */
    public cancelSelect() {
        this.isChooseChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof BugUsr4MobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof BugUsr4MobMDViewBase
     */
    public onCategory(value:any){
        Object.assign(this.categoryValue,value);
        this.onViewLoad();
    }
    


}
</script>

<style lang='less'>
@import './bug-usr4-mob-mdview.less';
</style>