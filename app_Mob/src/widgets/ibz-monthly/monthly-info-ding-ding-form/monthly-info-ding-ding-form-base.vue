<template>
    <div ref='form' class="app-form ibzmonthly-form ">
                

<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.group1.visible" 
    :uiActionGroup="detailsModel.group1.uiActionGroup" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.group1')" 
    :isShowCaption="false" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="true" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-item 
    name='account' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="NONE" 
    ref="account_item"  
    :itemValue="this.data.account" 
    v-show="detailsModel.account.visible" 
    :itemRules="this.rules.account" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.account')"  
    :labelWidth="0"  
    :isShowCaption="false"
    :disabled="detailsModel.account.disabled"
    :error="detailsModel.account.error" 
    :isEmptyCaption="true">
        <app-mob-span  
    codeListType="DYNAMIC" 
    tag="UserRealName"
    :isCache="false" 
    :navigateContext ='{ } '
    :navigateParam ='{ } ' 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.account" 
    :itemParam="{}"/>
</app-form-item>



<app-form-item 
    name='date' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="date_item"  
    :itemValue="this.data.date" 
    v-show="detailsModel.date.visible" 
    :itemRules="this.rules.date" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.date')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.date.disabled"
    :error="detailsModel.date.error" 
    :isEmptyCaption="false">
        <app-mob-span  
    :navigateContext ='{ } '
    :navigateParam ='{ } ' 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.date" 
    :itemParam="{}"/>
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel3.visible" 
    :uiActionGroup="detailsModel.grouppanel3.uiActionGroup" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.grouppanel3')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="true" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='ibzmonthly' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='task-monthly-done-task-mob-mdview' 
    v-show="detailsModel.druipart3.visible" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.druipart3')"  
    paramItem='ibzmonthly' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"IBZ_MONTHLY","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
        { pathName: 'stories', parameterName: 'story' },
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



<app-form-item 
    name='workthismonth' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="workthismonth_item"  
    :itemValue="this.data.workthismonth" 
    v-show="detailsModel.workthismonth.visible" 
    :itemRules="this.rules.workthismonth" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.workthismonth')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.workthismonth.disabled"
    :error="detailsModel.workthismonth.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState" :isInfoFormMode="true"  :value="data.workthismonth" @change="(val) =>{this.data.workthismonth =val}" :disabled="detailsModel.workthismonth.disabled" :data="JSON.stringify(this.data)"  name="workthismonth" :uploadparams='{objecttype:"monthly",version:"editor"}' :exportparams='{objecttype:"monthly",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel4.visible" 
    :uiActionGroup="detailsModel.grouppanel4.uiActionGroup" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.grouppanel4')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="true" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='ibzmonthly' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='task-monthly-plans-task-mob-mdview' 
    v-show="detailsModel.druipart4.visible" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.druipart4')"  
    paramItem='ibzmonthly' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"IBZ_MONTHLY","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
        { pathName: 'stories', parameterName: 'story' },
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



<app-form-item 
    name='plansnextmonth' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="plansnextmonth_item"  
    :itemValue="this.data.plansnextmonth" 
    v-show="detailsModel.plansnextmonth.visible" 
    :itemRules="this.rules.plansnextmonth" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.plansnextmonth')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.plansnextmonth.disabled"
    :error="detailsModel.plansnextmonth.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState" :isInfoFormMode="true"  :value="data.plansnextmonth" @change="(val) =>{this.data.plansnextmonth =val}" :disabled="detailsModel.plansnextmonth.disabled" :data="JSON.stringify(this.data)"  name="plansnextmonth" :uploadparams='{objecttype:"monthly",version:"editor"}' :exportparams='{objecttype:"monthly",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='comment' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="comment_item"  
    :itemValue="this.data.comment" 
    v-show="detailsModel.comment.visible" 
    :itemRules="this.rules.comment" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.comment')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.comment.disabled"
    :error="detailsModel.comment.error" 
    :isEmptyCaption="false">
        <app-mob-rich-text-editor-pms :formState="formState" :isInfoFormMode="true"  :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled" :data="JSON.stringify(this.data)"  name="comment" :uploadparams='{objecttype:"monthly",version:"editor"}' :exportparams='{objecttype:"monthly",version:"editor"}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>

</app-form-item>



<app-form-item 
    name='reportto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="reportto_item"  
    :itemValue="this.data.reportto" 
    v-show="detailsModel.reportto.visible" 
    :itemRules="this.rules.reportto" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.reportto')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.reportto.disabled"
    :error="detailsModel.reportto.error" 
    :isEmptyCaption="false">
        <app-mob-span  
    codeListType="DYNAMIC" 
    tag="UserRealName"
    :isCache="false" 
    :navigateContext ='{ } '
    :navigateParam ='{ } ' 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.reportto" 
    :itemParam="{}"/>
</app-form-item>



<app-form-item 
    name='mailto' 
    class='' 
    uiStyle="DEFAULT"  
    labelPos="TOP" 
    ref="mailto_item"  
    :itemValue="this.data.mailto" 
    v-show="detailsModel.mailto.visible" 
    :itemRules="this.rules.mailto" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.mailto')"  
    :labelWidth="90"  
    :isShowCaption="true"
    :disabled="detailsModel.mailto.disabled"
    :error="detailsModel.mailto.error" 
    :isEmptyCaption="false">
        <app-mob-span  
    codeListType="DYNAMIC" 
    tag="UserRealName"
    :isCache="false" 
    :navigateContext ='{ } '
    :navigateParam ='{ } ' 
    :data="data"
    :context="context"
    :viewparams="viewparams"
    :value="data.mailto" 
    :itemParam="{}"/>
</app-form-item>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel1.visible" 
    :uiActionGroup="detailsModel.grouppanel1.uiActionGroup" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.grouppanel1')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="true" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='ibzmonthly' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='file-mob-mdview9' 
    v-show="detailsModel.druipart1.visible" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.druipart1')"  
    paramItem='ibzmonthly' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"IBZ_MONTHLY","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
    ]" 
    tempMode='0'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ "srfparentkey": "%ibzmonthlyid%", "objecttype": "monthly" } ' 
    :ignorefieldvaluechange="ignorefieldvaluechange" 
    :data="JSON.stringify(this.data)"  
    @drdatasaved="drdatasaved($event)"/>


    
</app-form-group>



<app-form-group 
    class='' 
    layoutType='TABLE_24COL' 
    titleStyle='' 
    uiStyle="DEFAULT" 
    v-show="detailsModel.grouppanel2.visible" 
    :uiActionGroup="detailsModel.grouppanel2.uiActionGroup" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.grouppanel2')" 
    :isShowCaption="true" 
    :titleBarCloseMode="0" 
    :isInfoGroupMode="true" 
    :data="transformData(data)"
    :uiService="deUIService"
    @groupuiactionclick="groupUIActionClick($event)">
    
<app-form-druipart
    class='' 
    parameterName='ibzmonthly' 
    refviewtype='DEMOBMDVIEW9'  
    refreshitems='' 
    viewname='action-mob-mdview9' 
    v-show="detailsModel.druipart2.visible" 
    :caption="$t('ibzmonthly.monthlyinfodingding_form.details.druipart2')"  
    paramItem='ibzmonthly' 
    style="" 
    :formState="formState" 
    :parentdata='{"srfparentdename":"IBZ_MONTHLY","SRFPARENTTYPE":"CUSTOM"}' 
    :parameters="[
    ]" 
    tempMode='0'
    :context="context" 
    :viewparams="viewparams" 
    :navigateContext ='{ } ' 
    :navigateParam ='{ "srfparentkey": "%ibzmonthlyid%", "objecttype": "monthly" } ' 
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
import IbzMonthlyService from '@/app-core/service/ibz-monthly/ibz-monthly-service';
import MonthlyInfoDingDingService from '@/app-core/ctrl-service/ibz-monthly/monthly-info-ding-ding-form-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMonthlyUIService from '@/ui-service/ibz-monthly/ibz-monthly-ui-action';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {  Util } from '@/ibiz-core/utils';


@Component({
    components: { }
})
export default class MonthlyInfoDingDingBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MonthlyInfoDingDing
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MonthlyInfoDingDing
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MonthlyInfoDingDing
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MonthlyInfoDingDing
     */
    protected getControlType(): string {
        return 'FORM'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MonthlyInfoDingDing
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MonthlyInfoDingDingBase
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
     * @type {MonthlyInfoDingDingService}
     * @memberof MonthlyInfoDingDing
     */
    protected service: MonthlyInfoDingDingService = new MonthlyInfoDingDingService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMonthlyService}
     * @memberof MonthlyInfoDingDing
     */
    protected appEntityService: IbzMonthlyService = new IbzMonthlyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMonthlyUIService}
     * @memberof MonthlyInfoDingDingBase
     */  
    public deUIService:IbzMonthlyUIService = new IbzMonthlyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MonthlyInfoDingDing
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 工作流审批意见控件绑定值
     *
     * @memberof MonthlyInfoDingDing
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MonthlyInfoDingDing
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MonthlyInfoDingDing
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MonthlyInfoDingDing
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MonthlyInfoDingDing
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MonthlyInfoDingDing
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MonthlyInfoDingDing
     */
    protected formState: Subject<any> = new Subject();


    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MonthlyInfoDingDingBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MonthlyInfoDingDing
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MonthlyInfoDingDing
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MonthlyInfoDingDing
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MonthlyInfoDingDing
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MonthlyInfoDingDing
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
        account: null,
        ibzmonthlyname: null,
        date: null,
        workthismonth: null,
        plansnextmonth: null,
        comment: null,
        reportto: null,
        mailto: null,
        thismonthtask: null,
        nextmonthplanstask: null,
        ibz_monthlyid: null,
        issubmit: null,
        ibzmonthly: null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MonthlyInfoDingDing
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MonthlyInfoDingDing
      */
    protected drcounter: number = 0;

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MonthlyInfoDingDing
      */
    protected saveState:any ;

    /**
      * 异常信息缓存
      *
      * @type {any}
      * @memberof MonthlyInfoDingDing
      */
    public errorCache :any = {};

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MonthlyInfoDingDing
     */
    protected rules: any = {
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MonthlyInfoDingDingBase
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
     * @memberof MonthlyInfoDingDing
     */
    protected detailsModel: any = {
        druipart3: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart3', visible: true, isShowCaption: true, form: this })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '完成任务', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'ibzmonthly.monthlyinfodingding_form', extractMode: 'ITEM', details: [] } })
, 
        druipart4: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart4', visible: true, isShowCaption: true, form: this })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '计划参与', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'ibzmonthly.monthlyinfodingding_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '附件', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'ibzmonthly.monthlyinfodingding_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '操作记录', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'ibzmonthly.monthlyinfodingding_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '月报基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'ibzmonthly.monthlyinfodingding_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '更新时间', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '月报标识', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfmajortext: new FormItemModel({ caption: '月报名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        account: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'account', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        ibzmonthlyname: new FormItemModel({ caption: '月报名称', detailType: 'FORMITEM', name: 'ibzmonthlyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        date: new FormItemModel({ caption: '日期', detailType: 'FORMITEM', name: 'date', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        workthismonth: new FormItemModel({ caption: '本月工作', detailType: 'FORMITEM', name: 'workthismonth', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plansnextmonth: new FormItemModel({ caption: '下月计划', detailType: 'FORMITEM', name: 'plansnextmonth', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '其他事项', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        reportto: new FormItemModel({ caption: '汇报给', detailType: 'FORMITEM', name: 'reportto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        thismonthtask: new FormItemModel({ caption: '本月完成任务', detailType: 'FORMITEM', name: 'thismonthtask', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        nextmonthplanstask: new FormItemModel({ caption: '下月计划任务', detailType: 'FORMITEM', name: 'nextmonthplanstask', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        ibz_monthlyid: new FormItemModel({ caption: '月报标识', detailType: 'FORMITEM', name: 'ibz_monthlyid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        issubmit: new FormItemModel({ caption: '是否提交', detailType: 'FORMITEM', name: 'issubmit', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 account 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.account')
    onAccountChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'account', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 ibzmonthlyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.ibzmonthlyname')
    onIbzmonthlynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'ibzmonthlyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 date 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.date')
    onDateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'date', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 workthismonth 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.workthismonth')
    onWorkthismonthChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'workthismonth', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plansnextmonth 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.plansnextmonth')
    onPlansnextmonthChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plansnextmonth', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.comment')
    onCommentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'comment', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 reportto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.reportto')
    onReporttoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'reportto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 thismonthtask 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.thismonthtask')
    onThismonthtaskChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'thismonthtask', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 nextmonthplanstask 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.nextmonthplanstask')
    onNextmonthplanstaskChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'nextmonthplanstask', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 ibz_monthlyid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.ibz_monthlyid')
    onIbz_monthlyidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'ibz_monthlyid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 issubmit 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MonthlyInfoDingDing
     */
    @Watch('data.issubmit')
    onIssubmitChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'issubmit', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
                let _message :any = (this.$t(`ibzmonthly.monthlyinfodingding_form.details.${field}`) as string) +' '+ this.$t(`app.form.rules.${message}`);
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
     * @memberof MonthlyInfoDingDing
     */
    public async validAll(filter:string = "defult") {
        let validateState = true;
        let filterProperty = ""
        if(filter === 'new'){
            filterProperty= 'ibzmonthlyid'
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MonthlyInfoDingDing
     */    
    protected afterCreated(){
        if(this.isautoload){
            this.autoLoad({srfkey:this.context.ibzmonthly});
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
                if(!Object.is(name,"IbzMonthly")){
                    return;
                }
                if(Object.is(action,'appRefresh') && data.appRefreshAction && this.context.ibzmonthly){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MonthlyInfoDingDing
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MonthlyInfoDingDing
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
     * @memberof @memberof MonthlyInfoDingDing
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
            if(data.ibzmonthly){
                Object.assign(this.context, { ibzmonthly: data.ibzmonthly });
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
            this.drcounter = 4;
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
        Object.assign(this.viewparams,{ ibzmonthlyname: arg.ibzmonthlyname});
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
            AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:Object.assign(data,{appRefreshAction:action===this.createAction?false:true})});
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
            AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:data});
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
     * @memberof MonthlyInfoDingDing
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:data});
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
     * @memberof MonthlyInfoDingDing
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
            AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:data});
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
     * @memberof MonthlyInfoDingDing
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
            AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:data});
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
     * @memberof MonthlyInfoDingDing
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
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
    * @memberof MonthlyInfoDingDing
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
     * @memberof MonthlyInfoDingDing
     */
    public createDefault(){                    
    }

        /**
     * 更新默认值
     * @memberof MonthlyInfoDingDingBase
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
@import './monthly-info-ding-ding-form.less';
</style>