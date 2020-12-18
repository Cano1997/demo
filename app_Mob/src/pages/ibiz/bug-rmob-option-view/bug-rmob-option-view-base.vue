
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demoboptview': true, 'bug-rmob-option-view': true }">
    
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
                <view_form
            :viewState="viewState"
            viewName="BugRMobOptionView"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="Resolve"
            removeAction="Remove"
            loaddraftAction="GetDraft"
            loadAction="Get"
            createAction="Resolve"
            WFSubmitAction=""
            WFStartAction=""
            style='' 
            name="form"  
            ref='form' 
            @save="form_save($event)"  
            @remove="form_remove($event)"  
            @load="form_load($event)"  
            @closeview="closeView($event)">
        </view_form>
    </ion-content>
    <ion-footer class="view-footer">
        <div class="option-view-btnbox">
  <ion-button class="option-btn medium" color="medium" @click="back">返回</ion-button>
  <ion-button class="option-btn success" @click="save">保存</ion-button> 
</div>

    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BugService from '@/app-core/service/bug/bug-service';

import MobOptionViewEngine from '@engine/view/mob-option-view-engine';
import BugUIService from '@/ui-service/bug/bug-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class BugRMobOptionViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof BugRMobOptionViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugRMobOptionViewBase
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 实体UI服务对象
     *
     * @type BugUIService
     * @memberof BugRMobOptionViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BugRMobOptionViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof BugRMobOptionViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof BugRMobOptionViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BugRMobOptionViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BugRMobOptionViewBase
	 */
	protected viewtag: string = '206584f40a0caade6c253a360fad96c1';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof BugRMobOptionViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BugRMobOptionViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof BugRMobOptionViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof BugRMobOptionViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof BugRMobOptionViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof BugRMobOptionViewBase
     */
    protected navContext: any = { 'objecttype': 'bug', 'srfparentkey': '%bug%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof BugRMobOptionViewBase
     */
    protected navParam: any = { 'srfparentkey': '%bug%', 'objecttype': 'bug' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BugRMobOptionViewBase
     */
    protected model: any = {
        srfTitle: 'Bug选项操作视图（解决Bug）',
        srfCaption: 'bug.views.rmoboptionview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'bug.rmoboptionview',
        iconcls: '',
        icon: 'bug'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof BugRMobOptionViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof BugRMobOptionViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof BugRMobOptionViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected engine: MobOptionViewEngine = new MobOptionViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof BugRMobOptionViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof BugRMobOptionViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof BugRMobOptionViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BugRMobOptionViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugRMobOptionViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugRMobOptionViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if(this.$store.state.searchformStatus){
             this.$store.commit('setSearchformStatus',false);
             return
        }
              let result = await this.cheackChange();
      if(result){
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

        
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
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
     * @memberof BugRMobOptionViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 保存按钮事件
     *
     * @protected
     * @memberof MOBTESTMobOptionViewBase
     */
    protected save() {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        this.viewState.next({ tag: 'form', action: 'saveandexit', data: datas });
    }

    /**
     * 返回按钮事件
     *
     * @protected
     * @memberof MOBTESTMobOptionViewBase
     */
    protected back(args: any[]) {
        if (this.viewDefaultUsage === "routerView" ) {
            this.$store.commit("deletePage", this.$route.fullPath);
            this.$router.go(-1);
        } else {
            this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
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
@import './bug-rmob-option-view.less';
</style>