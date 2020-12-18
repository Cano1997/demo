
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobtabexpview': true, 'ibz-monthly-my-received-mob-tab-exp-view': true }">
    
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

    
                    <ion-toolbar>
                        <ion-segment :scrollable="true" :value="activiedTabViewPanel" @ionChange="tabExpPanelChange($event)">
                            <ion-segment-button value="tabviewpanel2">
                            
                            月报</ion-segment-button>
                            <ion-segment-button value="tabviewpanel">
                            
                            完成任务</ion-segment-button>
                            <ion-segment-button value="tabviewpanel3">
                            
                            计划参与</ion-segment-button>
                        </ion-segment>
                    </ion-toolbar>
    </ion-header>

    <ion-content >
                <view_tabexppanel
            :viewState="viewState"
            viewName="IbzMonthlyMyReceivedMobTabExpView"  
            :viewparams="viewparams" 
            :context="context" 
            :activiedTabViewPanel="activiedTabViewPanel"     
            @changepanel="changePanel"
            @counterInit="counterInit"
            name="tabexppanel"  
            ref='tabexppanel' 
            @closeview="closeView($event)">
        </view_tabexppanel>
    </ion-content>
</ion-page>
</template>



<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMonthlyService from '@/app-core/service/ibz-monthly/ibz-monthly-service';

import MobTabExpViewEngine from '@engine/view/mob-tab-exp-view-engine';
import IbzMonthlyUIService from '@/ui-service/ibz-monthly/ibz-monthly-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class IbzMonthlyMyReceivedMobTabExpViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {IbzMonthlyService}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected appEntityService: IbzMonthlyService = new IbzMonthlyService();

    /**
     * 实体UI服务对象
     *
     * @type IbzMonthlyUIService
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public appUIService: IbzMonthlyUIService = new IbzMonthlyUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
	 */
	protected viewtag: string = 'f04572d16a18f7a597843a128db20fb0';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected navContext: any = { 'srfparentkey': '%ibzmonthly%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected navParam: any = { 'srfparentkey': '%ibzmonthly%' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected model: any = {
        srfTitle: '月报分页导航视图',
        srfCaption: 'ibzmonthly.views.myreceivedmobtabexpview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'ibzmonthly.myreceivedmobtabexpview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;





    /**
     * 工具栏模型集合名
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 计数器数据
     *
     * @type {string}
     * @memberof  IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public counter:any = {counterData:{}} ;


    /**
     * 计数器初始化
     *
     * @type {string}
     * @memberof  IbzMonthlyMyReceivedMobTabExpViewBase
     */
    private counterInit(value:any) {
        this.counter = value;
    }

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof  IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected activiedTabViewPanel: string = 'tabviewpanel2';

    /**
     * 分页导航栏激活
     *
     * @param {*} $event
     * @returns {void}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public tabExpPanelChange($event: any): void {
        let { detail } = $event;
        if (!detail) {
            return;
        }
        let { value } = detail;
        if (!value) {
            return;
        }
        this.viewState.next({ tag: 'tabexppanel', action: 'active', data: { activeItem: value } });
        this.setLocalStorage(value);     
    }

    /**
     * 子传父修改激活的Panel
     *
     * @param {*} $event
     * @returns {void}
     * @memberof MOBORDERMobTabExpViewBase
     */
    protected changePanel(res:any) : void {
      this.activiedTabViewPanel = res;
    }
    /**
     * localStorage存值
     *
     * @param {*} $event
     * @returns {void}
     * @memberof MOBORDERMobTabExpViewBase
     */    
    public setLocalStorage(value:any) {
        let name:string = 'ibzmonthly';
        let id:any = this.context.ibzmonthly;
        let obj:any = {"name":name,"id":id,"value":value};
        localStorage.setItem('tabKey',JSON.stringify(obj));    
    }
    /**
     * localStorage取值
     *
     * @param {*} $event
     * @returns {void}
     * @memberof MOBORDERMobTabExpViewBase
     */
    public getLocalStorage() {
        let key:any = localStorage.getItem('tabKey')
        if(key){
        let info:any = JSON.parse(key);
        if (info.name && info.name == 'ibzmonthly' && info.id && info.id == this.context.ibzmonthly) {
          this.activiedTabViewPanel = info.value;
        } else { 
          this.activiedTabViewPanel = 'tabviewpanel2';
        }
        }
    }


    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected engine: MobTabExpViewEngine = new MobTabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzmonthly',
            majorPSDEField: 'ibzmonthlyname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();
        this.getLocalStorage();


    }


    /**
     * 销毁之前
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
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
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }


    /**
     * 加载模型
     * 
     * @memberof IbzMonthlyMyReceivedMobTabExpViewBase
     */
    public loadModel(){
        if(this.context.ibzmonthly){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.ibzmonthlyname) {
                    Object.assign(this.model, { dataInfo: _data.ibzmonthlyname });
                    Object.assign(this.model, { srfCaption: `${this.$t(this.model.srfCaption)} - ${this.model.dataInfo}` });
                    this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);
                }
            })
        }
    }


}
</script>

<style lang='less'>
@import './ibz-monthly-my-received-mob-tab-exp-view.less';
</style>