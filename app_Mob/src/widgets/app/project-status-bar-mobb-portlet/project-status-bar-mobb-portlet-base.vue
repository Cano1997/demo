<template>
    <ion-row>
        <ion-list class='app-mob-portlet project-dashboard_sysportlet9 '>
            <ion-list-header v-if="editTitle"  class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else>{{$t('app.portlets.projectstatusbarmobb.caption')}}</span></span>
                <div v-if="actionBarModelData && actionBarModelData.length> 0" class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" :style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
                <view_dashboard_sysportlet9_chart
    :viewState="viewState"
    viewName="IbzMyTerritoryMobDashboardView"  
    :viewparams="viewparams" 
    :context="context" 
    fetchAction="FetchDefault"
    :showBusyIndicator="true" 
    name="dashboard_sysportlet9_chart"  
    ref='dashboard_sysportlet9_chart' 
    @closeview="closeView($event)">
</view_dashboard_sysportlet9_chart>
        </ion-list>
        <van-action-sheet v-model="selectStatus" get-container="#app" :actions="actionBarModelData" cancel-text="取消" close-on-click-action @select="actionBarClick" @cancel="onCancel" />
    </ion-row>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProjectService from '@/app-core/service/project/project-service';
import ProjectStatusBarMobbService from '@/app-core/ctrl-service/project/project-status-bar-mobb-portlet-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import ProjectUIService from '@/ui-service/project/project-ui-action';



@Component({
    components: { }
})
export default class ProjectStatusBarMobbBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProjectStatusBarMobb
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProjectStatusBarMobb
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProjectStatusBarMobb
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProjectStatusBarMobb
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProjectStatusBarMobb
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProjectStatusBarMobb
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ProjectStatusBarMobbBase
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
     * @type {ProjectStatusBarMobbService}
     * @memberof ProjectStatusBarMobb
     */
    protected service: ProjectStatusBarMobbService = new ProjectStatusBarMobbService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectStatusBarMobb
     */
    protected appEntityService: ProjectService = new ProjectService();

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof ProjectStatusBarMobbBase
     */  
    public deUIService:ProjectUIService = new ProjectUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProjectStatusBarMobb
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectStatusBarMobb
     */    
    protected counterServiceArray:Array<any> = [];


    /**
     * 是否为定制门户
     *
     * @type {string}
     * @memberof MyTaskMob
     */
    @Prop({default:false}) protected isCustomize?: boolean;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    @Prop() protected customizeTitle?: string;

    
    /**
     * 选择器状态
     *
     * @type {boolean}
     * @memberof ProjectStatusBarMobb
     */
    public selectStatus:boolean = false

    /**
     * 选择器状态取消事件
     */
    public onCancel() {
        this.selectStatus = false;
    }

    /**
     * 操作栏模型数据
     *
     * @protected
     * @type {any[]}
     * @memberof ProjectStatusBarMobb
     */
    protected actionBarModelData: any[] = [
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof ProjectStatusBarMobb
     */
    protected handleItemClick($event: any) {
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProjectStatusBarMobb
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProjectStatusBarMobb
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectStatusBarMobb
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProjectStatusBarMobb
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
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
     * @memberof ProjectStatusBarMobb
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProjectStatusBarMobb
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof ProjectStatusBarMobb
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof ProjectStatusBarMobb
     */
    public builtinItemS = [{name:'重命名',viewlogicname:'rename'},{name:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof ProjectStatusBarMobb
     */
    public open() {
        this.selectStatus = true;
    }

    get edit_title_btn(){
        return this.isEditTitle?'padding-bottom: 30px':'padding:0'
    }
    
    /**
     * 门户点击行为
     *
     * @memberof ProjectStatusBarMobb
     */
    public actionBarClick(data:any) {
        if(data.viewlogicname){
            if(data.viewlogicname == 'rename' ){
                this.isEditTitle = true;
            }else if(data.viewlogicname == 'delete' ){
                this.$emit("enableCustomizedEvent",'delete',this.item)
            }
            else{
                this.handleItemClick(data.viewlogicname);
            }
        }
    }

    /**
     * 生命周期
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    public mounted() {
        if(this.isCustomize){
            this.actionBarModelData.push(...this.builtinItemS);
        }
    }

    /**
     * 定制项数据
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return (this.$t('app.portlets.projectstatusbarmobb.caption') as string)
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof ProjectStatusBarMobb
     */
    public onConfirmClick(val:boolean) {
        if(val){
            this.$emit("enableCustomizedEvent",'rename',Object.assign(this.item,{customizeTitle:this.reTitleValue?this.reTitleValue:this.editTitle}),this.reTitleValue?this.reTitleValue:this.editTitle)
        }
        this.isEditTitle = false;
    }

}
</script>

<style lang='less'>
@import './project-status-bar-mobb-portlet.less';
</style>