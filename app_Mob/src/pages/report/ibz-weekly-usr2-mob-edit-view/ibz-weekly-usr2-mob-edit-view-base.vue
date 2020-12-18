<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview': true, 'ibz-weekly-usr2-mob-edit-view': true }">
    
    <ion-header>

    
    </ion-header>

    <ion-content >
                <view_form
            :viewState="viewState"
            viewName="IbzWeeklyUsr2MobEditView"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="Update"
            removeAction="Remove"
            loaddraftAction="GetDraft"
            loadAction="Get"
            createAction="Create"
            WFSubmitAction=""
            WFStartAction=""
            style='' 
            name="form"  
            ref='form' 
            @save="form_save($event)"  
            @beforeload="form_beforeload($event)"  
            @remove="form_remove($event)"  
            @beforesave="form_beforesave($event)"  
            @load="form_load($event)"  
            @closeview="closeView($event)">
        </view_form>
    </ion-content>
    <ion-footer class="view-footer">
                <div :id="viewtag+'_bottom_button'"  class = "fab_container" :style="button_style">
            <ion-button  v-if="getToolBarLimit" @click="popUpGroup(true)" class="app-view-toolbar-button"><ion-icon name="chevron-up-circle-outline"></ion-icon></ion-button>
            <van-popup v-if="getToolBarLimit" class="popup" v-model="showGrop" round position="bottom">
                <div class="container">
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1.disabled}" v-show="righttoolbarModels.deuiaction1.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1.disabled" @click="righttoolbar_click({ tag: 'deuiaction1' }, $event),popUpGroup()" size="large">
                    <ion-icon name="edit"></ion-icon>
                
                </ion-button>
                
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction2.disabled}" v-show="righttoolbarModels.deuiaction2.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction2.disabled" @click="righttoolbar_click({ tag: 'deuiaction2' }, $event),popUpGroup()" size="large">
                    <ion-icon name="check"></ion-icon>
                
                </ion-button>
                
            </div>
        
                </div>
            </van-popup>
        </div>
    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzWeeklyService from '@/app-core/service/ibz-weekly/ibz-weekly-service';

import MobEditViewEngine from '@engine/view/mob-edit-view-engine';
import IbzWeeklyUIService from '@/ui-service/ibz-weekly/ibz-weekly-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class IbzWeeklyUsr2MobEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {IbzWeeklyService}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected appEntityService: IbzWeeklyService = new IbzWeeklyService();

    /**
     * 实体UI服务对象
     *
     * @type IbzWeeklyUIService
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public appUIService: IbzWeeklyUIService = new IbzWeeklyUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof IbzWeeklyUsr2MobEditViewBase
	 */
	protected viewtag: string = 'b6cf4424d051d03f2547d739dac7120d';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected navParam: any = { 'srfparentkey': '%ibzweekly%' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected model: any = {
        srfTitle: '周报移动端编辑视图',
        srfCaption: 'ibzweekly.views.usr2mobeditview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'ibzweekly.usr2mobeditview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 IbzWeeklyUsr2MobEditView 模型
    *
    * @type {*}
    * @memberof IbzWeeklyUsr2MobEditView
    */
    public righttoolbarModels: any = {
            deuiaction1: { name: 'deuiaction1', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__WEEKLY_SUBMIT_BUT', uiaction: { tag: 'mobEdit1', target: 'SINGLEKEY' } },

            deuiaction2: { name: 'deuiaction2', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__WEEKLY_SUBMIT_BUT', uiaction: { tag: 'MobSubmit', target: 'SINGLEKEY' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditView 
     */
    public righttoolbarShowState: boolean = false;

    /**
     * 工具栏权限
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditView 
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
     * @memberof IbzWeeklyUsr2MobEditView 
     */
    public showGrop = false;

    /**
     * 工具栏分组是否显示的方法
     *
     * @type {boolean}
     * @memberof IbzWeeklyUsr2MobEditView 
     */
    public popUpGroup (falg:boolean = false) {
        this.showGrop = falg;
    }

    


    /**
     * 工具栏模型集合名
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected engine: MobEditViewEngine = new MobEditViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'ibzweekly',
            majorPSDEField: 'ibzweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        if(this.$route && this.$route.query && this.$route.query.bsinfo){
            const bainfo:any = JSON.parse(this.$route.query.bsinfo as string);
            Object.assign(this.viewparams,bainfo);
        }


    }


    /**
     * 销毁之前
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public activated() {
        this.popUpGroup();
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 底部按钮样式
     * 
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public button_style = "";

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected righttoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.righttoolbar_deuiaction1_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.righttoolbar_deuiaction2_click($event, '', $event2);
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('ibzweekly_ui_action');
        if (curUIService) {
            curUIService.IbzWeekly_mobEdit1(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected async righttoolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('ibzweekly_ui_action');
        if (curUIService) {
            curUIService.IbzWeekly_MobSubmit(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
                let result = await this.cheackChange();
        if(result){
            if (this.viewDefaultUsage === "routerView") {
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

        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
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
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 保存
     *
     * @protected
     * @memberof IbzWeeklyUsr2MobEditViewBase
     */
    protected defSave(): void {
        const _this: any = this;
        const xData: any = _this.$refs.form;
        if (xData && xData.save instanceof Function) {
            const _data = _this.viewparams;
            xData.save(_data).then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                _this.$emit('viewdataschange', [{ ...response.data }]);
            });
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 检查表单是否修改
     *
     * @param {any[]} args
     * @memberof PimEducationMobEditViewBase
     */
    public async cheackChange(): Promise<any>{
        const view = this.$store.getters['viewaction/getAppView'](this.viewtag);
        if (view && view.viewdatachange) {
                const title: any = this.$t('app.tabpage.sureclosetip.title');
                const contant: any = this.$t('app.tabpage.sureclosetip.content');
                const result = await this.$notice.confirm(title, contant);
                if (result) {
                    this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
                    return true;
                } else {
                    return false;
                }
        }else{
            return true;
        }
    }
}
</script>

<style lang='less'>
@import './ibz-weekly-usr2-mob-edit-view.less';
</style>