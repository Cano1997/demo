<template>
    <div class='view-container'>
    <ion-row class="app-layoutpanel">
        <ion-col v-show="detailsModel.container1.visible"  :size="12" style="" class="app-layoutpanel-container mob_list_card">
            <ion-row style="height:100%;">
                
                <ion-col v-show="detailsModel.rawitem2.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    我的任务
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.mytasks.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.mytasks" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem1.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    已延期任务
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.myetasks.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob-red">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.myetasks" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem3.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    我的bug
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.mybugs.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.mybugs" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem9.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    已延期的Bug
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.myebugs.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob-red">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.myebugs" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem4.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    我的需求
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.mystorys.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.mystorys" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem5.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    {{$t('userCustom.mywork.noCloseProject')}}
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.projects.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.projects" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem7.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    {{$t('userCustom.mywork.deferredProjects')}}
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.eprojects.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob-red">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.eprojects" :itemParam="{}"  ></app-mob-span>
                </div>
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.rawitem6.visible"  :lg="4" :size="4" style="" class="app-layoutpanel-rowitem">
                    {{$t('userCustom.mywork.noCloseProduct')}}
                
                
                
                
                </ion-col>
                
                <ion-col v-show="detailsModel.products.visible"  :lg="6" :size="6" :offset="2" style="text-align:right" class="app-layoutpanel-field text-center-marginupdown-mob-red">
                    <div class="item-field ">
                    
                    <app-mob-span  :context="context" :value="data.products" :itemParam="{}"  ></app-mob-span>
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
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MyWorkMobService from '@/app-core/ctrl-service/ibz-my-territory/my-work-mob-panel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';

import { PanelUserControlModel, PanelButtonModel, PanelControlModel, PanelFieldModel, PanelRawitemModel, PanelContainerModel } from '@/model/panel-detail';


@Component({
    components: { }
})
export default class MyWorkMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyWorkMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyWorkMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyWorkMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyWorkMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyWorkMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyWorkMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyWorkMob
     */
    protected getControlType(): string {
        return 'PANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyWorkMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyWorkMobBase
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
     * @type {MyWorkMobService}
     * @memberof MyWorkMob
     */
    protected service: MyWorkMobService = new MyWorkMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWorkMob
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MyWorkMobBase
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyWorkMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

   /**
     * 生命周期
     *
     *  @memberof MyWorkMob
     */  
    created(){
        this.afterCreated();
    }
   /**
     * 执行created后的逻辑
     *
     *  @memberof MyWorkMob
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
     *  @memberof MyWorkMob
     */  
    public data :any ={} ;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MyWorkMob
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
     * @memberof MyWorkMob
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
     * @memberof MyWorkMob
     */
    @Prop() protected item?: any;


    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof MyWorkMob
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
     * @memberof MyWorkMob
     */
    private panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                

















    }

   /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MyWorkMob
     */
    protected detailsModel: any = {
        rawitem2: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem2', panel: this, visible: true  })
, 
        mytasks: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mytasks', panel: this, visible: true  })
, 
        rawitem1: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem1', panel: this, visible: true  })
, 
        myetasks: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'myetasks', panel: this, visible: true  })
, 
        rawitem3: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem3', panel: this, visible: true  })
, 
        mybugs: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mybugs', panel: this, visible: true  })
, 
        rawitem9: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem9', panel: this, visible: true  })
, 
        myebugs: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'myebugs', panel: this, visible: true  })
, 
        rawitem4: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem4', panel: this, visible: true  })
, 
        mystorys: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'mystorys', panel: this, visible: true  })
, 
        rawitem5: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem5', panel: this, visible: true  })
, 
        projects: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'projects', panel: this, visible: true  })
, 
        rawitem7: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem7', panel: this, visible: true  })
, 
        eprojects: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'eprojects', panel: this, visible: true  })
, 
        rawitem6: new PanelRawitemModel({ caption: '', itemType: 'RAWITEM', name: 'rawitem6', panel: this, visible: true  })
, 
        products: new PanelFieldModel({ caption: '', itemType: 'FIELD', name: 'products', panel: this, visible: true  })
, 
        container1: new PanelContainerModel({ caption: '', itemType: 'CONTAINER', name: 'container1', panel: this, visible: true  })
, 
    };

}
</script>

<style lang='less'>
@import './my-work-mob-panel.less';
</style>

