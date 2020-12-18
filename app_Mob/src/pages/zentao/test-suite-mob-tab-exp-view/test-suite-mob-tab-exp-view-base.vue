
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobtabexpview': true, 'test-suite-mob-tab-exp-view': true }">
    
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
                            <ion-segment-button value="tabviewpanel">
                            <ion-badge color="danger">{{counter.counterData.casecnt?counter.counterData.casecnt:''}}</ion-badge>
                            功能测试</ion-segment-button>
                            <ion-segment-button value="tabviewpanel2">
                            
                            套件详情</ion-segment-button>
                        </ion-segment>
                    </ion-toolbar>
    </ion-header>

    <ion-content >
                <view_tabexppanel
            :viewState="viewState"
            viewName="TestSuiteMobTabExpView"  
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
import TestSuiteService from '@/app-core/service/test-suite/test-suite-service';

import MobTabExpViewEngine from '@engine/view/mob-tab-exp-view-engine';
import TestSuiteUIService from '@/ui-service/test-suite/test-suite-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class TestSuiteMobTabExpViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected appEntityService: TestSuiteService = new TestSuiteService();

    /**
     * 实体UI服务对象
     *
     * @type TestSuiteUIService
     * @memberof TestSuiteMobTabExpViewBase
     */
    public appUIService: TestSuiteUIService = new TestSuiteUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TestSuiteMobTabExpViewBase
	 */
	protected viewtag: string = '98d17bc354594cf75704f92e9946f4e2';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected model: any = {
        srfTitle: '测试套件分页导航视图',
        srfCaption: 'testsuite.views.mobtabexpview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'testsuite.mobtabexpview',
        iconcls: '',
        icon: 'suitcase'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof TestSuiteMobTabExpViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;




    /**
     * 工具栏模型集合名
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof  TestSuiteMobTabExpViewBase
     */
    public counter:any = {counterData:{}} ;


    /**
     * 计数器初始化
     *
     * @type {string}
     * @memberof  TestSuiteMobTabExpViewBase
     */
    private counterInit(value:any) {
        this.counter = value;
    }

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof  TestSuiteMobTabExpViewBase
     */
    protected activiedTabViewPanel: string = 'tabviewpanel';

    /**
     * 分页导航栏激活
     *
     * @param {*} $event
     * @returns {void}
     * @memberof TestSuiteMobTabExpViewBase
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
        let name:string = 'testsuite';
        let id:any = this.context.testsuite;
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
        if (info.name && info.name == 'testsuite' && info.id && info.id == this.context.testsuite) {
          this.activiedTabViewPanel = info.value;
        } else { 
          this.activiedTabViewPanel = 'tabviewpanel';
        }
        }
    }


    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected engine: MobTabExpViewEngine = new MobTabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testsuite',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
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
     * @memberof TestSuiteMobTabExpViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }


    /**
     * 加载模型
     * 
     * @memberof TestSuiteMobTabExpViewBase
     */
    public loadModel(){
        if(this.context.testsuite){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.name) {
                    Object.assign(this.model, { dataInfo: _data.name });
                    Object.assign(this.model, { srfCaption: `${this.$t(this.model.srfCaption)} - ${this.model.dataInfo}` });
                    this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);
                }
            })
        }
    }


}
</script>

<style lang='less'>
@import './test-suite-mob-tab-exp-view.less';
</style>