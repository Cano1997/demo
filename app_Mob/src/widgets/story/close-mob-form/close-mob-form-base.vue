<template>
    <div ref='form' class="app-form story-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('story.closemob_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='closedreason' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="closedreason_item"  
    :itemValue="this.data.closedreason" 
    v-show="detailsModel.closedreason.visible" 
    :itemRules="this.rules.closedreason" 
    :caption="$t('story.closemob_form.details.closedreason')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.closedreason.disabled"
    :error="detailsModel.closedreason.error" 
    :isEmptyCaption="false">
        <app-mob-select 
    tag="Story__closed_reason"
    codeListType="STATIC" 
    :isCache="false" 
    :disabled="detailsModel.closedreason.disabled" 
    :data="data" 
    :context="context" 
    :viewparams="viewparams"
    :value="data.closedreason"  
    :navigateContext ='{ } '
    :navigateParam ='{ } '
    @change="($event)=>this.data.closedreason = $event" />
</app-form-item>



<app-form-item 
    name='comment' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="LEFT" 
    ref="comment_item"  
    :itemValue="this.data.comment" 
    v-show="detailsModel.comment.visible" 
    :itemRules="this.rules.comment" 
    :caption="$t('story.closemob_form.details.comment')"  
    :labelWidth="100"  
    :isShowCaption="true"
    :disabled="detailsModel.comment.disabled"
    :error="detailsModel.comment.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState"  :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled" :data="JSON.stringify(this.data)"  name="comment" :uploadparams='{objecttype:"story",objectid: "%id%",version:"editor"}' :exportparams='{objecttype:"story",objectid: "%id%",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel2.visible" 
    :uiActionGroup="detailsModel.grouppanel2.uiActionGroup" 
    :caption="$t('story.closemob_form.details.grouppanel2')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="false" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='story' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='action-mob-mdview9' 
    v-show="detailsModel.druipart1.visible" 
    :caption="$t('story.closemob_form.details.druipart1')"  
    paramItem='story' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"ZT_STORY","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
    ]" 
    tempMode='0'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ } ' 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)"  
    @drdatasaved="drdatasaved($event)"/>


    
</app-form-group>


    
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
import CloseMobService from '@/app-core/ctrl-service/story/close-mob-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import StoryUIService from '@/ui-service/story/story-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class CloseMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof CloseMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof CloseMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof CloseMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof CloseMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof CloseMob
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof CloseMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  CloseMobBase
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
     * @type {CloseMobService}
     * @memberof CloseMob
     */
    protected service: CloseMobService = new CloseMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof CloseMob
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof CloseMobBase
     */  
    public deUIService:StoryUIService = new StoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof CloseMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof CloseMob
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof CloseMob
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof CloseMob
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof CloseMob
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof CloseMob
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof CloseMob
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof CloseMob
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof CloseMobBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof CloseMob
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof CloseMob
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof CloseMob
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof CloseMob
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof CloseMob
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
        closedreason: null,
        comment: null,
        id: null,
        story: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof CloseMob
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof CloseMob
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof CloseMob
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof CloseMob
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CloseMob
     */
    protected rules: any = {
        closedreason: [
            { required: true, type: 'string', message: 'required', trigger: 'change' },
            { required: true, type: 'string', message: 'required', trigger: 'blur' },
        ],
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof CloseMobBase
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
     * @memberof CloseMob
     */
    protected detailsModel: any = {
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'story.closemob_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '需求描述信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'story.closemob_form', extractMode: 'ITEM', details: [] } })
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
        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedreason 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof CloseMob
     */
    @Watch('data.closedreason')
    onClosedreasonChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedreason', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof CloseMob
     */
    @Watch('data.comment')
    onCommentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'comment', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
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
     * @memberof CloseMob
     */
    private async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){
                















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
                let _message :any = (this.$t(`story.closemob_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof CloseMob
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
     * @memberof CloseMob
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof CloseMob
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
     * @memberof @memberof CloseMob
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof CloseMob
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
     * @memberof CloseMob
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
     * @memberof CloseMob
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
    * @memberof CloseMob
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
     * @memberof CloseMob
     */
    public createDefault(){                    
    }

        /**
     * 更新默认值
     * @memberof CloseMobBase
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
@import './close-mob-form.less';
</style>