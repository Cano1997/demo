<template>
    <div ref='form' class="app-form story-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_12COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('story.mobnewform_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='prodoctname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="prodoctname_item"  
    :itemValue="this.data.prodoctname" 
    v-show="detailsModel.prodoctname.visible" 
    :itemRules="this.rules.prodoctname" 
    :caption="$t('story.mobnewform_form.details.prodoctname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.prodoctname.disabled"
    :error="detailsModel.prodoctname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='prodoctname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='product' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.prodoctname.disabled"
    :service="service"
    :acParams="{ serviceName: 'product', interfaceName: 'FetchDefault'}"
    :value="data.prodoctname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.prodoctname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='branch' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="branch_item"  
    :itemValue="this.data.branch" 
    v-show="detailsModel.branch.visible" 
    :itemRules="this.rules.branch" 
    :caption="$t('story.mobnewform_form.details.branch')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.branch.disabled"
    :error="detailsModel.branch.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="ProductBranch"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.branch.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.branch"  
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    @change="($event)=>this.data.branch = $event" />
</app-form-item>



<app-form-item 
    name='modulename' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="modulename_item"  
    :itemValue="this.data.modulename" 
    v-show="detailsModel.modulename.visible" 
    :itemRules="this.rules.modulename" 
    :caption="$t('story.mobnewform_form.details.modulename')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.modulename.disabled"
    :error="detailsModel.modulename.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='modulename' 
    deMajorField='name'
    deKeyField='id'
    valueitem='module' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "product": "%product%" } '
    :navigateParam ='{ "product": "%product%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.modulename.disabled"
    :service="service"
    :acParams="{ serviceName: 'productmodule', interfaceName: 'FetchStoryModule'}"
    :value="data.modulename" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.modulename = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='plan' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="plan_item"  
    :itemValue="this.data.plan" 
    v-show="detailsModel.plan.visible" 
    :itemRules="this.rules.plan" 
    :caption="$t('story.mobnewform_form.details.plan')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.plan.disabled"
    :error="detailsModel.plan.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="CurProductPlan"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.plan.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.plan"  
    :navigateContext ='{ "n_product_eq": "%product%" } '
    :navigateParam ='{ "n_product_eq": "%product%" } '
    @change="($event)=>this.data.plan = $event" />
</app-form-item>



<app-form-item 
    name='source' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="source_item"  
    :itemValue="this.data.source" 
    v-show="detailsModel.source.visible" 
    :itemRules="this.rules.source" 
    :caption="$t('story.mobnewform_form.details.source')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.source.disabled"
    :error="detailsModel.source.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Story__source"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.source.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.source"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.source = $event" />
</app-form-item>



<app-form-item 
    name='sourcenote' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="sourcenote_item"  
    :itemValue="this.data.sourcenote" 
    v-show="detailsModel.sourcenote.visible" 
    :itemRules="this.rules.sourcenote" 
    :caption="$t('story.mobnewform_form.details.sourcenote')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.sourcenote.disabled"
    :error="detailsModel.sourcenote.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.sourcenote"
    unit=""
    :disabled="detailsModel.sourcenote.disabled" 
    @change="($event)=>this.data.sourcenote = $event" />
</app-form-item>



<app-form-item 
    name='assignedtopk' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedtopk_item"  
    :itemValue="this.data.assignedtopk" 
    v-show="detailsModel.assignedtopk.visible" 
    :itemRules="this.rules.assignedtopk" 
    :caption="$t('story.mobnewform_form.details.assignedtopk')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedtopk.disabled"
    :error="detailsModel.assignedtopk.error" 
    :isEmptyCaption="false">
        <app-mob-picker
    name='assignedtopk'
    deMajorField='personname'
    deKeyField='username'
    valueitem='assignedto' 
    style=""  
    :formState="formState"
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :itemParam='{ }' 
    :disabled="detailsModel.assignedtopk.disabled"
    :service="service"
    :acParams="{ serviceName: 'sysemployee', interfaceName: 'FetchDefault'}"
    :value="data.assignedtopk" 
    :pickupView="{ viewname: 'sys-employee-tree-mob-pickup-view', title: '人员移动端数据选择视图', deResParameters: [], parameters: [{ pathName: 'sysemployees', parameterName: 'sysemployee' }, { pathName: 'treemobpickupview', parameterName: 'treemobpickupview' } ], placement:'' }"
    @formitemvaluechange="onFormItemValueChange">
</app-mob-picker>

</app-form-item>



<app-form-item 
    name='neednotreview' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="neednotreview_item"  
    :itemValue="this.data.neednotreview" 
    v-show="detailsModel.neednotreview.visible" 
    :itemRules="this.rules.neednotreview" 
    :caption="$t('story.mobnewform_form.details.neednotreview')"  
    :labelWidth="10"  
    :isShowCaption="true"
    :disabled="detailsModel.neednotreview.disabled"
    :error="detailsModel.neednotreview.error" 
    :isEmptyCaption="true">
        <app-mob-select 
    tag="NeedNotReviewNew"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.neednotreview.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.neednotreview"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.neednotreview = $event" />
</app-form-item>



<app-form-item 
    name='title' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="title_item"  
    :itemValue="this.data.title" 
    v-show="detailsModel.title.visible" 
    :itemRules="this.rules.title" 
    :caption="$t('story.mobnewform_form.details.title')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.title.disabled"
    :error="detailsModel.title.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.title"
    unit=""
    :disabled="detailsModel.title.disabled" 
    @change="($event)=>this.data.title = $event" />
</app-form-item>



<app-form-item 
    name='pri' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="pri_item"  
    :itemValue="this.data.pri" 
    v-show="detailsModel.pri.visible" 
    :itemRules="this.rules.pri" 
    :caption="$t('story.mobnewform_form.details.pri')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Story__pri"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.pri.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.pri"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.pri = $event" />
</app-form-item>



<app-form-item 
    name='storypoints' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="storypoints_item"  
    :itemValue="this.data.storypoints" 
    v-show="detailsModel.storypoints.visible" 
    :itemRules="this.rules.storypoints" 
    :caption="$t('story.mobnewform_form.details.storypoints')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.storypoints.disabled"
    :error="detailsModel.storypoints.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="StoryPoints"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.storypoints.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.storypoints"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.storypoints = $event" />
</app-form-item>



<app-form-item 
    name='estimate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="estimate_item"  
    :itemValue="this.data.estimate" 
    v-show="detailsModel.estimate.visible" 
    :itemRules="this.rules.estimate" 
    :caption="$t('story.mobnewform_form.details.estimate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.estimate.disabled"
    :error="detailsModel.estimate.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        placeholder="工时"
    type="text"  
    :value="data.estimate"
    unit=""
    :disabled="detailsModel.estimate.disabled" 
    @change="($event)=>this.data.estimate = $event" />
</app-form-item>



<app-form-item 
    name='spec' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="spec_item"  
    :itemValue="this.data.spec" 
    v-show="detailsModel.spec.visible" 
    :itemRules="this.rules.spec" 
    :caption="$t('story.mobnewform_form.details.spec')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.spec.disabled"
    :error="detailsModel.spec.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.spec" @change="(val) =>{this.data.spec =val}" :disabled="detailsModel.spec.disabled" :data="JSON.stringify(this.data)"  name="spec" :uploadparams='{objecttype:"story",version:"editor"}' :exportparams='{objecttype:"story",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='verify' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="verify_item"  
    :itemValue="this.data.verify" 
    v-show="detailsModel.verify.visible" 
    :itemRules="this.rules.verify" 
    :caption="$t('story.mobnewform_form.details.verify')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.verify.disabled"
    :error="detailsModel.verify.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.verify" @change="(val) =>{this.data.verify =val}" :disabled="detailsModel.verify.disabled" :data="JSON.stringify(this.data)"  name="verify" :uploadparams='{objecttype:"story",version:"editor"}' :exportparams='{objecttype:"story",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='mailtopk' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="mailtopk_item"  
    :itemValue="this.data.mailtopk" 
    v-show="detailsModel.mailtopk.visible" 
    :itemRules="this.rules.mailtopk" 
    :caption="$t('story.mobnewform_form.details.mailtopk')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.mailtopk.disabled"
    :error="detailsModel.mailtopk.error" 
    :isEmptyCaption="false">
        <app-mob-mpicker 
    :data="data"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :disabled="detailsModel.mailtopk.disabled"
    :value="data.mailtopk"
    name="mailtopk"
    :context="context"
    :viewparams="viewparams"
    :service="service"
    deMajorField='personname'
    deKeyField='sysemployee'
    :pickupView="{ viewname: 'sys-employee-user-tree-mob-mpickup-view', title: '人员移动端多数据选择视图（人员树）', deResParameters: [], parameters: [{ pathName: 'sysemployees', parameterName: 'sysemployee' }, { pathName: 'usertreemobmpickupview', parameterName: 'usertreemobmpickupview' } ], placement:'' }"
    @formitemvaluechange="onFormItemValueChange" 
    style=""/>

</app-form-item>



<app-form-item 
    name='keywords' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="keywords_item"  
    :itemValue="this.data.keywords" 
    v-show="detailsModel.keywords.visible" 
    :itemRules="this.rules.keywords" 
    :caption="$t('story.mobnewform_form.details.keywords')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.keywords.disabled"
    :error="detailsModel.keywords.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.keywords"
    unit=""
    :disabled="detailsModel.keywords.disabled" 
    @change="($event)=>this.data.keywords = $event" />
</app-form-item>


    
</app-form-group>




    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import StoryService from '@/app-core/service/story/story-service';
import MobNewFormService from '@/app-core/ctrl-service/story/mob-new-form-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import StoryUIService from '@/ui-service/story/story-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class MobNewFormBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobNewForm
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobNewForm
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobNewForm
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobNewForm
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobNewForm
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobNewForm
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobNewFormBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobNewFormService}
     * @memberof MobNewForm
     */
    protected service: MobNewFormService = new MobNewFormService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MobNewForm
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MobNewFormBase
     */  
    public deUIService:StoryUIService = new StoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobNewForm
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobNewForm
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobNewForm
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobNewForm
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobNewForm
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobNewForm
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected removeAction!: string;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof YDDTBJ
     */
    @Prop({ default: false }) protected isautoload?: boolean;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobNewForm
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobNewForm
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MobNewFormBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobNewForm
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobNewForm
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobNewForm
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobNewForm
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobNewForm
     */
    protected data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        project: null,
        product: null,
        module: null,
        prodoctname: null,
        branch: null,
        modulename: null,
        plan: null,
        source: null,
        sourcenote: null,
        reviewedby: null,
        assignedtopk: null,
        neednotreview: null,
        title: null,
        pri: null,
        storypoints: null,
        estimate: null,
        spec: null,
        verify: null,
        mailto: null,
        mailtopk: null,
        keywords: null,
        id: null,
        assignedto: null,
        story: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobNewForm
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobNewForm
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobNewForm
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MobNewForm
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewForm
     */
    protected rules: any = {
        title: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewFormBase
     */
    public deRules:any = {
    };

    /**
     * 校验属性值规则
     *
     * @public
     * @param {{ name: string }} { name }
     * @memberof MobNewFormBase
     */
    public verifyDeRules(name:string,rule:any = this.deRules,op:string = "AND") :{isPast:boolean,infoMessage:string}{
        let falg:any = {infoMessage:""};
        if(!rule[name]){
            return falg;
        }
        let opValue = op == 'AND'? true :false;
        let startOp = (val:boolean)=>{
            if(falg.isPast){
                if(opValue){
                    falg.isPast = falg && val;
                }else{
                    falg.isPast = falg || val;
                }
            }else{
                falg.isPast = val;
            }
        }
        rule[name].forEach((item:any) => {
            let dataValue = item.deName?this.data[this.service.getItemNameByDeName(item.deName)]:"";
            // 常规规则
            if(item.type == 'SIMPLE'){
                startOp(!this.$verify.checkFieldSimpleRule(dataValue,item.condOP,item.paramValue,item.ruleInfo,item.paramType,this.data,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
                this.errorCache[item.deName] = item.ruleInfo;
            }
            // 数值范围
            if(item.type == 'VALUERANGE2'){
                startOp( !this.$verify.checkFieldValueRangeRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 正则式
            if (item.type == "REGEX") {
                startOp(!this.$verify.checkFieldRegExRule(dataValue,item.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 长度
            if (item.type == "STRINGLENGTH") {
                startOp(!this.$verify.checkFieldStringLengthRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond)); 
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 系统值规则
            if(item.type == "SYSVALUERULE") {
                startOp(!this.$verify.checkFieldSysValueRule(dataValue,item.sysRule.regExCode,item.ruleInfo,item.isKeyCond));
                this.errorCache[item.deName] = item.ruleInfo;
                falg.infoMessage = item.ruleInfo;
            }
            // 分组
            if(item.type == 'GROUP'){
                falg = this.verifyDeRules('group',item)
                if(item.isNotMode){
                   falg.isPast = !falg.isPast;
                }
            }
            
        });
        if(!falg.hasOwnProperty("isPast")){
            falg.isPast = true;
        }
        return falg;
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MobNewForm
     */
    protected detailsModel: any = {
        group1: new FormGroupPanelModel({ caption: '需求基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'story.mobnewform_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        prodoctname: new FormItemModel({ caption: '所属产品', detailType: 'FORMITEM', name: 'prodoctname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        branch: new FormItemModel({ caption: '平台/分支', detailType: 'FORMITEM', name: 'branch', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plan: new FormItemModel({ caption: '计划', detailType: 'FORMITEM', name: 'plan', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        source: new FormItemModel({ caption: '需求来源', detailType: 'FORMITEM', name: 'source', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        sourcenote: new FormItemModel({ caption: '来源备注', detailType: 'FORMITEM', name: 'sourcenote', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        reviewedby: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'reviewedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedtopk: new FormItemModel({ caption: '由谁评审', detailType: 'FORMITEM', name: 'assignedtopk', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        neednotreview: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'neednotreview', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        title: new FormItemModel({ caption: '需求名称', detailType: 'FORMITEM', name: 'title', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storypoints: new FormItemModel({ caption: '故事点', detailType: 'FORMITEM', name: 'storypoints', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        estimate: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        spec: new FormItemModel({ caption: '需求描述', detailType: 'FORMITEM', name: 'spec', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        verify: new FormItemModel({ caption: '验收标准', detailType: 'FORMITEM', name: 'verify', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailtopk: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailtopk', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        keywords: new FormItemModel({ caption: '关键词', detailType: 'FORMITEM', name: 'keywords', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfupdatedate')
    onSrfupdatedateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfupdatedate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srforikey')
    onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfkey')
    onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfmajortext')
    onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srftempmode')
    onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfuf')
    onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfdeid')
    onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 prodoctname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.prodoctname')
    onProdoctnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'prodoctname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 branch 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.branch')
    onBranchChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'branch', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plan 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.plan')
    onPlanChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plan', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 source 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.source')
    onSourceChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'source', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 sourcenote 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.sourcenote')
    onSourcenoteChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'sourcenote', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 reviewedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.reviewedby')
    onReviewedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'reviewedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedtopk 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.assignedtopk')
    onAssignedtopkChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedtopk', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 neednotreview 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.neednotreview')
    onNeednotreviewChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'neednotreview', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 title 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.title')
    onTitleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'title', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storypoints 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.storypoints')
    onStorypointsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storypoints', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 estimate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.estimate')
    onEstimateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'estimate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 spec 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.spec')
    onSpecChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'spec', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 verify 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.verify')
    onVerifyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'verify', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailtopk 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.mailtopk')
    onMailtopkChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailtopk', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 keywords 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.keywords')
    onKeywordsChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'keywords', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewForm
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobNewForm
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'prodoctname')) {
            this.onFormItemValueChange({ name: 'branch', value: null });
        }
        if (Object.is(name, 'branch')) {
            this.onFormItemValueChange({ name: 'modulename', value: null });
            this.onFormItemValueChange({ name: 'module', value: null });
        }
        if (Object.is(name, 'prodoctname')) {
            this.onFormItemValueChange({ name: 'plan', value: null });
        }
        if (Object.is(name, 'neednotreview')) {
            this.onFormItemValueChange({ name: 'assignedtopk', value: null });
            this.onFormItemValueChange({ name: 'assignedto', value: null });
        }
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    protected ResetData(_datas:any){
        if(Object.keys(_datas).length >0){
            Object.keys(_datas).forEach((name: string) => {
                if (this.data.hasOwnProperty(name)) {
                    this.data[name] = null;
                }
            });
        }
    }

    /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobNewForm
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                




















        if (Object.is(name, '') || Object.is(name, 'neednotreview')) {
            let ret = false;
            const _neednotreview = this.data.neednotreview;
            if (this.$verify.testCond(_neednotreview, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.assignedtopk.setDisabled(!ret);
        }













    }


    /**
     * 表单项校验逻辑
     *
     * @public
     * @param name 属性名
     * @memberof Main2Base
     */
    public validItem(property:string, data:any):Promise<any>{
        return new Promise((resolve, reject) => {
            if(!property || !this.rules[property]){
                resolve(true);
            }
            Util.validateItem(property,data,this.rules[property]).then(()=>{
                this.detailsModel[property].setError("");
                resolve(true);
            }).catch(({ errors, fields }) => {
                const {field , message } = errors[0];
                let _message :any = (this.$t(`story.mobnewform_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
                this.detailsModel[property].setError(this.errorCache[property]?this.errorCache[property]: _message);
                resolve(false);
            });
        });
    }

    /**
     * 校验全部
     *
     * @public
     * @param {{ filter: string}} { filter}
     * @returns {void}
     * @memberof MobNewForm
     */
    public async validAll(filter:string = "defult") {
        let validateState = true;
        let filterProperty = ""
        if(filter === 'new'){
            filterProperty= 'id'
        }
        for (let item of Object.keys(this.rules)) {
            if(!await this.validItem(item,this.data[item]) && item != filterProperty){
                validateState = false;
            }
        }
        return validateState
    }


    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof MobNewForm
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.validItem(name,this.data[name]);
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MobNewForm
     */
    private onFormLoad(data: any = {},action:string): void {
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof MobNewForm
     */
    protected fillForm(_datas: any = {},action:string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(_datas).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = _datas[name];
            }
        });
        if(Object.is(action,'loadDraft')){
            this.createDefault();
        }
        if(Object.is(action,'load')){
            this.updateDefault();
        }
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof MobNewForm
     */
    protected setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @private
     * @memberof MobNewForm
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            // form.resetValidation();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof MobNewForm
     */
    protected resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果 （后台）
     *
     * @param {any[]} fieldErrors
     * @memberof MobNewForm
     */
    protected fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof MobNewForm
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobNewForm
     */
    protected onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof MobNewForm
     */
    protected setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }



    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof MobNewForm
     */
    protected groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof MobNewForm
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobNewForm
     */    
    protected afterCreated(){
        if(this.isautoload){
            this.autoLoad({srfkey:this.context.story});
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    this.loadDraft(data);
                }
                if (Object.is('save', action)) {
                    this.save(data,data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"Story")){
                    return;
                }
                if(Object.is(action,'appRefresh') && data.appRefreshAction && this.context.story){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MobNewForm
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobNewForm
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof MobNewForm
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobNewForm
     */
    protected refresh(args: any[]): void {
        let arg: any = {};
        Object.assign(arg,args[0]);
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }


    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof MobNewForm
     */
    protected autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @private
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    private async load(opt: any = {}): Promise<any> {
        if (!this.loadAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loadAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.get(this.loadAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'load');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof MobNewForm
     */
    protected async loadDraft(opt: any = {}): Promise<any> {
        if (!this.loaddraftAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'loaddraftAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = { ...opt } ;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.loadDraft(this.loaddraftAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            const data = response.data;
            if(data.story){
                Object.assign(this.context, { story: data.story });
            }
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 自动保存
     *
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async autoSave(opt: any = {}): Promise<any> {
        if (!await this.validAll()) {
            return Promise.reject();
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        if (response.status && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        } else if (response.status && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 保存
     *
     * @protected
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [isStateNext=true] 是否下发通知
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, isStateNext: boolean = true): Promise<any> {
        showResultInfo = showResultInfo === undefined ? true : false;
        opt.saveEmit = opt.saveEmit === undefined ? true : false;

        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if (this.data.srfuf =='1'? !await this.validAll():!await this.validAll('new')) {
            this.$notice.error('值规则校验异常');
            return Promise.reject();
        }
        if (isStateNext) {
            this.drcounter = 0;
            if (this.drcounter !== 0) {
                this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                this.saveState = Promise.resolve();
                return Promise.reject();
            }
        }
        
        if (!action) {
            let actionName: any = Object.is(data.srfuf, '1') ? "updateAction" : "createAction";
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+actionName+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        Object.assign(this.viewparams,{ title: arg.title});
        Object.assign(arg, this.viewparams);
        let response: any = null;
        if (Object.is(data.srfuf, '1')) {
            response = await this.service.update(action, { ...this.context }, arg, this.showBusyIndicator);
        } else {
            response = await this.service.add(action, { ...this.context }, arg, this.showBusyIndicator);
        }
        if (response && response.status === 200) {
            const data = response.data;
            this.onFormLoad(data, 'save');
            if(!opt.saveEmit){
                this.$emit('save', data);
            }                
            AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:Object.assign(data,{appRefreshAction:action===this.createAction?false:true})});
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
            if (showResultInfo) {
                this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.savedSuccess'));
            }
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 删除
     *
     * @private
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof EditForm
     */
    private async remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
        if (!this.removeAction) {
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.form')+'removeAction'+ this.$t('app.notConfig'));
            return Promise.reject();
        }
        const arg: any = opt[0];
        const _this: any = this;
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.delete(_this.removeAction, { ...this.context }, arg, showResultInfo);
        if (response && response.status === 200) {
            const data = response.data;
            this.$emit('remove', data);
            this.formState.next({ type: 'remove', data: data });
            this.data.ismodify = false;
            AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:data});
            this.$notice.success((data.srfmajortext ? data.srfmajortext : '') + '&nbsp;'+ this.$t('app.message.deleteSccess'));
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 工作流启动
     *
     * @protected
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:data});
            return response
        } else if (response && response.status !== 401) {
        }
        return response;
    }

    /**
     * 工作流提交
     *
     * @protected
     * @param {*} data
     * @param {*} linkItem
     * @param {*} datas
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async wfsubmit(data: any, linkItem: any, datas: any): Promise<any> {
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams, linkItem);
        // 强制补充srfwfmemo
        if (this.srfwfmemo) {
            Object.assign(datas, { srfwfmemo: this.srfwfmemo });
        }
        const response: any = await this.service.wfsubmit(this.currentAction, { ...this.context }, datas, this.showBusyIndicator, arg);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:data});
            return response        
        } else if (response && response.status !== 401) {
            return response;
        }
    }

    /**
     * 表单项更新
     *
     * @protected
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): Promise<any> {
        if (!mode || (mode && Object.is(mode, ''))) {
            return Promise.reject();
        }
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        const response: any = await this.service.frontLogic(mode, { ...this.context }, arg, showloading);
        if (response && response.status === 200) {
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data, 'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:data});
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        } else if (response && response.status !== 401) {
            const { error: _data } = response;
            if (Object.is(_data.status, 'BAD_REQUEST') && _data.parameters && _data.parameters.fieldErrors) {
                this.resetValidates();
                this.fillValidates(_data.parameters.fieldErrors)
            }
            this.$notice.error(_data.message);
        }
        return response;
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof MobNewForm
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async saveAndExit(data: any[]): Promise<any> {
        const arg: any = { ...data[0] };
        this.currentAction = 'saveAndExit';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
     * 保存并新建
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async saveAndNew(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        this.currentAction = 'saveAndNew';
        const response: any = await this.save([arg]);
        if (response && response.status === 200) {
            this.ResetData(response.data);
            this.loadDraft({});
        }
        return response;
    }

    /**
     * 删除并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewForm
     */
    protected async removeAndExit(data: any[]): Promise<any> {
        let arg: any = { ...data[0] };
        const response: any = await this.remove([arg]);
        if (response && response.status === 200) {
            this.closeView([{ ...response.data }]);
        }
        return response;
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof MobNewForm
    */
    protected drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save({}, undefined, false).then((res) =>{
            //this.saveState(res);
            if(Object.is(_this.currentAction, "saveAndNew")){
                _this.ResetData(res);
                _this.loadDraft({});
            }else if(Object.is(_this.currentAction, "saveAndExit")){
                if(res){
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 新建默认值
     * @memberof MobNewForm
     */
    public createDefault(){                    
            if (this.data.hasOwnProperty('project')) {
                    this.data['project'] = this.viewparams['project'];
            }
    }

        /**
     * 更新默认值
     * @memberof MobNewFormBase
     */
    public updateDefault(){                    
    }


    /**
     * 计算表单按钮权限状态
     *
     * @param {*} [data] 传入数据
     * @memberof EditorsBase
     */
    public computeButtonState(data:any){
        let targetData:any = this.transformData(data);
        if(this.detailsModel && Object.keys(this.detailsModel).length >0){
            Object.keys(this.detailsModel).forEach((name:any) =>{
                if(this.detailsModel[name] && this.detailsModel[name].uiaction && this.detailsModel[name].uiaction.dataaccaction && Object.is(this.detailsModel[name].detailType,"BUTTON")){
                    let tempUIAction:any = JSON.parse(JSON.stringify(this.detailsModel[name].uiaction));
                    this.$viewTool.calcActionItemAuthState(targetData,[tempUIAction],this.globaluiservice);
                    this.detailsModel[name].visible = tempUIAction.visabled;
                    this.detailsModel[name].disabled = tempUIAction.disabled;
                }
            })
        }
    }
}
</script>

<style lang='less'>
@import './mob-new-form-form.less';
</style>