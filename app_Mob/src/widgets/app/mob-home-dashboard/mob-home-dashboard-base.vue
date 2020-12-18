<template>
    <ion-grid class="app-mob-dashboard ibzmyterritory-dashboard ">
        <div v-show="isEnableCustomized" class="dashboard-enableCustomized" @click="openCustomized">定制仪表盘<ion-icon name="settings-outline"></ion-icon></div>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet1
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet1"  
    ref='dashboard_sysportlet1' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet1>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet2
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet2"  
    ref='dashboard_sysportlet2' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet2>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet3
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet3"  
    ref='dashboard_sysportlet3' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet3>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet5
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet5"  
    ref='dashboard_sysportlet5' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet5>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet4
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet4"  
    ref='dashboard_sysportlet4' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet4>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet6
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet6"  
    ref='dashboard_sysportlet6' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet6>
            </ion-card>
            <ion-card class="dashboard-item view"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet7
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet7"  
    ref='dashboard_sysportlet7' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet7>
            </ion-card>
            <ion-card class="dashboard-item chart"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet8
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet8"  
    ref='dashboard_sysportlet8' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet8>
            </ion-card>
            <ion-card class="dashboard-item chart"  v-if="!isEnableCustomized">
            <view_dashboard_sysportlet9
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    name="dashboard_sysportlet9"  
    ref='dashboard_sysportlet9' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet9>
            </ion-card>
            <template v-for="item in customizeModel">
                <ion-card class="dashboard-item userCustomize ios hydrated" :class="item.componentName + 'dashboard'"  :key="item.id" v-if="isEnableCustomized">
                    <component :is="item.componentName" :item="item" :isCustomize="true" :customizeTitle="item.customizeTitle" :viewState="viewState" :name="item.portletCodeName" :context="context" :isChildView="true" :viewparams="viewparams" @enableCustomizedEvent="enableCustomizedEvent"></component>
                </ion-card>
            </template>
    </ion-grid>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MobHomeService from '@/app-core/ctrl-service/ibz-my-territory/mob-home-dashboard-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';



@Component({
    components: { }
})
export default class MobHomeBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobHome
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobHome
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobHome
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobHome
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobHome
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobHome
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobHome
     */
    protected getControlType(): string {
        return 'DASHBOARD'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobHome
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobHomeBase
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
     * @type {MobHomeService}
     * @memberof MobHome
     */
    protected service: MobHomeService = new MobHomeService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MobHome
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MobHomeBase
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobHome
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    


    
    /**
     * 支持定制
     *
     * @type {boolean}
     * @memberof MobHome
     */
    protected isEnableCustomized: boolean = true;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobHome
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * modleId
     *
     * @type {string}
     * @memberof MobHomeBase
     */
    public modelId:string = "dashboard_ibzmyterritory_mobhome";


    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof MobHomeBase
     */
    public utilServiceName:string = "dynadashboard";

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof MobHomeBase
     */
    protected utilService:any =  window.utilServiceConstructor;

    /**
     * 加载定制数据模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @memberof MobHomeBase
     */
    public loadModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
            this.utilService.getService(serviceName).then((service: any) => {
                service.loadModelData(JSON.stringify(context), viewparams).then((response: any) => {
                    this.customizeModel = response.data;
                    setTimeout(() => {
                        this.customizeModel.forEach((item: any) => {
                        this.viewState.next({ tag: item.portletCodeName, action: "", data: {} });});
                    }, 1);
                    resolve(response);
                }).catch((response: any) => {
                    reject(response);
                });
            }).catch((response: any) => {
                reject(response);
            });
        });
    }

    /**
     * 保存定制数据模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @memberof MobHome
     */
    public saveModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
            this.utilService.getService(serviceName).then((service: any) => {
                service.saveModelData(JSON.stringify(context), "", viewparams)
                    .then((response: any) => {
                        resolve(response);
                    })
                    .catch((response: any) => {
                        reject(response);
                    });
                })
                .catch((response: any) => {
                    reject(response);
                });
            });
    }

    /**
     * 定制数据模型
     *
     * @memberof MobHome
     */
    public customizeModel :any = [];

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobHome
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MobHome
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobHome
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if(this.isEnableCustomized){
                    this.loadModel(this.utilServiceName,this.context,Object.assign({utilServiceName:this.utilServiceName,modelid:this.modelId},this.viewparams));
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((name: string) => {
                    this.viewState.next({ tag: name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MobHome
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobHome
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 打开定制仪表盘界面
     *
     * @memberof MobHome
     */
    public openCustomized() {
        this.openPopupModal({ viewname: 'app-customize', title: 'app-customize'},{},{modelId:this.modelId,utilServiceName:this.utilServiceName,selectMode:this.customizeModel});
    }

    /**
     * 打开定制仪表盘界面
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.loadModel(this.utilServiceName,this.context,Object.assign({utilServiceName:this.utilServiceName,modelid:this.modelId},this.viewparams));
        }
    }

    /**
     * 定制事件
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    public async enableCustomizedEvent(tag:string,customizeModelItem:any,title:string) {
        let index = this.customizeModel.findIndex((item:any)=>{
                return item.id === customizeModelItem.id;
        })
        let meassage :string= '';
        if(tag === 'rename'){
            this.customizeModel.splice(index,1,(customizeModelItem as never));
            meassage = '重命名';
        }
        if(tag === 'delete'){
            this.customizeModel.splice(index,1); 
            meassage = '删除';
        }
        let falg = await this.saveModel(this.utilServiceName,{},
        {
            utilServiceName: this.utilServiceName,
            modelid: this.modelId,
            model: this.customizeModel,
        });
          falg? this.$notice.success(meassage+'成功'):this.$notice.error(meassage+'失败');
    }

}
</script>

<style lang='less'>
@import './mob-home-dashboard.less';
</style>