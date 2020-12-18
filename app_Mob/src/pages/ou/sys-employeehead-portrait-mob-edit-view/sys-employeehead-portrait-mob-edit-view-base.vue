<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview': true, 'sys-employeehead-portrait-mob-edit-view': true }">
    
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
            viewName="SysEmployeeheadPortraitMobEditView"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="true" 
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
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysEmployeeService from '@/app-core/service/sys-employee/sys-employee-service';

import MobEditViewEngine from '@engine/view/mob-edit-view-engine';
import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class SysEmployeeheadPortraitMobEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 实体UI服务对象
     *
     * @type SysEmployeeUIService
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    public appUIService: SysEmployeeUIService = new SysEmployeeUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof SysEmployeeheadPortraitMobEditViewBase
	 */
	protected viewtag: string = '97630768e30593ab04f3d7dc263796cb';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected navContext: any = { 'sysemployee': '%srfuserid%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected model: any = {
        srfTitle: '人员移动端编辑视图（头像）',
        srfCaption: 'sysemployee.views.headportraitmobeditview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'sysemployee.headportraitmobeditview',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 工具栏模型集合名
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    public toolbarModelList:any = []

    /**
     * 解析视图参数
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected engine: MobEditViewEngine = new MobEditViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'sysemployee',
            majorPSDEField: 'personname',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    public activated() {
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }


    /**
     * 执行mounted后的逻辑
     * 
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
     * @memberof SysEmployeeheadPortraitMobEditViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 保存
     *
     * @protected
     * @memberof SysEmployeeheadPortraitMobEditViewBase
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
@import './sys-employeehead-portrait-mob-edit-view.less';
</style>