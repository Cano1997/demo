<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <ion-col v-show="detailsModel.container2.visible"  :size="12" style="" class="app-layoutpanel-container mob_list_card">
            <ion-row style="height:100%;">
                <ion-col v-show="detailsModel.container1.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        
                        <ion-col v-show="detailsModel.account.visible"  :lg="5" :size="12" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  :context="context" :value="data.account" :itemParam="{}"   :isCache="false" codeListType="DYNAMIC" tag="UserRealName"></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                        
                        <ion-col v-show="detailsModel.submittime.visible"  :lg="2" :size="12" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-span  :context="context" :value="data.submittime" :itemParam="{}"  ></app-mob-span>
                        </div>
                        
                        
                        </ion-col>
                    </ion-row>
                </ion-col>
                <ion-col v-show="detailsModel.container3.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        
                        <ion-col v-show="detailsModel.worktoday.visible"  :lg="11" :size="12" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-rich-text-editor-pms :formState="formState"  :value="data.worktoday" @change="(val) =>{this.data.worktoday =val}" :disabled="detailsModel.worktoday.disabled" :data="JSON.stringify(this.data)"  name="worktoday" :uploadparams='{}' :exportparams='{}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>
                        
                        </div>
                        
                        
                        </ion-col>
                    </ion-row>
                </ion-col>
                <ion-col v-show="detailsModel.container4.visible"  :size="12" style="" class="app-layoutpanel-container">
                    <ion-row style="height:100%;">
                        
                        <ion-col v-show="detailsModel.planstomorrow.visible"  :lg="11" :size="12" style="" class="app-layoutpanel-field">
                            <div class="item-field ">
                            
                            <app-mob-rich-text-editor-pms :formState="formState"  :value="data.planstomorrow" @change="(val) =>{this.data.planstomorrow =val}" :disabled="detailsModel.planstomorrow.disabled" :data="JSON.stringify(this.data)"  name="planstomorrow" :uploadparams='{}' :exportparams='{}'  style=""  @noticeusers_change="(val)=>{this.data.noticeusers =val}"/>
                        
                        </div>
                        
                        
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-col>
        
        <ion-col v-show="detailsModel.type.visible"  :size="12" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            
            <span class="app-form-hidden" style="display: none;">{{data.type}}</span>
        </div>
        
        
        </ion-col>
        
        <ion-col v-show="detailsModel.issubmit.visible"  :size="12" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            
            <span class="app-form-hidden" style="display: none;">{{data.issubmit}}</span>
        </div>
        
        
        </ion-col>
    </ion-row>
</div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzReportService from '@/app-core/service/ibz-report/ibz-report-service';
import MySubmitService from '@/app-core/ctrl-service/ibz-report/my-submit-panel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzReportUIService from '@/ui-service/ibz-report/ibz-report-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: { }
})
export default class MySubmitBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MySubmit
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MySubmit
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MySubmit
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MySubmit
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MySubmit
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MySubmit
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MySubmit
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MySubmit
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MySubmitBase
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
     * @type {MySubmitService}
     * @memberof MySubmit
     */
    protected service: MySubmitService = new MySubmitService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzReportService}
     * @memberof MySubmit
     */
    protected appEntityService: IbzReportService = new IbzReportService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzReportUIService}
     * @memberof MySubmitBase
     */  
    public deUIService:IbzReportUIService = new IbzReportUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MySubmit
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

   /**
     * 生命周期
     *
     *  @memberof MySubmit
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof MySubmit
     */  
    afterCreated(){
        if(this.item){
            this.data = this.item;
            this.panelLogic({ name: '', newVal: null, oldVal: null });
            return;
        }
       if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
            });
        } 
        this.panelLogic({ name: '', newVal: null, oldVal: null });
    }
   /**
     * 数据
     *
     *  @memberof MySubmit
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MySubmit
     */
    @Prop() protected fetchAction!: string;

   /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Mob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 接口实现
     *
     * @returns {any[]}
     * @memberof MySubmit
     */
    getDatas(): any[] {
        if (!this.item) {
            return [];
        }
        return [this.item];
    }
    getData() {
        return this.item;
    }

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof MySubmit
     */
    @Prop() protected item?: any;


    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof MySubmit
     */
    private async load(data: any = {}, type: string = ""): Promise<any> {
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        const response: any = await this.service.get(this.fetchAction, this.context, data, this.showBusyIndicator);
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.info });
            return Promise.resolve(response);
        }
        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.data = [];
        this.data = response.data.records;
        return Promise.resolve(response);
    }

    @Watch('item')
    public itemChange(){
         this.data = this.item;
    }


   /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MySubmit
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                










    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MySubmit
     */
    protected detailsModel: any = {
        account: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'account', panel: this, visible: true  })
, 
        submittime: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'submittime', panel: this, visible: true  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
        worktoday: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'worktoday', panel: this, visible: true  })
, 
        container3: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container3', panel: this, visible: true  })
, 
        planstomorrow: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'planstomorrow', panel: this, visible: true  })
, 
        container4: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container4', panel: this, visible: true  })
, 
        container2: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container2', panel: this, visible: true  })
, 
        type: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'type', panel: this, visible: false  })
, 
        issubmit: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'issubmit', panel: this, visible: false  })
, 
    };

}
</script>

<style lang='less'>
@import './my-submit-panel.less';
</style>

