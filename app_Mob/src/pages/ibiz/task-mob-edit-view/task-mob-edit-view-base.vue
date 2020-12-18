<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobeditview': true, 'task-mob-edit-view': true }">
    
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
            viewName="TaskMobEditView"  
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
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_confirmstorychangecz.disabled}" v-show="righttoolbarModels.deuiaction1_confirmstorychangecz.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_confirmstorychangecz.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_confirmstorychangecz' }, $event),popUpGroup()" size="large">
                    <ion-icon name="search"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_confirmstorychangecz.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_confirmstorychangecz.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_startmobteamtask.disabled}" v-show="righttoolbarModels.deuiaction1_startmobteamtask.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_startmobteamtask.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_startmobteamtask' }, $event),popUpGroup()" size="large">
                    <ion-icon name="play"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_startmobteamtask.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_startmobteamtask.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_assigntaskmob.disabled}" v-show="righttoolbarModels.deuiaction1_assigntaskmob.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_assigntaskmob.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_assigntaskmob' }, $event),popUpGroup()" size="large">
                    <ion-icon name="people"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_assigntaskmob.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_assigntaskmob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_activemobtask.disabled}" v-show="righttoolbarModels.deuiaction1_activemobtask.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_activemobtask.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_activemobtask' }, $event),popUpGroup()" size="large">
                    <ion-icon name="magic"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_activemobtask.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_activemobtask.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_consumedmobtaskteam.disabled}" v-show="righttoolbarModels.deuiaction1_consumedmobtaskteam.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_consumedmobtaskteam.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_consumedmobtaskteam' }, $event),popUpGroup()" size="large">
                    <ion-icon name="clock-o"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_consumedmobtaskteam.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_consumedmobtaskteam.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_finishtask1.disabled}" v-show="righttoolbarModels.deuiaction1_finishtask1.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_finishtask1.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_finishtask1' }, $event),popUpGroup()" size="large">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_finishtask1.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_finishtask1.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_pausemobteamtask.disabled}" v-show="righttoolbarModels.deuiaction1_pausemobteamtask.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_pausemobteamtask.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_pausemobteamtask' }, $event),popUpGroup()" size="large">
                    <ion-icon name="pause"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_pausemobteamtask.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_pausemobteamtask.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_restartmobteamtask.disabled}" v-show="righttoolbarModels.deuiaction1_restartmobteamtask.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_restartmobteamtask.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_restartmobteamtask' }, $event),popUpGroup()" size="large">
                    <ion-icon name="step-forward"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_restartmobteamtask.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_restartmobteamtask.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_canceltaskmob.disabled}" v-show="righttoolbarModels.deuiaction1_canceltaskmob.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_canceltaskmob.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_canceltaskmob' }, $event),popUpGroup()" size="large">
                    <ion-icon name="power"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_canceltaskmob.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_canceltaskmob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_closetaskmob.disabled}" v-show="righttoolbarModels.deuiaction1_closetaskmob.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_closetaskmob.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_closetaskmob' }, $event),popUpGroup()" size="large">
                    <ion-icon name="backspace"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_closetaskmob.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_closetaskmob.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_mobmainedit.disabled}" v-show="righttoolbarModels.deuiaction1_mobmainedit.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_mobmainedit.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_mobmainedit' }, $event),popUpGroup()" size="large">
                    <ion-icon name="edit"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_mobmainedit.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_mobmainedit.caption')}}</span>
            </div>
        
                    <div :class="{'sub-item':true,'disabled':righttoolbarModels.deuiaction1_deletemob.disabled}" v-show="righttoolbarModels.deuiaction1_deletemob.visabled">
                <ion-button :disabled="righttoolbarModels.deuiaction1_deletemob.disabled" @click="righttoolbar_click({ tag: 'deuiaction1_deletemob' }, $event),popUpGroup()" size="large">
                    <ion-icon name="remove"></ion-icon>
                <span class="btn-inner-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_deletemob.caption')}}</span>
                </ion-button>
                <span class="btn-out-text">{{$t('task.mobeditviewrighttoolbar_toolbar.deuiaction1_deletemob.caption')}}</span>
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
import TaskService from '@/app-core/service/task/task-service';

import MobEditViewEngine from '@engine/view/mob-edit-view-engine';
import TaskUIService from '@/ui-service/task/task-ui-action';
import { AnimationService } from '@ibiz-core/service/animation-service'

@Component({
    components: {
    },
})
export default class TaskMobEditViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TaskMobEditViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskMobEditViewBase
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 实体UI服务对象
     *
     * @type TaskUIService
     * @memberof TaskMobEditViewBase
     */
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TaskMobEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof TaskMobEditViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof TaskMobEditViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TaskMobEditViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TaskMobEditViewBase
	 */
	protected viewtag: string = '16bfeba2aa5ae0287f8821660cf2dc78';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof TaskMobEditViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskMobEditViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否为子视图
     *
     * @type {boolean}
     * @memberof TaskMobEditViewBase
     */
    @Prop({ default: false }) protected isChildView?: boolean;

    /**
     * 是否为门户嵌入视图
     *
     * @type {boolean}
     * @memberof TaskMobEditViewBase
     */
    @Prop({ default: false }) protected isPortalView?: boolean;

    /**
     * 标题状态
     *
     * @memberof TaskMobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof TaskMobEditViewBase
     */
    protected navContext: any = { 'objecttype': 'task', 'srfparentkey': '%task%' };

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof TaskMobEditViewBase
     */
    protected navParam: any = { 'srfparentkey': '%task%', 'objecttype': 'task' };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TaskMobEditViewBase
     */
    protected model: any = {
        srfTitle: '任务移动端编辑视图',
        srfCaption: 'task.views.mobeditview.caption',
        srfSubCaption: '',
        dataInfo: '',
        viewname:'task.mobeditview',
        iconcls: '',
        icon: 'tasks'
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_righttoolbar: { name: 'righttoolbar', type: 'TOOLBAR' },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof TaskMobEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof TaskMobEditViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;



   /**
    * 工具栏 TaskMobEditView 模型
    *
    * @type {*}
    * @memberof TaskMobEditView
    */
    public righttoolbarModels: any = {
            deuiaction1_confirmstorychangecz: { name: 'deuiaction1_confirmstorychangecz', caption: '确认', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_XQCHANGE_BUT', uiaction: { tag: 'confirmStoryChangeCz', target: 'SINGLEKEY' } },

            deuiaction1_startmobteamtask: { name: 'deuiaction1_startmobteamtask', caption: '开始', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_START_BUT', uiaction: { tag: 'StartMobTeamTask', target: 'SINGLEKEY' } },

            deuiaction1_assigntaskmob: { name: 'deuiaction1_assigntaskmob', caption: '指派', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_ASSIGN_BUT', uiaction: { tag: 'AssignTaskMob', target: 'SINGLEKEY' } },

            deuiaction1_activemobtask: { name: 'deuiaction1_activemobtask', caption: '激活', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_ACTIVATION_BUT', uiaction: { tag: 'ActiveMobTask', target: 'SINGLEKEY' } },

            deuiaction1_consumedmobtaskteam: { name: 'deuiaction1_consumedmobtaskteam', caption: '工时', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CONSUM_BUT', uiaction: { tag: 'ConsumedMobTaskTeam', target: 'SINGLEKEY' } },

            deuiaction1_finishtask1: { name: 'deuiaction1_finishtask1', caption: '完成', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_COMPLETE_BUT', uiaction: { tag: 'finishTask1', target: 'SINGLEKEY' } },

            deuiaction1_pausemobteamtask: { name: 'deuiaction1_pausemobteamtask', caption: '暂停', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_PAUSE_BUT', uiaction: { tag: 'PauseMobTeamTask', target: 'SINGLEKEY' } },

            deuiaction1_restartmobteamtask: { name: 'deuiaction1_restartmobteamtask', caption: '继续', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_PROCEED_BUT', uiaction: { tag: 'RestartMobTeamTask', target: 'SINGLEKEY' } },

            deuiaction1_canceltaskmob: { name: 'deuiaction1_canceltaskmob', caption: '取消', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CANCEL_BUT', uiaction: { tag: 'CancelTaskMob', target: 'SINGLEKEY' } },

            deuiaction1_closetaskmob: { name: 'deuiaction1_closetaskmob', caption: '关闭', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CLOSE_BUT', uiaction: { tag: 'CloseTaskMob', target: 'SINGLEKEY' } },

            deuiaction1_mobmainedit: { name: 'deuiaction1_mobmainedit', caption: '编辑', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_EDIT_BUT', uiaction: { tag: 'MobMainEdit', target: 'SINGLEKEY' } },

            deuiaction1_deletemob: { name: 'deuiaction1_deletemob', caption: '删除', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_DELETE_BUT', uiaction: { tag: 'deleteMob', target: 'SINGLEKEY' } },

    };

    /**
     * 工具栏显示状态
     *
     * @type {boolean}
     * @memberof TaskMobEditView 
     */
    public righttoolbarShowState: boolean = false;

    /**
     * 工具栏权限
     *
     * @type {boolean}
     * @memberof TaskMobEditView 
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
     * @memberof TaskMobEditView 
     */
    public showGrop = false;

    /**
     * 工具栏分组是否显示的方法
     *
     * @type {boolean}
     * @memberof TaskMobEditView 
     */
    public popUpGroup (falg:boolean = false) {
        this.showGrop = falg;
    }

    


    /**
     * 工具栏模型集合名
     *
     * @memberof TaskMobEditViewBase
     */
    public toolbarModelList:any = ['righttoolbarModels',]

    /**
     * 解析视图参数
     *
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    protected engine: MobEditViewEngine = new MobEditViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof TaskMobEditViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            keyPSDEField: 'task',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskMobEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期
     *
     * @memberof TaskMobEditViewBase
     */
    public activated() {
        this.popUpGroup();
        this.thirdPartyInit();
    }



    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TaskMobEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 底部按钮样式
     * 
     * @memberof TaskMobEditViewBase
     */
    public button_style = "";

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMobEditViewBase
     */
    protected form_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforeload', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMobEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 beforesave 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMobEditViewBase
     */
    protected form_beforesave($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'beforesave', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMobEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * righttoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskMobEditViewBase
     */
    protected righttoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1_confirmstorychangecz')) {
            this.righttoolbar_deuiaction1_confirmstorychangecz_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_startmobteamtask')) {
            this.righttoolbar_deuiaction1_startmobteamtask_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_assigntaskmob')) {
            this.righttoolbar_deuiaction1_assigntaskmob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_activemobtask')) {
            this.righttoolbar_deuiaction1_activemobtask_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_consumedmobtaskteam')) {
            this.righttoolbar_deuiaction1_consumedmobtaskteam_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_finishtask1')) {
            this.righttoolbar_deuiaction1_finishtask1_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_pausemobteamtask')) {
            this.righttoolbar_deuiaction1_pausemobteamtask_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_restartmobteamtask')) {
            this.righttoolbar_deuiaction1_restartmobteamtask_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_canceltaskmob')) {
            this.righttoolbar_deuiaction1_canceltaskmob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_closetaskmob')) {
            this.righttoolbar_deuiaction1_closetaskmob_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_mobmainedit')) {
            this.righttoolbar_deuiaction1_mobmainedit_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1_deletemob')) {
            this.righttoolbar_deuiaction1_deletemob_click($event, '', $event2);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_confirmstorychangecz_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_confirmStoryChangeCz(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_startmobteamtask_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_StartMobTeamTask(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_assigntaskmob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_AssignTaskMob(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_activemobtask_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_ActiveMobTask(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_consumedmobtaskteam_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_ConsumedMobTaskTeam(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_finishtask1_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_finishTask1(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_pausemobteamtask_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
        // 参数

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_PauseMobTeamTask(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_restartmobteamtask_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_RestartMobTeamTask(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_canceltaskmob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_CancelTaskMob(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_closetaskmob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_CloseTaskMob(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_mobmainedit_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_MobMainEdit(datas, contextJO, paramJO, $event, xData, this);
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
     * @memberof TaskMobEditViewBase
     */
    protected async righttoolbar_deuiaction1_deletemob_click(params: any = {}, tag?: any, $event?: any): Promise<any> {
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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_deleteMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 第三方关闭视图
     *
     * @param {any[]} args
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
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
     * @memberof TaskMobEditViewBase
     */
    public initNavCaption(val:any,isCreate:boolean){
        this.$viewTool.setViewTitleOfThirdParty(this.$t(this.model.srfCaption) as string);        
    }



    /**
     * 保存
     *
     * @protected
     * @memberof TaskMobEditViewBase
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
@import './task-mob-edit-view.less';
</style>