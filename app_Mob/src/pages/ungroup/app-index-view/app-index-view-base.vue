<template>

<div class="indexView">
    <view_appmenu
    :viewState="viewState"
    viewName="AppIndexView"  
    :viewparams="viewparams" 
    :context="context" 
    :showBusyIndicator="true" 
    controlStyle=""
    v-model="collapseChange"  
    :mode="mode"  
    :selectTheme="selectTheme"  
    :isDefaultPage="isDefaultPage"  
    :defPSAppView="defPSAppView" 
    name="appmenu"  
    ref='appmenu' 
    @closeview="closeView($event)">
</view_appmenu>
    <app-update-log></app-update-log>
</div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';

import { AnimationService } from '@ibiz-core/service/animation-service'
import { Environment } from '@/environments/environment';


@Component({
    components: {
    },
})
export default class AppIndexViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AppIndexViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof AppIndexViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof AppIndexViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof AppIndexViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof AppIndexViewBase
	 */
	protected viewtag: string = '15DFA5E1-68C2-4D93-A0FB-56E09EFEF56D';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof AppIndexViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected model: any = {
        srfTitle: 'iBiz软件生产管理',
        srfCaption: 'app.views.appindexview.caption',
        srfSubCaption: '工作台',
        dataInfo: '',
        viewname:'app.views.appindexview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  AppIndexViewBase
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
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    protected containerModel: any = {
        view_appmenu: { name: 'appmenu', type: 'APPMENU' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof AppIndexViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof AppIndexViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof AppIndexViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }


    /**
     * 引擎初始化
     *
     * @memberof AppIndexViewBase
     */
    protected engineInit(): void {
    }

    /**
     * Vue声明周期
     *
     * @memberof AppIndexViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AppIndexViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.setViewTitleStatus();

        localStorage.setItem('lanArray',JSON.stringify(["ZH-CN","EN-US"]));
        import('@/locale/lang/zh-CN').then((res:any) =>{
            this.$i18n.setLocaleMessage('ZH-CN',res.default);
        })

    }


    /**
     * 销毁之前
     *
     * @memberof AppIndexViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof AppIndexViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof AppIndexViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof AppIndexViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.thirdPartyInit();
        this.viewState.next({ tag: 'appmenu', action: 'load', data: {} });
        this.$viewTool.setIndexParameters([{ pathName: 'appindexview', parameterName: 'appindexview' }]);
        this.$viewTool.setIndexViewParam(this.context);

    }

    /**
     * 第三方容器初始化
     * 
     * @memberof AppIndexViewBase
     */
    protected  thirdPartyInit(){
        if(!this.isChildView){
            this.$viewTool.setThirdPartyEvent(this.closeView);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof AppIndexViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof AppIndexViewBase
     */
    protected afterDestroyed(){

    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
            this.quitFun();
        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 菜单位置
     *
     * @private
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    private mode: boolean = false;

    /**
     * 当前主题
     *
     * @readonly
     * @memberof AppIndexViewBase
     */
    get selectTheme() {
        if (this.$router.app.$store.state.selectTheme) {
            return this.$router.app.$store.state.selectTheme;
        } else if (localStorage.getItem('theme-class')) {
            return localStorage.getItem('theme-class');
        } else {
            return 'app-default-theme';
        }
    }

    /**
     * 当前字体
     *
     * @readonly
     * @memberof AppIndexViewBase
     */
    get selectFont() {
        if (this.$router.app.$store.state.selectFont) {
            return this.$router.app.$store.state.selectFont;
        } else if (localStorage.getItem('font-family')) {
            return localStorage.getItem('font-family');
        } else {
            return 'Microsoft YaHei';
        }
    }

    /**
     * 菜单收缩变化
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    public collapseChange: boolean = false;

    /**
     * 菜单收缩点击
     *
     * @memberof AppIndexViewBase
     */
    public handleClick(): void {
        this.collapseChange = !this.collapseChange;
    }

    /**
     * 默认打开的视图
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    public defPSAppView: any = {
    };

    /**
     * 应用起始页面
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    public isDefaultPage: boolean = true;

    /**
     * 获取样式
     *
     * @readonly
     * @type {string[]}
     * @memberof AppIndexViewBase
     */
    get themeClasses(): string[] {
        return [
            Object.is(this.selectTheme, 'app_theme_blue') ? 'app_theme_blue' : '',
            Object.is(this.selectTheme, 'app-default-theme') ? 'app-default-theme' : '',
            Object.is(this.selectTheme, 'app_theme_darkblue') ? 'app_theme_darkblue' : '',
        ];
    }

    /**
     * 主题字体
     *
     * @readonly
     * @type {*}
     * @memberof AppIndexViewBase
     */
    get themeStyle(): any {
        return {
            'height': '100vh',
            'font-family': this.selectFont,
        }
    }

    /**
     * 获取路由列表
     *
     * @readonly
     * @type {any[]}
     * @memberof AppIndexViewBase
     */
    get getRouterList(): any[] {
        return this.$store.state.historyPathList;
    }

    /**
     * 获取路由键值
     *
     * @readonly
     * @type {string}
     * @memberof AppIndexViewBase
     */
    get getRouterViewKey(): string {
        return this.$route.fullPath;
    }

}
</script>

<style lang='less'>
@import './app-index-view.less';
</style>