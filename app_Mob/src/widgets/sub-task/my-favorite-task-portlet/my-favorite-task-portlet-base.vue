<template>
    <ion-row>
        <ion-list class='app-mob-portlet subtask-dashboard_sysportlet4 '>
            <ion-list-header class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else>我收藏的任务</span></span>
                <div v-if="actionBarModelData && actionBarModelData.length> 0" class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" :style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
            <task-favorite-mob-mdview9 :_context="JSON.stringify(context)" :isChildView="true" :_viewparams="JSON.stringify(viewparams)" viewDefaultUsage="includedView" ></task-favorite-mob-mdview9>
        </ion-list>
        <ion-select ref="select" v-show="false"  @ionChange="actionBarClick" interface="action-sheet" :cancel-text="$t('app.button.cancel')">
            <ion-select-option  v-for="option of actionBarModelData" :key="option.viewlogicname"  :value="option.viewlogicname">{{option.actionName}}</ion-select-option>
        </ion-select>
    </ion-row>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SubTaskService from '@/app-core/service/sub-task/sub-task-service';
import MyFavoriteTaskService from '@/app-core/ctrl-service/sub-task/my-favorite-task-portlet-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SubTaskUIService from '@/ui-service/sub-task/sub-task-ui-action';



@Component({
    components: {
    }
})
export default class MyFavoriteTaskBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyFavoriteTask
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyFavoriteTask
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyFavoriteTask
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyFavoriteTask
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyFavoriteTask
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyFavoriteTask
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyFavoriteTaskBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {MyFavoriteTaskService}
     * @memberof MyFavoriteTask
     */
    protected service: MyFavoriteTaskService = new MyFavoriteTaskService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof MyFavoriteTask
     */
    protected appEntityService: SubTaskService = new SubTaskService();

    /**
     * 界面UI服务对象
     *
     * @type {SubTaskUIService}
     * @memberof MyFavoriteTaskBase
     */  
    public deUIService:SubTaskUIService = new SubTaskUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof Dashboard_sysportlet4Base
     */
    protected async dashboard_sysportlet4_u02f0175_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('subtask_ui_action');
        if (curUIService) {
            curUIService.Task_MyFavMore(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyFavoriteTask
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyFavoriteTask
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
     * @memberof MOBMyFavoriteStory
     */
    @Prop() protected customizeTitle?: string;

    /**
     * 操作栏模型数据
     *
     * @protected
     * @type {any[]}
     * @memberof MyFavoriteTask
     */
    protected actionBarModelData: any[] = [
        {
            viewlogicname: "dashboard_sysportlet4_u02f0175_click",
            actionName: "更多",
        }
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof MyFavoriteTask
     */
    protected handleItemClick($event: any) {
        if (Object.is($event, 'dashboard_sysportlet4_u02f0175_click')) {
            this.dashboard_sysportlet4_u02f0175_click(null);
        }
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyFavoriteTask
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyFavoriteTask
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MyFavoriteTask
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyFavoriteTask
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
     * @memberof MyFavoriteTask
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyFavoriteTask
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof MyFavoriteTask
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof MyTaskMob
     */
    public builtinItemS = [{actionName:'重命名',viewlogicname:'rename'},{actionName:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof MyFavoriteTask
     */
    public open() {
        let select :any= this.$refs['select'];
        if(select){
            setTimeout(() => {
                select.open();
            }, 1);
        }
    }

    get edit_title_btn(){
        return this.isEditTitle?'padding-bottom: 30px':'padding:0'
    }
    
    /**
     * 门户点击行为
     *
     * @memberof MyFavoriteTask
     */
    public actionBarClick(value:any) {
        if(value.detail.value){
            if(value.detail.value == 'rename' ){
                this.isEditTitle = true;
            }else if(value.detail.value == 'delete' ){
                this.$emit("enableCustomizedEvent",'delete',this.item)
            }
            else{
                this.handleItemClick(value.detail.value);
            }
        }
        let select :any = this.$refs['select'];
        if (select) {
            select.value = null;
        }
    }

    /**
     * 生命周期
     *
     * @type {string}
     * @memberof MyFavoriteTask
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
     * @memberof MyFavoriteTask
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return '我收藏的任务'
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof MyFavoriteTask
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
@import './my-favorite-task-portlet.less';
</style>