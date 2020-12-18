<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <ion-col v-show="detailsModel.container1.visible"  :size="12" style="" class="app-layoutpanel-container mob_list_card">
            <ion-row style="height:100%;">
                
                <ion-col v-show="detailsModel.productname.visible"  :lg="6" :size="6" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.productname" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.name.visible"  :lg="6" :size="6" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.name" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.date.visible"  :lg="6" :size="6" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.date" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.builder.visible"  :lg="3" :size="3" :offset="3" style="" class="app-layoutpanel-field">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.builder" :itemParam="{}"   :isCache="false" codeListType="DYNAMIC" tag="UserRealName"></app-mob-span>
                </div>
                
                
                </ion-col>
            </ion-row>
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
import BuildService from '@/app-core/service/build/build-service';
import MobService from '@/app-core/ctrl-service/build/mob-panel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import BuildUIService from '@/ui-service/build/build-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: { }
})
export default class MobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Mob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Mob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Mob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Mob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Mob
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Mob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobBase
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
     * @type {MobService}
     * @memberof Mob
     */
    protected service: MobService = new MobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof Mob
     */
    protected appEntityService: BuildService = new BuildService();

    /**
     * 界面UI服务对象
     *
     * @type {BuildUIService}
     * @memberof MobBase
     */  
    public deUIService:BuildUIService = new BuildUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Mob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

   /**
     * 生命周期
     *
     *  @memberof Mob
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof Mob
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
     *  @memberof Mob
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof Mob
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
     * @memberof Mob
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
     * @memberof Mob
     */
    @Prop() protected item?: any;


    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof Mob
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
     * @memberof Mob
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Mob
     */
    protected detailsModel: any = {
        productname: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'productname', panel: this, visible: true  })
, 
        name: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'name', panel: this, visible: true  })
, 
        date: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'date', panel: this, visible: true  })
, 
        builder: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'builder', panel: this, visible: true  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './mob-panel.less';
</style>

