<template>
    <ion-grid class="app-mob-dashboard  ">
        <div v-show="isEnableCustomized" class="dashboard-enableCustomized" @click="openCustomized">定制仪表盘<ion-icon name="settings-outline"></ion-icon></div>
            <ion-card class="dashboard-item appmenu"  v-if="!isEnableCustomized">
            <view_db_appmenu1
    :viewState="viewState"
    viewName="AppPortalView2"  
    :viewparams="viewparams" 
    :context="context" 
    name="db_appmenu1"  
    ref='db_appmenu1' 
    @closeview="closeView($event)">
</view_db_appmenu1>
            </ion-card>
            <ion-card class="dashboard-item appmenu"  v-if="!isEnableCustomized">
            <view_db_appmenu2
    :viewState="viewState"
    viewName="AppPortalView2"  
    :viewparams="viewparams" 
    :context="context" 
    name="db_appmenu2"  
    ref='db_appmenu2' 
    @closeview="closeView($event)">
</view_db_appmenu2>
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
import AppPortalView2_dbService from '@/app-core/ctrl-service/app/app-portal-view2-db-dashboard-service';




@Component({
    components: { }
})
export default class AppPortalView2_dbBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AppPortalView2_db
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof AppPortalView2_db
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AppPortalView2_db
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppPortalView2_db
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppPortalView2_db
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AppPortalView2_db
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AppPortalView2_db
     */
    protected getControlType(): string {
        return 'DASHBOARD'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AppPortalView2_db
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();



    /**
     * 建构部件服务对象
     *
     * @type {AppPortalView2_dbService}
     * @memberof AppPortalView2_db
     */
    protected service: AppPortalView2_dbService = new AppPortalView2_dbService({$store:this.$store});
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppPortalView2_db
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    


    
    /**
     * 支持定制
     *
     * @type {boolean}
     * @memberof AppPortalView2_db
     */
    protected isEnableCustomized: boolean = false;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AppPortalView2_db
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * modleId
     *
     * @type {string}
     * @memberof AppPortalView2_dbBase
     */
    public modelId:string = "dashboard_app_appportalview2_db";


    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof AppPortalView2_dbBase
     */
    public utilServiceName:string = "dynadashboard";

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof AppPortalView2_dbBase
     */
    protected utilService:any =  window.utilServiceConstructor;

    /**
     * 加载定制数据模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @memberof AppPortalView2_dbBase
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
     * @memberof AppPortalView2_db
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
     * @memberof AppPortalView2_db
     */
    public customizeModel :any = [];

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AppPortalView2_db
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPortalView2_db
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AppPortalView2_db
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
     * @memberof AppPortalView2_db
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AppPortalView2_db
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 打开定制仪表盘界面
     *
     * @memberof AppPortalView2_db
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
@import './app-portal-view2-db-dashboard.less';
</style>