<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobpickupview': true, 'module-mob-pickup-view': true }">
    
    <ion-header>

    
              <ion-toolbar>
    <ion-searchbar style="height: 36px; padding-bottom: 0px;" :placeholder="$t('app.fastsearch')" debounce="500" @ionChange="quickValueChange($event)"></ion-searchbar>
  </ion-toolbar>

    </ion-header>

    <ion-content >
                <view_pickupviewpanel
            :viewState="viewState"
            viewName="ModuleMobPickupView"  
            :viewparams="viewparams" 
            :context="context" 
            :isSingleSelect="isSingleSelect"
            :isShowButtons="isShowButtons"
            name="pickupviewpanel"  
            ref='pickupviewpanel' 
            @selectionchange="pickupviewpanel_selectionchange($event)"  
            @load="pickupviewpanel_load($event)"  
            @closeview="closeView($event)">
        </view_pickupviewpanel>
    </ion-content>
    <ion-footer class="view-footer">
        <ion-toolbar style="text-align: center;">
    <div class="mobpickupview_button">
      <ion-button class="pick-btn" @click="onClickCancel" color="medium">{{$t('app.button.cancel')}}</ion-button>
      <ion-button class="pick-btn" @click="onClickOk" :disabled="viewSelections.length === 0">{{$t('app.button.confirm')}}</ion-button>
    </div>
</ion-toolbar>

    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ModuleService from '@/app-core/service/module/module-service';

import MobPickupViewEngine from '@engine/view/mob-pickup-view-engine';
import ModuleUIService from '@/ui-service/module/module-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class ModuleMobPickupViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ModuleMobPickupViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {ModuleService}
     * @memberof ModuleMobPickupViewBase
     */
    protected appEntityService: ModuleService = new ModuleService();

    /**
     * 实体UI服务对象
     *
     * @type ModuleUIService
     * @memberof ModuleMobPickupViewBase
     */
    public appUIService: ModuleUIService = new ModuleUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ModuleMobPickupViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ModuleMobPickupViewBase
	 */
	protected viewtag: string = '0e2762177f3bf384b00d863798bd744c';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof ModuleMobPickupViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ModuleMobPickupViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof ModuleMobPickupViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof ModuleMobPickupViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof ModuleMobPickupViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ModuleMobPickupViewBase
     */
    protected model: any = {
        srfTitle: '模块移动端数据选择视图',
        srfCaption: 'module.views.mobpickupview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'module.mobpickupview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: { name: 'pickupviewpanel', type: 'PICKUPVIEWPANEL' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof ModuleMobPickupViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof ModuleMobPickupViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof ModuleMobPickupViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
     */
    protected engine: MobPickupViewEngine = new MobPickupViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof ModuleMobPickupViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'module',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof ModuleMobPickupViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof ModuleMobPickupViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ModuleMobPickupViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ModuleMobPickupViewBase
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
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModuleMobPickupViewBase
     */
    protected pickupviewpanel_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ModuleMobPickupViewBase
     */
    protected pickupviewpanel_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
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
     * @memberof ModuleMobPickupViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 视图选中数据
     *
     * @type {any[]}
     * @memberof ModuleMobPickupView
     */
    public viewSelections: any[] = [];

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof ModuleMobPickupView
     */
    @Prop({default: true}) public isShowButtons!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof ModuleMobPickupView
     */
    public isSingleSelect: boolean = true;

    /**
     * 确定
     *
     * @memberof ModuleMobPickupView
     */
    public onClickOk(): void {
        this.viewDatasChange(this.viewSelections);
        this.$emit('close', this.viewSelections);
    }

    /**
     * 取消
     *
     * @memberof ModuleMobPickupView
     */
    public onClickCancel(): void {
        this.$emit('close', null);
    }

    /**
     * 快速搜索值
     *
     * @memberof ModuleMobPickupView
     */
    public quickValue = "";

    /**
     * 快速搜索
     *
     * @memberof ModuleMobPickupView
     */
    public async quickValueChange(event: any) {
        const pickupviewpanel: any = this.$refs.pickupviewpanel;
        if (pickupviewpanel) {
            this.quickValue = event.detail.value;
            pickupviewpanel.quickSearch(this.quickValue);
        }
    }

}
</script>

<style lang='less'>
@import './module-mob-pickup-view.less';
</style>