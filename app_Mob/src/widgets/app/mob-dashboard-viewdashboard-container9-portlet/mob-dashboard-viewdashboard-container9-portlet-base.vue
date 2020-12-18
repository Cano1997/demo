<template>
    <ion-row>
        <ion-list class='app-mob-portlet ibzmyterritory-dashboard_container9 '>
            <ion-list-header v-if="editTitle"  class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else>{{$t('app.portlets.mobdashboardviewdashboard_container9.caption')}}</span></span>
                <div v-if="actionBarModelData && actionBarModelData.length> 0" class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" :style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
                <div>dashboard_container9类型CONTAINER不提供内容输出</div>
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
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MobDashboardViewdashboard_container9Service from '@/app-core/ctrl-service/ibz-my-territory/mob-dashboard-viewdashboard-container9-portlet-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';



@Component({
    components: { }
})
export default class MobDashboardViewdashboard_container9Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobDashboardViewdashboard_container9
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobDashboardViewdashboard_container9
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobDashboardViewdashboard_container9Base
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
     * @type {MobDashboardViewdashboard_container9Service}
     * @memberof MobDashboardViewdashboard_container9
     */
    protected service: MobDashboardViewdashboard_container9Service = new MobDashboardViewdashboard_container9Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MobDashboardViewdashboard_container9
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MobDashboardViewdashboard_container9Base
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobDashboardViewdashboard_container9
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop() protected customizeTitle?: string;

    
    /**
     * 选择器状态
     *
     * @type {boolean}
     * @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
     */
    protected actionBarModelData: any[] = [
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof MobDashboardViewdashboard_container9
     */
    protected handleItemClick($event: any) {
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobDashboardViewdashboard_container9
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobDashboardViewdashboard_container9
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MobDashboardViewdashboard_container9
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobDashboardViewdashboard_container9
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof MobDashboardViewdashboard_container9
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof MobDashboardViewdashboard_container9
     */
    public builtinItemS = [{name:'重命名',viewlogicname:'rename'},{name:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
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
     * @memberof MobDashboardViewdashboard_container9
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return (this.$t('app.portlets.mobdashboardviewdashboard_container9.caption') as string)
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container9
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
@import './mob-dashboard-viewdashboard-container9-portlet.less';
</style>