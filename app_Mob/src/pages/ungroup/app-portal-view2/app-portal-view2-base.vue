
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'appportalview': true, 'app-portal-view2': true }">
    
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

    
    </ion-header>

    <ion-content >
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
                <view_dashboard
            :viewState="viewState"
            viewName="AppPortalView2"  
            :viewparams="viewparams" 
            :context="context" 
            name="dashboard"  
            ref='dashboard' 
            @closeview="closeView($event)">
        </view_dashboard>
    </ion-content>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';

import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class AppPortalView2Base extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AppPortalView2Base
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof AppPortalView2Base
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof AppPortalView2Base
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof AppPortalView2Base
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof AppPortalView2Base
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof AppPortalView2Base
	 */
	protected viewtag: string = 'D3037883-E4BF-4F1D-86D1-E9965B6315D4';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppPortalView2Base
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppPortalView2Base
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof AppPortalView2Base
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof AppPortalView2Base
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof AppPortalView2Base
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof AppPortalView2Base
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof AppPortalView2Base
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof AppPortalView2Base
     */
    protected model: any = {
        srfTitle: '应用门户视图2',
        srfCaption: 'app.views.appportalview2.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'app.views.appportalview2',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  AppPortalView2Base
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
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof AppPortalView2Base
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof AppPortalView2Base
     */
    @Prop({default:true}) protected showTitle?: boolean;






    /**
     * 工具栏模型集合名
     *
     * @memberof AppPortalView2Base
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
     */
    public async pullDownToRefresh($event: any): Promise<any> {
        setTimeout(() => {
            $event.srcElement.complete();
        }, 2000);
    }


    /**
     * 引擎初始化
     *
     * @memberof AppPortalView2Base
     */
    protected engineInit(): void {
    }

    /**
     * Vue声明周期
     *
     * @memberof AppPortalView2Base
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof AppPortalView2Base
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof AppPortalView2Base
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof AppPortalView2Base
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();
        this.viewState.next({ tag: 'dashboard', action: 'load', data: {} });

    }

    /**
     * 第三方容器初始化
     * 
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof AppPortalView2Base
     */
    protected afterDestroyed(){

    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
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
     * @memberof AppPortalView2Base
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 应用起始页面
     *
     * @type {boolean}
     * @memberof AppPortalView2
     */
    public isDefaultPage: boolean = false;
    
}
</script>

<style lang='less'>
@import './app-portal-view2.less';
</style>