<template>
<embed-view :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview9': true, 'task-team-mob-edit-view9': true }">
    <template slot="header">
    </template>

    <template slot="toolbar">
            <ion-buttons slot="end" class="ibiz-top-right-buttons ibiz-buttonGroup">
                                <div class="app-toolbar-container ">
                    <div class="app-quick-toolbar toolbar-right-bottons">
                    </div>
                </div>
            </ion-buttons>
    </template>
    <template slot="content">
                <view_form
            :viewState="viewState"
            viewName="TaskTeamMobEditView9"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="UpdateTemp"
            removeAction="RemoveTemp"
            loaddraftAction="GetDraftTemp"
            loadAction="GetTemp"
            createAction="CreateTemp"
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
    </template>
</embed-view>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbztaskteamService from '@/app-core/service/ibztaskteam/ibztaskteam-service';

import MobEditView9Engine from '@engine/view/mob-edit-view9-engine';
import IbztaskteamUIService from '@/ui-service/ibztaskteam/ibztaskteam-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class TaskTeamMobEditView9Base extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TaskTeamMobEditView9Base
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {IbztaskteamService}
     * @memberof TaskTeamMobEditView9Base
     */
    protected appEntityService: IbztaskteamService = new IbztaskteamService();

    /**
     * 实体UI服务对象
     *
     * @type IbztaskteamUIService
     * @memberof TaskTeamMobEditView9Base
     */
    public appUIService: IbztaskteamUIService = new IbztaskteamUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TaskTeamMobEditView9Base
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TaskTeamMobEditView9Base
	 */
	protected viewtag: string = '99f684f22f1b774d72964f4419f16d8d';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof TaskTeamMobEditView9Base
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskTeamMobEditView9Base
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof TaskTeamMobEditView9Base
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamMobEditView9Base
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof TaskTeamMobEditView9Base
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TaskTeamMobEditView9Base
     */
    protected model: any = {
        srfTitle: '任务团队移动端编辑视图',
        srfCaption: 'ibztaskteam.views.mobeditview9.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'ibztaskteam.mobeditview9',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof TaskTeamMobEditView9Base
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 TaskTeamMobEditView9 模型
    *
    * @type {*}
    * @memberof TaskTeamMobEditView9
    */
    public righttoolbarModels: any = {
    };

    


    /**
     * 工具栏模型集合名
     *
     * @memberof TaskTeamMobEditView9Base
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof TaskTeamMobEditView9Base
     */
    protected parseViewParam(): void {
        const { context, param } = this.$viewTool.formatNavigateViewParam(this, false);
        this.context = { ...context };
        this.viewparams = { ...param }
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
     */
    protected engine: MobEditView9Engine = new MobEditView9Engine();

    /**
     * 引擎初始化
     *
     * @memberof TaskTeamMobEditView9Base
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'ibztaskteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskTeamMobEditView9Base
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TaskTeamMobEditView9Base
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        if (this.panelState) {
            this.panelStateEvent = this.panelState.subscribe((res: any) => {
                if (Object.is(res.tag, 'meditviewpanel')) {
                    if (Object.is(res.action, 'save')) {
                        this.viewState.next({ tag: 'form', action: 'save', data: res.data });
                    }
                    if (Object.is(res.action, 'remove')) {
                        this.viewState.next({ tag: 'form', action: 'remove', data: res.data });
                    }
                }
            });
        }


    }


    /**
     * 销毁之前
     *
     * @memberof TaskTeamMobEditView9Base
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskTeamMobEditView9Base
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TaskTeamMobEditView9Base
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof TaskTeamMobEditView9Base
     */
    protected afterDestroyed(){
        if (this.panelStateEvent) {
            this.panelStateEvent.unsubscribe();
        }

    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamMobEditView9Base
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamMobEditView9Base
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamMobEditView9Base
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamMobEditView9Base
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTeamMobEditView9Base
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
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
     * @memberof TaskTeamMobEditView9Base
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 面板通知对象
     *
     * @type {Subject<ViewState>}
     * @memberof TaskTeamMobEditView9Base
     */
    @Prop() public panelState ?:Subject<ViewState>;

    /**
     * 面板订阅对象
     *
     * @type {Subject<ViewState>}
     * @memberof TaskTeamMobEditView9Base
     */
    public panelStateEvent: Subscription | undefined;


}
</script>

<style lang='less'>
@import './task-team-mob-edit-view9.less';
</style>