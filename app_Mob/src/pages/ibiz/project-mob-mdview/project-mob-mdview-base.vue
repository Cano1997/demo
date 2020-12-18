<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobmdview': true, 'project-mob-mdview': true }">
    
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
    viewName="ProjectMobMDView"  
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
    <div id="searchformprojectmobmdview"></div>
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
            viewName="ProjectMobMDView"  
            :viewparams="viewparams" 
            :context="context" 
            viewType="DEMOBMDVIEW"
            controlStyle="LISTVIEW"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction=""
            loadAction="Get"
            createAction="Create"
            fetchAction="FetchCurUser" 
            :isMutli="!isSingleSelect"
            :isNeedLoaddingText="!isPortalView"
            :showBusyIndicator="true" 
            :isTempMode="false"
            :newdata="newdata"
            :opendata="opendata"
            :isChoose="isChoose"
            @isChooseChange="isChooseChange"
            @checkBoxChange="checkBoxChange"
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
                    <ion-icon name="add"></ion-icon>
                
                </ion-button>
                
            </div>
        
            </div>
        </div>
                <div v-show="isChoose" class="batch_btn">
                    <div class="selectall" v-show="isChoose">
                        <ion-checkbox ref="selectAll"  :checked="isSelectAll"   @click="onSelectallClick(!isSelectAll)" ></ion-checkbox>
                        <ion-label class="selectal-label">全选</ion-label>
                    </div>
                    <div class="batch_btn_content">
                        <div class="app-toolbar-container ">
            <div class="app-quick-toolbar toolbar-left-bottons">
                    <ion-button class="app-view-toolbar-button" v-show="mdctrl_batchtoolbarModels.deuiaction1.visabled" :disabled="mdctrl_batchtoolbarModels.deuiaction1.disabled" @click="mdctrl_batchtoolbar_click({ tag: 'deuiaction1' }, $event)" >
                <ion-icon class="ibiz-button-icon" name="remove"> </ion-icon>
            {{$t('project.mobmdviewmdctrl_batchtoolbar_toolbar.deuiaction1.caption')}}
            </ion-button>
        
            </div>
        </div>
                <ion-button class="app-view-toolbar-button"  @click="cancelSelect" >
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                    {{$t('app.button.cancel')}}
                </ion-button>
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
import ProjectService from '@/app-core/service/project/project-service';

import MobMDViewEngine from '@engine/view/mob-mdview-engine';
import ProjectUIService from '@/ui-service/project/project-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class ProjectMobMDViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProjectMobMDViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMobMDViewBase
     */
    protected appEntityService: ProjectService = new ProjectService();

    /**
     * 实体UI服务对象
     *
     * @type ProjectUIService
     * @memberof ProjectMobMDViewBase
     */
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProjectMobMDViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof ProjectMobMDViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof ProjectMobMDViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProjectMobMDViewBase
	 */
	protected viewtag: string = 'e643a925b1d0dab04ef917b973354baa';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof ProjectMobMDViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProjectMobMDViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof ProjectMobMDViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof ProjectMobMDViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof ProjectMobMDViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProjectMobMDViewBase
     */
    protected model: any = {
        srfTitle: '项目',
        srfCaption: 'project.views.mobmdview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'project.mobmdview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    protected containerModel: any = {
        view_searchform: { name: 'searchform', type: 'SEARCHFORM' },
        view_mdctrl: { name: 'mdctrl', type: 'MOBMDCTRL' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof ProjectMobMDViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof ProjectMobMDViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;




   /**
    * 工具栏 ProjectMobMDView 模型
    *
    * @type {*}
    * @memberof ProjectMobMDView
    */
    public mdctrl_batchtoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', caption: '删除', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALDELETE', uiaction: { tag: 'Remove', target: 'MULTIKEY' } },

    };

    



   /**
    * 工具栏 ProjectMobMDView 模型
    *
    * @type {*}
    * @memberof ProjectMobMDView
    */
    public mdctrl_quicktoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', caption: '新建', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALCREATE', uiaction: { tag: 'New', target: '' } },

    };

    



   /**
    * 工具栏 ProjectMobMDView 模型
    *
    * @type {*}
    * @memberof ProjectMobMDView
    */
    public righttoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__PROJ_CREATE_BUT', uiaction: { tag: 'CreateMob', target: 'NONE' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof ProjectMobMDView 
     */
    public righttoolbarShowState: boolean = false;

    /**
     * 工具栏权限
     *
     * @type {boolean}
     * @memberof ProjectMobMDView 
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
     * @memberof ProjectMobMDView 
     */
    public showGrop = false;

    /**
     * 工具栏分组是否显示的方法
     *
     * @type {boolean}
     * @memberof ProjectMobMDView 
     */
    public popUpGroup (falg:boolean = false) {
        this.showGrop = falg;
    }

    


    /**
     * 工具栏模型集合名
     *
     * @memberof ProjectMobMDViewBase
     */
    public toolbarModelList:any = ['mdctrl_batchtoolbarModels','mdctrl_quicktoolbarModels','righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    protected engine: MobMDViewEngine = new MobMDViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof ProjectMobMDViewBase
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
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof ProjectMobMDViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof ProjectMobMDViewBase
     */
    public activated() {
        this.popUpGroup();
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProjectMobMDViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 底部按钮样式
     * 
     * @memberof ProjectMobMDViewBase
     */
    public button_style = "";

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    protected searchform_search($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'search', $event);
    }

    /**
     * searchform 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
     */
    protected searchform_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('searchform', 'load', $event);
    }

    /**
     * mdctrl 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
     */
    protected mdctrl_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'selectionchange', $event);
    }

    /**
     * mdctrl 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
     */
    protected mdctrl_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'beforeload', $event);
    }

    /**
     * mdctrl 部件 rowclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
     */
    protected mdctrl_rowclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'rowclick', $event);
    }

    /**
     * mdctrl 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
     */
    protected mdctrl_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('mdctrl', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
        
        xData = this.$refs.mdctrl;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('project_ui_action');
        if (curUIService) {
            curUIService.Project_CreateMob(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof ProjectMobMDView
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
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
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
     * @memberof ProjectMobMDView
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
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }

    /**
     * onScroll滚动事件
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    public onScrollEnd(){
        this.isScrollStop = true;
    }

    /**
     * 返回顶部
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    public isShouleBackTop = false;

    /**
     * 当前滚动条是否是停止状态
     *
     * @memberof ProjectMobMDViewBase
     */
    public isScrollStop = true;



    /**
     * 搜索表单状态
     *
     * @type {get}
     * @memberof ProjectMobMDViewBase
     */
    get searchformState(){
        return this.$store.state.searchformStatus;
    }

    /**
     * 搜索表单状态
     *
     * @type {set}
     * @memberof ProjectMobMDViewBase
     */
    set searchformState(val:any){
        this.$store.commit('setSearchformStatus',val); 
    }

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 执行搜索表单
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    public query: string = '';

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

   /**
     * 能否上拉加载
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */ 
    @Prop({ default: true }) public isEnablePullUp?: boolean;



    /**
     * 分类值
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    public categoryValue :any = {};

    /**
     * 排序值
     *
     * @type {boolean}
     * @memberof ProjectMobMDViewBase
     */
    public sortValue :any = {};

    /**
     * 刷新视图
     *
     * @memberof ProjectMobMDViewBase
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
     * @memberof ProjectMobMDViewBase
     */
    public openSearchform() {
      let search :any = this.$refs.searchformprojectmobmdview;
      if(search){
          search.open();
      }
    }

    /**
     * 关闭搜索表单
     *
     * @memberof ProjectMobMDViewBase
     */
    public closeSearchform(){
      let search :any = this.$refs.searchformprojectmobmdview;
      if(search){
          search.close();
      }
    }

    /**
     * 多选状态改变事件
     *
     * @memberof ProjectMobMDViewBase
     */
    public isChooseChange(value:any){
        this.isChoose = value;
    }

    /**
     * 多选状态
     *
     * @memberof ProjectMobMDViewBase
     */
    public isChoose = false;

    /**
     * 取消选择状态
     * @memberof ProjectMobMDViewBase
     */
    public cancelSelect() {
        this.isChooseChange(false);
    }

    /**
     * 视图加载（排序|分类）
     * @memberof ProjectMobMDViewBase
     */
    public onViewLoad() {
        let value = Object.assign(this.categoryValue,this.sortValue);
        this.engine.onViewEvent('mdctrl','viewload',value);
    }

    /**
     * 分类搜索
     *
     * @param {*} value
     * @memberof ProjectMobMDViewBase
     */
    public onCategory(value:any){
        Object.assign(this.categoryValue,value);
        this.onViewLoad();
    }
    
    public  mdctrl_batchtoolbar_click(tag:string,event:any) {
       let mdctrl: any = this.$refs.mdctrl;
        if(mdctrl && mdctrl. mdctrl_batchtoolbar_click instanceof Function){
            mdctrl. mdctrl_batchtoolbar_click(tag,event);
        }
    }


    /**
     * 全选check点击
     *
     * @memberof ProjectMobMDViewBase
     */ 
    public onSelectallClick(value: any) {
        setTimeout(() => {
            this.isSelectAll = value;
            let selectAlls: any = this.$refs.selectAll;
            if (selectAlls) {
                selectAlls.checked = value;
                selectAlls.ariaChecked = value;
            }
            let mdctrl: any = this.$refs.mdctrl;
            if (mdctrl && mdctrl.checkboxAll && this.$util.isFunction(mdctrl.checkboxAll)) {
                mdctrl.checkboxAll(value);
            }
        }, 1);
        this.$forceUpdate();
    }

    /**
     * 是否全选
     *
     * @memberof ProjectMobMDViewBase
     */
    public isSelectAll:boolean = false;

    /**
     * 单check改变
     *
     * @memberof ProjectMobMDViewBase
     */
    public checkBoxChange(value: any) {
        let selectAll: any = this.$refs.selectAll;
        if (selectAll) {
            selectAll.checked = value;
            selectAll.ariaChecked = value;
        }
        this.isSelectAll = value;
        this.$forceUpdate();
    }
}
</script>

<style lang='less'>
@import './project-mob-mdview.less';
</style>