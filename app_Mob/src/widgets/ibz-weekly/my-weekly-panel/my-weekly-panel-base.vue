<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        
        <ion-col v-show="detailsModel.ibz_weeklyid.visible"  :lg="6" :size="24" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            
            <app-mob-span  :context="context" :value="data.ibz_weeklyid" :itemParam="{}"  ></app-mob-span>
        </div>
        
        
        </ion-col>
        
        <ion-col v-show="detailsModel.ibz_weeklyname.visible"  :size="24" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            <ion-label class="item-field-label ">周报名</ion-label>
            <app-mob-span  :context="context" :value="data.ibz_weeklyname" :itemParam="{}"  ></app-mob-span>
        </div>
        
        
        </ion-col>
        
        <ion-col v-show="detailsModel.account.visible"  :lg="5" :size="24" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            
            <app-mob-span  :context="context" :value="data.account" :itemParam="{}"   :isCache="false" codeListType="DYNAMIC" tag="UserRealName"></app-mob-span>
        </div>
        
        
        </ion-col>
        
        <ion-col v-show="detailsModel.date.visible"  :lg="8" :size="24" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            
            <app-mob-span  :context="context" :value="data.date" :itemParam="{}"  ></app-mob-span>
        </div>
        
        
        </ion-col>
        
        <ion-col v-show="detailsModel.reportto.visible"  :lg="8" :size="24" style="" class="app-layoutpanel-field">
            <div class="item-field ">
            <ion-label class="item-field-label ">汇报给</ion-label>
            <app-mob-span  :context="context" :value="data.reportto" :itemParam="{}"   :isCache="false" codeListType="DYNAMIC" tag="UserRealName"></app-mob-span>
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
import IbzWeeklyService from '@/app-core/service/ibz-weekly/ibz-weekly-service';
import MyWeeklyService from '@/app-core/ctrl-service/ibz-weekly/my-weekly-panel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzWeeklyUIService from '@/ui-service/ibz-weekly/ibz-weekly-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: { }
})
export default class MyWeeklyBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyWeekly
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyWeekly
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyWeekly
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyWeekly
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyWeekly
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyWeekly
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyWeekly
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyWeekly
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyWeeklyBase
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
     * @type {MyWeeklyService}
     * @memberof MyWeekly
     */
    protected service: MyWeeklyService = new MyWeeklyService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzWeeklyService}
     * @memberof MyWeekly
     */
    protected appEntityService: IbzWeeklyService = new IbzWeeklyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzWeeklyUIService}
     * @memberof MyWeeklyBase
     */  
    public deUIService:IbzWeeklyUIService = new IbzWeeklyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyWeekly
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

   /**
     * 生命周期
     *
     *  @memberof MyWeekly
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof MyWeekly
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
     *  @memberof MyWeekly
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MyWeekly
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
     * @memberof MyWeekly
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
     * @memberof MyWeekly
     */
    @Prop() protected item?: any;


    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof MyWeekly
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
     * @memberof MyWeekly
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MyWeekly
     */
    protected detailsModel: any = {
        ibz_weeklyid: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'ibz_weeklyid', panel: this, visible: true  })
, 
        ibz_weeklyname: new PanelFieldModel({ caption: '周报名', itemType: 'FIELD', name: 'ibz_weeklyname', panel: this, visible: true  })
, 
        account: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'account', panel: this, visible: true  })
, 
        date: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'date', panel: this, visible: true  })
, 
        reportto: new PanelFieldModel({ caption: '汇报给', itemType: 'FIELD', name: 'reportto', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './my-weekly-panel.less';
</style>

