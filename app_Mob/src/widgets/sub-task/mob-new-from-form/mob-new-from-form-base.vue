<template>
    <div ref='form' class="app-form subtask-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('subtask.mobnewfrom_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='projectname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="projectname_item"  
    :itemValue="this.data.projectname" 
    v-show="detailsModel.projectname.visible" 
    :itemRules="this.rules.projectname" 
    :caption="$t('subtask.mobnewfrom_form.details.projectname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.projectname.disabled"
    :error="detailsModel.projectname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='projectname' 
    deMajorField='name'
    deKeyField='id'
    valueitem='project' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.projectname.disabled"
    :service="service"
    :acParams="{ serviceName: 'project', interfaceName: 'FetchCurUser'}"
    :value="data.projectname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.projectname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='type' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="type_item"  
    :itemValue="this.data.type" 
    v-show="detailsModel.type.visible" 
    :itemRules="this.rules.type" 
    :caption="$t('subtask.mobnewfrom_form.details.type')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.type.disabled"
    :error="detailsModel.type.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__type"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.type.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.type"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.type = $event" />
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
    :caption="$t('subtask.mobnewfrom_form.details.modulename')"  
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
    :navigateContext ='{ "project": "%project%", "allmodules": "%allmodules%" } '
    :navigateParam ='{ "project": "%project%", "allmodules": "%allmodules%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.modulename.disabled"
    :service="service"
    :acParams="{ serviceName: 'projectmodule', interfaceName: 'FetchTaskModules'}"
    :value="data.modulename" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.modulename = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='allmodules' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="RIGHT" 
    ref="allmodules_item"  
    :itemValue="this.data.allmodules" 
    v-show="detailsModel.allmodules.visible" 
    :itemRules="this.rules.allmodules" 
    :caption="$t('subtask.mobnewfrom_form.details.allmodules')"  
    :labelWidth="80"  
    :isShowCaption="true"
    :disabled="detailsModel.allmodules.disabled"
    :error="detailsModel.allmodules.error" 
    :isEmptyCaption="false">
        <app-mob-switch 
    class="app-form-item-switch" 
    :value="data.allmodules"  
    :disabled="detailsModel.allmodules.disabled"
    @change="($event)=>this.data.allmodules = $event" />
</app-form-item>



<app-form-item 
    name='assignedto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="assignedto_item"  
    :itemValue="this.data.assignedto" 
    v-show="detailsModel.assignedto.visible" 
    :itemRules="this.rules.assignedto" 
    :caption="$t('subtask.mobnewfrom_form.details.assignedto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.assignedto.disabled"
    :error="detailsModel.assignedto.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="UserRealNameProject"
    codeListType="DYNAMIC" 
    :isCache="false" 
    :disabled="detailsModel.assignedto.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.assignedto"  
    :navigateContext ='{ "project": "%project%" } '
    :navigateParam ='{ "project": "%project%" } '
    @change="($event)=>this.data.assignedto = $event" />
</app-form-item>



<app-form-item 
    name='multiple' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="multiple_item"  
    :itemValue="this.data.multiple" 
    v-show="detailsModel.multiple.visible" 
    :itemRules="this.rules.multiple" 
    :caption="$t('subtask.mobnewfrom_form.details.multiple')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.multiple.disabled"
    :error="detailsModel.multiple.error" 
    :isEmptyCaption="false">
        <app-mob-switch 
    class="app-form-item-switch" 
    :value="data.multiple"  
    :disabled="detailsModel.multiple.disabled"
    @change="($event)=>this.data.multiple = $event" />
</app-form-item>



<app-form-druipart
    class='' 
    parameterName='subtask' 
    refviewtype='DEMOBMEDITVIEW9'  
    refreshitems='' 
    viewname='task-team-mob-medit-view9' 
    v-show="detailsModel.druipart1.visible" 
    paramItem='subtask' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdefname":"ROOT","srfparentdename":"ZT_TASK","SRFPARENTTYPE":"DER1N","srfparentmode":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT","SRFDER1NID":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT"}' 
    :parameters="[
    ]" 
    tempMode='2'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ } ' 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)"  
    @drdatasaved="drdatasaved($event)"/>



<app-form-item 
    name='storyname' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="storyname_item"  
    :itemValue="this.data.storyname" 
    v-show="detailsModel.storyname.visible" 
    :itemRules="this.rules.storyname" 
    :caption="$t('subtask.mobnewfrom_form.details.storyname')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.storyname.disabled"
    :error="detailsModel.storyname.error" 
    :isEmptyCaption="false">
        <app-mob-select-drop-down 
    name='storyname' 
    deMajorField='title'
    deKeyField='id'
    valueitem='story' 
    style="" 
    editortype="dropdown" 
    :formState="formState"
    :data="data"
    :context="context"
    :navigateContext ='{ "n_module_eq": "%module%", "project": "%project%" } '
    :navigateParam ='{ "project": "%project%", "n_module_eq": "%module%" } '
    :viewparams="viewparams"
    :itemParam='{ }' 
    :disabled="detailsModel.storyname.disabled"
    :service="service"
    :acParams="{ serviceName: 'story', interfaceName: 'FetchTaskRelatedStory'}"
    :value="data.storyname" 
    @formitemvaluechange="onFormItemValueChange"
    @change="($event)=>this.data.storyname = $event">
</app-mob-select-drop-down>
</app-form-item>



<app-form-item 
    name='name' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="name_item"  
    :itemValue="this.data.name" 
    v-show="detailsModel.name.visible" 
    :itemRules="this.rules.name" 
    :caption="$t('subtask.mobnewfrom_form.details.name')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.name.disabled"
    :error="detailsModel.name.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-input"  
        type="text"  
    :value="data.name"
    unit=""
    :disabled="detailsModel.name.disabled" 
    @change="($event)=>this.data.name = $event" />
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
    :caption="$t('subtask.mobnewfrom_form.details.pri')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.pri.disabled"
    :error="detailsModel.pri.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Task__pri"
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
    name='estimate' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="estimate_item"  
    :itemValue="this.data.estimate" 
    v-show="detailsModel.estimate.visible" 
    :itemRules="this.rules.estimate" 
    :caption="$t('subtask.mobnewfrom_form.details.estimate')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.estimate.disabled"
    :error="detailsModel.estimate.error" 
    :isEmptyCaption="false">
        <app-mob-input 
    class="app-form-item-number" 
        type="number"  
    :value="data.estimate"
    unit="小时"
    :disabled="detailsModel.estimate.disabled" 
    @change="($event)=>this.data.estimate = $event"/>
</app-form-item>



<app-form-item 
    name='eststarted' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="eststarted_item"  
    :itemValue="this.data.eststarted" 
    v-show="detailsModel.eststarted.visible" 
    :itemRules="this.rules.eststarted" 
    :caption="$t('subtask.mobnewfrom_form.details.eststarted')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.eststarted.disabled"
    :error="detailsModel.eststarted.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.eststarted" 
    :disabled="detailsModel.eststarted.disabled"
    @change="($event)=>this.data.eststarted = $event"/>
</app-form-item>



<app-form-item 
    name='deadline' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="deadline_item"  
    :itemValue="this.data.deadline" 
    v-show="detailsModel.deadline.visible" 
    :itemRules="this.rules.deadline" 
    :caption="$t('subtask.mobnewfrom_form.details.deadline')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.deadline.disabled"
    :error="detailsModel.deadline.error" 
    :isEmptyCaption="false">
        <app-mob-datetime-picker 
    displayFormat="YYYY-MM-DD"
    class="app-form-item-datetime" 
    :value="data.deadline" 
    :disabled="detailsModel.deadline.disabled"
    @change="($event)=>this.data.deadline = $event"/>
</app-form-item>



<app-form-item 
    name='desc' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="desc_item"  
    :itemValue="this.data.desc" 
    v-show="detailsModel.desc.visible" 
    :itemRules="this.rules.desc" 
    :caption="$t('subtask.mobnewfrom_form.details.desc')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :error="detailsModel.desc.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState" :value="data.desc" @change="(val) =>{this.data.desc =val}" :disabled="detailsModel.desc.disabled" :data="JSON.stringify(this.data)"  name="desc" :uploadparams='{objecttype:"task",version:"editor"}' :exportparams='{objecttype:"task",version:"editor"}'  style=""/>

</app-form-item>



<app-form-item 
    name='mailto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="mailto_item"  
    :itemValue="this.data.mailto" 
    v-show="detailsModel.mailto.visible" 
    :itemRules="this.rules.mailto" 
    :caption="$t('subtask.mobnewfrom_form.details.mailto')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.mailto.disabled"
    :error="detailsModel.mailto.error" 
    :isEmptyCaption="false">
        <app-mob-check-list 
    orMode="str"
    valueSeparator=","
    textSeparator=","
    type="dynamic"  
    tag="UserRealName"
    :disabled="detailsModel.mailto.disabled" 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.mailto"   
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.mailto = $event"/>
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
import SubTaskService from '@/app-core/service/sub-task/sub-task-service';
import MobNewFromService from '@/app-core/ctrl-service/sub-task/mob-new-from-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SubTaskUIService from '@/ui-service/sub-task/sub-task-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: {
    }
})
export default class MobNewFromBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobNewFrom
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobNewFrom
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobNewFrom
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobNewFrom
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobNewFrom
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobNewFrom
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobNewFromBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MobNewFromService}
     * @memberof MobNewFrom
     */
    protected service: MobNewFromService = new MobNewFromService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof MobNewFrom
     */
    protected appEntityService: SubTaskService = new SubTaskService();

    /**
     * 界面UI服务对象
     *
     * @type {SubTaskUIService}
     * @memberof MobNewFromBase
     */  
    public deUIService:SubTaskUIService = new SubTaskUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobNewFrom
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MobNewFrom
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobNewFrom
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobNewFrom
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MobNewFrom
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MobNewFrom
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MobNewFrom
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MobNewFrom
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MobNewFrom
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MobNewFrom
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MobNewFrom
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MobNewFrom
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MobNewFrom
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
        projectname: null,
        project: null,
        module: null,
        type: null,
        modulename: null,
        allmodules: null,
        assignedto: null,
        multiple: null,
        story: null,
        storyname: null,
        name: null,
        pri: null,
        estimate: null,
        eststarted: null,
        deadline: null,
        desc: null,
        mailto: null,
        id: null,
        subtask: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MobNewFrom
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MobNewFrom
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MobNewFrom
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MobNewFrom
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewFrom
     */
    protected rules: any = {
        projectname: [
            { required: true, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { required: true, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        name: [
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MobNewFromBase
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
     * @memberof MobNewFrom
     */
    protected detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: false, isShowCaption: true, form: this })
, 
        group1: new FormGroupPanelModel({ caption: 'task基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'subtask.mobnewfrom_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '任务类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        allmodules: new FormItemModel({ caption: '所有模块', detailType: 'FORMITEM', name: 'allmodules', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        multiple: new FormItemModel({ caption: '多人任务', detailType: 'FORMITEM', name: 'multiple', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        name: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        estimate: new FormItemModel({ caption: '预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        eststarted: new FormItemModel({ caption: '预计开始', detailType: 'FORMITEM', name: 'eststarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '任务描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 allmodules 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.allmodules')
    onAllmodulesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'allmodules', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 multiple 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.multiple')
    onMultipleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'multiple', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 estimate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.estimate')
    onEstimateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'estimate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 eststarted 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.eststarted')
    onEststartedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'eststarted', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 deadline 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.desc')
    onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MobNewFrom
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MobNewFrom
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (Object.is(name, 'projectname')) {
            this.onFormItemValueChange({ name: 'modulename', value: null });
            this.onFormItemValueChange({ name: 'module', value: null });
        }
        if (Object.is(name, 'multiple')) {
            this.onFormItemValueChange({ name: 'assignedto', value: null });
        }
        if (Object.is(name, 'modulename')) {
            this.onFormItemValueChange({ name: 'storyname', value: null });
            this.onFormItemValueChange({ name: 'story', value: null });
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
     * @memberof MobNewFrom
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                
        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.druipart1.setVisible(ret);
        }

















        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = true;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = false;
            }
            this.rules.assignedto.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    rule.required = ret;
                }
                return false;
            });
        }
        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.assignedto.setDisabled(!ret);
        }






        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'NOTEQ', '1')) {
                ret = true;
            }
            this.detailsModel.estimate.setDisabled(!ret);
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
                this.detailsModel[property].setError(this.errorCache[property]?this.errorCache[property]:errors[0].message);
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * 表单校验状态
     *
     * @returns {boolean} 
     * @memberof MobNewFrom
     */
    protected async formValidateStatus(): Promise<boolean> {
        const refArr: Array<string> = ['projectname_item', 'type_item', 'modulename_item', 'allmodules_item', 'assignedto_item', 'multiple_item', 'storyname_item', 'name_item', 'pri_item', 'estimate_item', 'eststarted_item', 'deadline_item', 'desc_item', 'mailto_item', ];
        let falg = true;
        for (let item = 0; item < refArr.length; item++) {
            const element = refArr[item];
            if (this.$refs[element] && (this.$refs[element] as any).validateRules &&  !await(this.$refs[element] as any).validateRules()) {
                falg = false;
            }
        }
        return falg;
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof MobNewFrom
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobNewFrom
     */    
    protected afterCreated(){
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
    }

    /**
     * vue 生命周期
     *
     * @memberof MobNewFrom
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobNewFrom
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof MobNewFrom
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
            if(data.subtask){
                Object.assign(this.context, { subtask: data.subtask });
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
            this.drcounter = 1;
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
            AppCenterService.notifyMessage({name:"SubTask",action:'appRefresh',data:data});
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
            AppCenterService.notifyMessage({name:"SubTask",action:'appRefresh',data:data});
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
     * @memberof MobNewFrom
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            this.$notice.success('工作流启动成功');
            AppCenterService.notifyMessage({name:"SubTask",action:'appRefresh',data:data});
        } else if (response && response.status !== 401) {
            this.$notice.error('工作流启动失败, ' + response.error.message);
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
     * @memberof MobNewFrom
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
            this.$notice.success('工作流提交成功');
            AppCenterService.notifyMessage({name:"SubTask",action:'appRefresh',data:data});
        } else if (response && response.status !== 401) {
            this.$notice.error('工作流提交失败, ' + response.error.message);
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
     * @memberof MobNewFrom
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
            AppCenterService.notifyMessage({name:"SubTask",action:'appRefresh',data:data});
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
     * @memberof MobNewFrom
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
     * @memberof MobNewFrom
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
    * @memberof MobNewFrom
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
     * @memberof MobNewFrom
     */
    public createDefault(){                    
                if (this.data.hasOwnProperty('module')) {
                    this.data['module'] = this.viewparams['module'];
                }
                if (this.data.hasOwnProperty('allmodules')) {
                    this.data['allmodules'] = '1';
                }
                if (this.data.hasOwnProperty('story')) {
                    this.data['story'] = this.viewparams['story'];
                }
    }

        /**
     * 更新默认值
     * @memberof MobNewFromBase
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
@import './mob-new-from-form.less';
</style>