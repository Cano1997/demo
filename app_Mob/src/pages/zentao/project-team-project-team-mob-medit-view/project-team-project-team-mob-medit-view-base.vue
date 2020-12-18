<template>
<div  class="view-container  app-view-mobmeditview9  project-team-project-team-mob-medit-view">
    <div  class="view-content-ctrl">
        <div>
                        <view_meditviewpanel
                :viewState="viewState"
                viewName="ProjectTeamProjectTeamMobMEditView"  
                :viewparams="viewparams" 
                :context="context" 
                :showBusyIndicator="true" 
                :saveRefView="saveRefView" 
                @viewdatadirty="onViewDataDirty" 
                @drdatasaved="onDRDataSaved" 
                updateAction=""
                removeAction="RemoveTemp"
                loaddraftAction="GetDraftTemp"
                loadAction=""
                createAction=""
                fetchAction="FetchTempDefault"
                name="meditviewpanel"  
                ref='meditviewpanel' 
                @datachange="meditviewpanel_datachange($event)"  
                @save="meditviewpanel_save($event)"  
                @beforesave="meditviewpanel_beforesave($event)"  
                @load="meditviewpanel_load($event)"  
                @closeview="closeView($event)">
            </view_meditviewpanel>
        </div>
    </div>
</div>

</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IBZPROJECTTEAMService from '@/app-core/service/ibzprojectteam/ibzprojectteam-service';

import MobMEditView9Engine from '@engine/view/mob-medit-view9-engine';
import IBZPROJECTTEAMUIService from '@/ui-service/ibzprojectteam/ibzprojectteam-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class ProjectTeamProjectTeamMobMEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {IBZPROJECTTEAMService}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected appEntityService: IBZPROJECTTEAMService = new IBZPROJECTTEAMService();

    /**
     * 实体UI服务对象
     *
     * @type IBZPROJECTTEAMUIService
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    public appUIService: IBZPROJECTTEAMUIService = new IBZPROJECTTEAMUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProjectTeamProjectTeamMobMEditViewBase
	 */
	protected viewtag: string = '3b0bbcbce04a67e3f6fbb0209518bc10';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected model: any = {
        srfTitle: '项目团队多表单编辑视图',
        srfCaption: 'ibzprojectteam.views.projectteammobmeditview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'ibzprojectteam.projectteammobmeditview',
        iconcls: '',
        icon: 'users'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected containerModel: any = {
        view_meditviewpanel: { name: 'meditviewpanel', type: 'MULTIEDITVIEWPANEL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected engine: MobMEditView9Engine = new MobMEditView9Engine();

    /**
     * 引擎初始化
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            meditviewpanel: this.$refs.meditviewpanel,
            keyPSDEField: 'ibzprojectteam',
            majorPSDEField: 'account',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();
if(this.formDruipart){
            this.formDruipart.subscribe((res) =>{
                if(Object.is(res.action,'save')){
                    let opt ={data:res.data};
                    Object.assign(opt,this.context);
                    this.viewState.next({ tag:'meditviewpanel', action: 'save', data: opt });
                }
                if(Object.is(res.action,'remove')){
                    let opt ={data:res.data};
                    Object.assign(opt,this.context);
                    this.viewState.next({ tag:'meditviewpanel', action: 'remove', data: opt });
                }
            });
        }           

    }

    /**
     * 第三方容器初始化
     * 
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected afterDestroyed(){

    }

    /**
     * meditviewpanel 部件 datachange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected meditviewpanel_datachange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('meditviewpanel', 'datachange', $event);
    }

    /**
     * meditviewpanel 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected meditviewpanel_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('meditviewpanel', 'save', $event);
    }

    /**
     * meditviewpanel 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected meditviewpanel_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('meditviewpanel', 'beforesave', $event);
    }

    /**
     * meditviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    protected meditviewpanel_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('meditviewpanel', 'load', $event);
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
     * @memberof ProjectTeamProjectTeamMobMEditView
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
     * @memberof ProjectTeamProjectTeamMobMEditView
     */
    public async opendata(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        //this.$notice.warning('未指定关系视图');
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
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
     * @memberof ProjectTeamProjectTeamMobMEditViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }


    /**
    * 界面关系通讯对象
    *
    * @type {Subject<ViewState>}
    * @memberof IBZSAM02MobMEditView9
    */
    @Prop() public formDruipart!: Subject<ViewState>;




    /**
     * 刷新数据参数
     *
     * @type {number}
     * @memberof ProjectTeamProjectTeamMobMEditView
     */
    @Prop() public saveRefView?: number;

    /**
     * 关系数据变化
     *
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditView
     */
    public onViewDataDirty($event: any) {
        this.$emit('drdatachange', $event);
    }

    /**
     * 关系数据保存执行完成
     *
     * @param {*} $event
     * @memberof ProjectTeamProjectTeamMobMEditView
     */
    public onDRDataSaved($event: any) {
        this.$emit('drdatasaved', $event);
    }


}
</script>

<style lang='less'>
@import './project-team-project-team-mob-medit-view.less';
</style>