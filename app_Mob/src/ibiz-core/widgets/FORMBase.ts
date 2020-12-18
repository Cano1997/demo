import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import { Vue, Prop } from 'vue-property-decorator';
import { ControlBase } from './ControlBase'
import {  Util } from '@/ibiz-core/utils';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
/**
 * 部件基类
 *
 * @export
 * @class ControlBase
 * @extends {Vue}
 */
export class FORMBase extends ControlBase {

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected data: any = {};

   /**
     * 工作流审批意见控件绑定值
     *
     * @memberof FORMBase
     */
    @Prop() srfwfmemo?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof FORMBase
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof FORMBase
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof FORMBase
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof FORMBase
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof FORMBase
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof FORMBase
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof FORMBase
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @protected
     * @type {Subject<any>}
     * @memberof FORMBase
     */
    protected dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof FORMBase
     */
    public dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @protected
     * @type {*}
     * @memberof FORMBase
     */
    protected oldData: any = {};

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof ${srfclassname('${ctrl.codeName}')}
      */
     protected currentAction: string = "";

     /**
       * 关系界面计数器
       *
       * @type {number}
       * @memberof ${srfclassname('${ctrl.codeName}')}
       */
     protected drcounter: number = 0;
 
     /**
       * 表单保存回调存储对象
       *
       * @type {any}
       * @memberof ${srfclassname('${ctrl.codeName}')}
       */
     protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof ${srfclassname('${ctrl.codeName}')}Base
     */
    public deRules:any = {}

    /**
     * 值规则
     *
     * @type {*}
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected rules: any = {}

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected detailsModel: any = {}

    /**
     * 校验属性值规则
     *
     * @public
     * @param {{ name: string }} { name }
     * @memberof ${srfclassname('${ctrl.codeName}')}Base
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
            }
            // 数值范围
            if(item.type == 'VALUERANGE2'){
                startOp( !this.$verify.checkFieldValueRangeRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 正则式
            if (item.type == "REGEX") {
                startOp(!this.$verify.checkFieldRegExRule(dataValue,item.regExCode,item.ruleInfo,item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
            }
            // 长度
            if (item.type == "STRINGLENGTH") {
                startOp(!this.$verify.checkFieldStringLengthRule(dataValue,item.minValue,item.isIncludeMinValue,item.maxValue,item.isIncludeMaxValue,item.ruleInfo,item.isKeyCond)); 
                falg.infoMessage = item.ruleInfo;
            }
            // 系统值规则
            if(item.type == "SYSVALUERULE") {
                startOp(!this.$verify.checkFieldSysValueRule(dataValue,item.sysRule.regExCode,item.ruleInfo,item.isKeyCond));
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
     * 表单项校验逻辑
     *
     * @public
     * @param name 属性名
     * @memberof Main2Base
     */
    public validItem(property:string, data:any):Promise<any>{
        return new Promise((resolve, reject) => {
            Util.validateItem(property,data,this.rules[property]).then(()=>{
                this.detailsModel[property].setError("");
                resolve(true);
            }).catch(({ errors, fields }) => {
                this.detailsModel[property].setError(errors[0].message);
                resolve(false);
            });
        });
    }

    /**
     * 校验全部
     */
    public async validAll() {
        let validateState = true;
        for (let item of Object.keys(this.rules)) {
            if(!await this.validItem(item,this.data[item])){
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    public formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.validItem(name,this.data[name]);
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {}

    /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }){}

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * 新建默认值
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    public createDefault(){}

    /**
     * 更新默认值
     * @memberof ${srfclassname('${ctrl.codeName}')}Base
     */
    public updateDefault(){}

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * 重置校验结果
     *
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async formValidateStatus(): Promise<boolean> {
        const refArr: Array<string> = ['mobileentity3name_item', 'field_item', 'field10_item', 'field14_item', 'field12_item', 'mobileentity3id_item', 'field15_item', 'field5_item', 'field13_item', 'field2_item', 'field4_item', 'field3_item', 'field11_item', 'field6_item', 'field16_item', 'field17_item', 'formitem1_item', 'formitem_item', 'formitem2_item', 'field9_item', 'field8_item', 'field7_item', 'mobtext2_item', 'mobnumber_item', 'mobtextarea_item', 'mobswitch_item', 'mobradiolist_item', 'mobdropdownlist_item', 'mobchecklist_item', 'mobpicker_item', 'mobpicker_dropdownview_item', 'mobpassword_item', 'mobslider_item', 'mobstepper2_item', 'mobdate_item', 'mobmultifileupload_item', 'mobpicturelist_item', 'mobrating_item', 'mobsinglefileupload_item', 'mobpicture_item', 'mobmpicker2_item', ];
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async loadDraft(opt: any = {}): Promise<any> {}

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async load(opt: any = {}): Promise<any> {
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
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected onFormLoad(data: any = {},action:string): void {}

    /**
     * 删除
     *
     * @protected
     * @param {Array<any>} [opt=[]]
     * @param {boolean} [showResultInfo]
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    protected async remove(opt: Array<any> = [], showResultInfo?: boolean): Promise<any> {
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async wfstart(data: any): Promise<any> {
        const _this: any = this;
        const arg: any = { ...data };
        Object.assign(arg, this.viewparams);
        let response: any = await this.service.wfstart(_this.WFStartAction, { ...this.context }, arg, this.showBusyIndicator);
        if (response && response.status === 200) {
            this.$notice.success('工作流启动成功');
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * 保存并退出
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * 保存
     *
     * @protected
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo]
     * @param {boolean} [isStateNext=true] 是否下发通知
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.codeName}')}
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, isStateNext: boolean = true): Promise<any> {}

    /**
     * 保存并新建
     *
     * @protected
     * @param {any[]} data
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
     * @memberof ${srfclassname('${ctrl.codeName}')}
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
    * @memberof ${srfclassname('${ctrl.codeName}')}
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

}