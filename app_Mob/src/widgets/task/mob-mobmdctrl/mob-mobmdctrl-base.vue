<template>
    <div  class="app-mob-mdctrl task-mdctrl ">
        <div class="app-mob-mdctrl-mdctrl" ref="mdctrl">
                <ion-list class="items" ref="ionlist" >
                  <template v-if="(viewType == 'DEMOBMDVIEW9') && controlStyle != 'SWIPERVIEW' ">
                      <app-task-list  :item="item"></app-task-list>
                      <ion-button v-if="!isTempMode && !allLoaded && needLoadMore" class="loadmore_btn"   @click="loadBottom">{{$t('app.button.loadmore')}}</ion-button>
                  </template>
                </ion-list>
                <ion-list class="items" ref="ionlist"  >
                  <ion-item-sliding  :ref="item.srfkey" v-for="(item,index) in items" @click="item_click(item)" :key="item.srfkey" class="app-mob-mdctrl-item" :disabled="item.sliding_disabled" @ionDrag="ionDrag">
                        <ion-item-options v-if="controlStyle != 'LISTVIEW3'" side="end">
                            <ion-item-option v-show="item.confirmStoryChangeCz.visabled" :disabled="item.confirmStoryChangeCz.disabled" color="primary" @click="mdctrl_click($event, 'u50d1ea3', item)"><ion-icon v-if="item.confirmStoryChangeCz.icon && item.confirmStoryChangeCz.isShowIcon" :name="item.confirmStoryChangeCz.icon"></ion-icon><ion-label v-if="item.confirmStoryChangeCz.isShowCaption">确认</ion-label></ion-item-option>
                            <ion-item-option v-show="item.TaskFavoritesMob.visabled" :disabled="item.TaskFavoritesMob.disabled" color="primary" @click="mdctrl_click($event, 'u78657a8', item)"><ion-icon v-if="item.TaskFavoritesMob.icon && item.TaskFavoritesMob.isShowIcon" :name="item.TaskFavoritesMob.icon"></ion-icon><ion-label v-if="item.TaskFavoritesMob.isShowCaption">收藏</ion-label></ion-item-option>
                            <ion-item-option v-show="item.TaskNFavoritesMob.visabled" :disabled="item.TaskNFavoritesMob.disabled" color="primary" @click="mdctrl_click($event, 'u7e33b1f', item)"><ion-icon v-if="item.TaskNFavoritesMob.icon && item.TaskNFavoritesMob.isShowIcon" :name="item.TaskNFavoritesMob.icon"></ion-icon><ion-label v-if="item.TaskNFavoritesMob.isShowCaption">取消收藏</ion-label></ion-item-option>
                            <ion-item-option v-show="item.StartMobTeamTask.visabled" :disabled="item.StartMobTeamTask.disabled" color="primary" @click="mdctrl_click($event, 'uc655bcc', item)"><ion-icon v-if="item.StartMobTeamTask.icon && item.StartMobTeamTask.isShowIcon" :name="item.StartMobTeamTask.icon"></ion-icon><ion-label v-if="item.StartMobTeamTask.isShowCaption">开始</ion-label></ion-item-option>
                            <ion-item-option v-show="item.AssignTaskMob.visabled" :disabled="item.AssignTaskMob.disabled" color="primary" @click="mdctrl_click($event, 'uaa5b5c3', item)"><ion-icon v-if="item.AssignTaskMob.icon && item.AssignTaskMob.isShowIcon" :name="item.AssignTaskMob.icon"></ion-icon><ion-label v-if="item.AssignTaskMob.isShowCaption">指派</ion-label></ion-item-option>
                            <ion-item-option v-show="item.finishTask1.visabled" :disabled="item.finishTask1.disabled" color="primary" @click="mdctrl_click($event, 'uc50cd90', item)"><ion-icon v-if="item.finishTask1.icon && item.finishTask1.isShowIcon" :name="item.finishTask1.icon"></ion-icon><ion-label v-if="item.finishTask1.isShowCaption">完成</ion-label></ion-item-option>
                            <ion-item-option v-show="item.PauseMobTeamTask.visabled" :disabled="item.PauseMobTeamTask.disabled" color="primary" @click="mdctrl_click($event, 'ue0846ea', item)"><ion-icon v-if="item.PauseMobTeamTask.icon && item.PauseMobTeamTask.isShowIcon" :name="item.PauseMobTeamTask.icon"></ion-icon><ion-label v-if="item.PauseMobTeamTask.isShowCaption">暂停</ion-label></ion-item-option>
                            <ion-item-option v-show="item.CancelTaskMob.visabled" :disabled="item.CancelTaskMob.disabled" color="primary" @click="mdctrl_click($event, 'u77523c1', item)"><ion-icon v-if="item.CancelTaskMob.icon && item.CancelTaskMob.isShowIcon" :name="item.CancelTaskMob.icon"></ion-icon><ion-label v-if="item.CancelTaskMob.isShowCaption">取消</ion-label></ion-item-option>
                            <ion-item-option v-show="item.CloseTaskMob.visabled" :disabled="item.CloseTaskMob.disabled" color="primary" @click="mdctrl_click($event, 'u3834ce6', item)"><ion-icon v-if="item.CloseTaskMob.icon && item.CloseTaskMob.isShowIcon" :name="item.CloseTaskMob.icon"></ion-icon><ion-label v-if="item.CloseTaskMob.isShowCaption">关闭</ion-label></ion-item-option>
                            <ion-item-option v-show="item.ActiveMobTask.visabled" :disabled="item.ActiveMobTask.disabled" color="primary" @click="mdctrl_click($event, 'uadbed1d', item)"><ion-icon v-if="item.ActiveMobTask.icon && item.ActiveMobTask.isShowIcon" :name="item.ActiveMobTask.icon"></ion-icon><ion-label v-if="item.ActiveMobTask.isShowCaption">激活</ion-label></ion-item-option>
                            <ion-item-option v-show="item.ConsumedMobTaskTeam.visabled" :disabled="item.ConsumedMobTaskTeam.disabled" color="primary" @click="mdctrl_click($event, 'ue6a8f61', item)"><ion-icon v-if="item.ConsumedMobTaskTeam.icon && item.ConsumedMobTaskTeam.isShowIcon" :name="item.ConsumedMobTaskTeam.icon"></ion-icon><ion-label v-if="item.ConsumedMobTaskTeam.isShowCaption">工时</ion-label></ion-item-option>
                            <ion-item-option v-show="item.deleteMob.visabled" :disabled="item.deleteMob.disabled" color="primary" @click="mdctrl_click($event, 'u2ec10d0', item)"><ion-icon v-if="item.deleteMob.icon && item.deleteMob.isShowIcon" :name="item.deleteMob.icon"></ion-icon><ion-label v-if="item.deleteMob.isShowCaption">删除</ion-label></ion-item-option>
                        </ion-item-options>
                    <ion-item>
                      <template v-if="(viewType == 'DEMOBMDVIEW') && controlStyle != 'SWIPERVIEW' ">
                          <app-task-list  :item="item"></app-task-list>
                      </template>
                      <template v-else-if="(viewType == 'DEMOBMDVIEW9')">
                          <app-task-list  :item="item"></app-task-list>
                      </template>
                    </ion-item>
                  </ion-item-sliding>
                </ion-list>
             <div  v-if="items.length == 0" class="no-data">
                <div>暂无数据</div>
            </div>
            <div v-show=" loadStatus && !allLoaded && isNeedLoaddingText" class="loadding" >
                    <span >{{$t('app.loadding')?$t('app.loadding'):"加载中"}}</span>
                    <ion-spinner name="dots"></ion-spinner>
            </div>                          
        </div>
    </div>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import TaskService from '@/app-core/service/task/task-service';
import MobService from '@/app-core/ctrl-service/task/mob-mobmdctrl-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import TaskUIService from '@/ui-service/task/task-ui-action';



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
        return 'MOBMDCTRL'
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
     * @type {TaskService}
     * @memberof Mob
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MobBase
     */  
    public deUIService:TaskUIService = new TaskUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u50d1ea3_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_confirmStoryChangeCz(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u78657a8_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_TaskFavoritesMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u7e33b1f_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_TaskNFavoritesMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_uc655bcc_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_StartMobTeamTask(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_uaa5b5c3_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_AssignTaskMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_uc50cd90_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_finishTask1(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_ue0846ea_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_PauseMobTeamTask(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u77523c1_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_CancelTaskMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u3834ce6_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_CloseTaskMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_uadbed1d_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_ActiveMobTask(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_ue6a8f61_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        Object.assign(paramJO, {});
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_ConsumedMobTaskTeam(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u2ec10d0_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_deleteMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

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
     * 视图类型
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected viewType?: string | 'DEMOBMDVIEW' | 'DEMOBMDVIEW9' | 'DEMOBWFMDVIEW';

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Mob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop() protected createAction!: string;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop({default: 'LISTVIEW'}) protected controlStyle!: string | 'ICONVIEW'  | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
    *上级传递的选中项
    *@type {Array}
    *@memberof Mob
    */
     @Prop() public selectedData?:Array<any>;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof Mob
     */
    @Prop({default: true}) protected needLoadMore?: boolean;

    /**
    * 新建打开视图
    *
    * @type {Function}
    * @memberof Mob
    */
    @Prop() public newdata?: Function; 


    /**
    * 打开视图
    *
    * @type {Function}
    * @memberof Mob
    */
    @Prop() public opendata?: Function; 


    /**
    * 当前选中数组
    *
    * @type {array}
    * @memberof Mob
    */
    public  selectdata :any = [];

    /**
    * 加载显示状态
    *
    * @type {boolean}
    * @memberof Mob
    */
    public loadStatus: boolean = false;

    /**
    * 关闭行为
    *
    * @type {Function}
    * @memberof Mob
    */
    @Prop() public close?:Function;

    /**
    * 是否显示加载文字
    *
    * @type {boolean}
    * @memberof Mob
    */
    @Prop({ default: true}) public isNeedLoaddingText?:boolean;

    /**
    * 是否为临时模式
    *
    * @type {boolean}
    * @memberof Mob
    */
    @Prop({ default: false}) public isTempMode?:boolean;

    /**
    * 存放多数据选择数组（多选）
    *
    * @type {array}
    * @memberof Mob
    */
    public checkboxList:Array<string> = [];

    /**
    * 是否为分组模式
    *
    * @type {boolean}
    * @memberof Mob
    */
    public isEnableGroup:boolean =  false;

    /**
    * 代码表分组细节
    *
    * @type {Object}
    * @memberof Mob
    */
    public group_detail:any = [];

    /**
    * 分组模式
    *
    * @type {string}
    * @memberof Mob
    */
    public group_mode = 'NONE';

    /**
    * 分组数据
    *
    * @type {array}
    * @memberof Mob
    */
    public group_data?:any = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MobBase
     */
    public appStateEvent: Subscription | undefined;

    /**
    * 分组标识
    *
    * @type {array}
    * @memberof Mob
    */
    public group_field:string = '';

    /**
     * 分组方法
     *
     * @memberof Mob
     */
    public group(){
      let _this:any = this;
      if(_this.getGroupDataByCodeList && _this.getGroupDataByCodeList instanceof Function && Object.is(_this.group_mode,"CODELIST") ){
        _this.getGroupDataByCodeList(_this.items);
      }else if(_this.getGroupDataAuto && _this.getGroupDataAuto instanceof Function && Object.is(_this.group_mode,"AUTO") ){
        _this.getGroupDataAuto(_this.items);
      }
    }


    /**
    * 存放数据选择数组(单选)
    *
    * @type {object}
    * @memberof Mob
    */
    public radio:any = '';


    /**
    * 点击多选按钮触发
    *
    *
    * @memberof Mob
    */
    public change(){
        if(this.isMutli){
             let checkboxLists= this.items.filter((item,index)=>{
                  if(this.checkboxList.indexOf(item.srfkey)!=-1){
                    return true;
                  }else{
                    return false;
                  }
                })
          this.$emit('selectchange',checkboxLists);
        }else{
           let radioItem = this.items.filter((item,index)=>{return item.srfkey==this.radio});
           this.$emit('selectchange',radioItem);
        }
    }

    /**
    * 列表键值对
    *
    * @type {Map}
    * @memberof Mob
    */
    public listMap: any = new Map();

    /**
    * 分页大小
    *
    * @type {number}
    * @memberof Mob
    */
    public pageSize: number = 25;

    /**
    * 总页数
    *
    * @type {number}
    * @memberof Mob
    */
     public pageTotal: number = 0;

    /**
    * 当前页数
    *
    * @type {number}
    * @memberof Mob
    */
     public pageNumber: number = 1;

    /**
    * 判断底部数据是否全部加载完成，若为真，则 bottomMethod 不会被再次触发
    *
    * @type {number}
    * @memberof Mob
    */
    get allLoaded() {
        return ((this.pageNumber + 1) * this.pageSize) >= this.pageTotal ? true : false;
    }

    /**
    * searchKey 搜索关键字
    *
    * @type {string}
    * @memberof Mob
    */
     public searchKey:string = '';

    /**
    * 列表数组
    *
    * @param {Array<any>}
    * @memberof Mob
    */
    public items:Array<any> =[];

    /**
    * 选中数组
    *
    * @param {Array<any>}
    * @memberof Mob
    */
    public selectedArray:Array<any> = [];

    /**
    * 多选计数
    *
    * @param {number}
    * @memberof Mob
    */
    public selectednumber:number =0;

    /**
    * 搜索行为
    *
    * @param {string}
    * @memberof Mob
    */
    @Prop() public searchAction?:string;

    /**
    * 是否为选择视图
    *
    * @param {boolean} 
    * @memberof Mob
    */
    @Prop() public isSelected?:boolean;

    /**
    * 是否多选
    *
    * @type {boolean}
    * @memberof Mob
    */
    @Prop({default:false}) public isMutli?: boolean;

    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof Mob
    */
    public selectedValue:string = ""; 

    /**
    * 部件排序对象
    *
    * @param {object} 
    * @memberof Mob
    */
    public sort: any = { sort:'id,desc'};
    

    /**
     * 上拉加载更多数据
     *
     * @memberof Mob
     */
    public async loadBottom(): Promise<any> {
        if (this.allLoaded) {
          return;
        }
        this.pageNumber++;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, page: this.pageNumber, size: this.pageSize });
        let response: any = await this.load(params, 'bottom',false);
        let loadmoreBottom: any = this.$refs.loadmoreBottom;
        if (loadmoreBottom) {
            loadmoreBottom.complete();
        }
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof Mdctrl
     */
    public async remove(datas: any[]): Promise<any> {
        let arg: any = {};
        let keys: Array<string> = [];
        let infoStr: string = '';
        datas.forEach((data: any, index: number) => {
            keys.push(data.id);
            if (index < 5) {
                if (!Object.is(infoStr, '')) {
                    infoStr += '、';
                }
                infoStr += data.name;
            }
        });
        if(datas.length <= 0 ){
          this.$notice.error('请选择至少一条删除~')
          return
        }
        if (datas.length < 5) {
            infoStr = infoStr + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        } else {
            infoStr = infoStr + '...' + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        }
        return new Promise((resolve, reject) => {
            const _remove = async () => {
                let _context: any = { task: keys.join(';') }
                const response: any = await this.service.delete(this.removeAction, Object.assign({}, this.context, _context), arg, this.showBusyIndicator);
                if (response && response.status === 200 && response.data.records) {
                    this.$notice.success((this.$t('app.message.deleteSccess') as string));
                    this.load();
                    resolve(response);
                } else {
                    this.$notice.error(response.message?response.message:"删除失败");
                    reject(response);
                }
            }

            this.$dialog.confirm({
                title: (this.$t('app.message.warning') as string),
                message: this.$t('app.message.confirmToDelete') + infoStr +','+ this.$t('app.message.unrecoverable') + '？',
            }).then(() => {
                _remove();
            }).catch(() => {
            });
        });
    }

    /**
     * 刷新数据
     *
     * @returns {Promise<any>}
     * @memberof Mdctrl
     */
    public refresh(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.load().then((res) => {
                resolve(res);
            }).catch((error: any) => {
                reject(error);
            })
        })
    }


    /**
     * 长按状态改变事件
     *
     * @memberof Mob
     */
    public onCheackChange(){
        this.$emit('isChooseChange', !this.isChoose);
    }

    /**
     * 快速搜索
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof Mob
     */
    public async quickSearch(query: string): Promise<any> {
        this.searchKey = query;
        this.pageNumber = 0;
        const response = await this.load(Object.assign({ query: query }, { page: this.pageNumber, size: this.pageSize }), "init");
        return response;
    }

    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof Mob
     */
    private async load(data: any = {}, type: string = "",isloadding = this.showBusyIndicator): Promise<any> {
        if (!data.page) {
            Object.assign(data, { page: this.pageNumber });
        }
        if (!data.size) {
            Object.assign(data, { size: this.pageSize });
        }
        //部件排序
        if(this.sort){
​           Object.assign(data,this.sort);
        }
        //视图排序
        if(data.data && data.data.sort){
            Object.assign(data, { sort:data.data.sort });
        }
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(data,tempViewParams);
        const response: any = await this.service.search(this.fetchAction, this.context, data, isloadding);
        this.bottomLoadding = false;
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.error.message });
            return response;
        }

        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.pageTotal = response.data.total;
        this.$emit('pageTotalChange',this.pageTotal);
        if (type == 'top') {
            this.items = [];
            this.items = response.data.records;
        } else if (type == 'bottom') {
            for (let i = 0; i < response.data.records.length; i++) {
                this.items.push(response.data.records[i]);
            }
        } else {
            this.items = [];
            this.items = response.data.records;
        }
        this.items.forEach((item:any)=>{
            // 计算是否选中
            let index = this.selectdata.findIndex((temp:any)=>{return temp.srfkey == item.srfkey});
            if(index != -1 || Object.is(this.selectedValue,item.srfkey)){
                item.checked = true;
            }else{
                item.checked = false;
            }
            Object.assign(item,this.getActionState(item)); 
            // 计算权限   
            this.setSlidingDisabled(item);
        });
        if(this.isEnableGroup){
          this.group();
        }
        return response;
    }



    /**
     * checkbox 选中回调
     *
     * @param {*} data
     * @returns
     * @memberof Mob
     */
    public checkboxChange(data: any) {
        let { detail } = data;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.selectednumber = 0;
        this.items.forEach((item: any, index: number) => {
            if (item.value) {
                this.selectednumber++;
            }
            if (Object.is(item.id, value)) {
                if (detail.checked) {
                    this.selectdata.push(this.items[index]);
                } else {
                    this.selectdata.splice(this.selectdata.findIndex((i: any) => i.value === item.value), 1)
                }
            }
        });
        this.$emit('selectionchange', this.selectdata);
    }

    /**
     * 下拉刷新
     *
     * @returns {Promise<any>}
     * @memberof Mob
     */
    public async pullDownToRefresh(): Promise<any> {
        this.pageNumber = 0;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, pageNumber: this.pageNumber, pageSize: this.pageSize });
        let response: any = await this.load(params, 'top');
        return response;
    }

    /**
    * 点击回调事件
    *
    * @memberof Mob
    */
    public item_click(item:any){
        if(this.isChoose){
            let count = this.selectedArray.findIndex((i) => {
            return i.mobentityid == item.mobentityid;
        });
            if (count === -1) {
                this.selectedArray.push(item);
            } else {
                this.selectedArray.splice(count, 1);
            }
        } else {
            this.goPage(item)
        }
    }

    /**
    * 点击列表数据跳转
    *
    * @memberof Mob
    */
    public goPage(item: any) {
        this.$emit('rowclick',item);
    }

    /**
    * 获取多项数据
    *
    * @memberof Mob
    */
    public getDatas(): any[] {
      return this.service.handleRequestDatas(this.context,this.selectedArray);
    }

    /**
    * 获取单项数据
    *
    * @memberof Mob
    */
    public getData(): any {
        return this.selectedArray[0];
    }

    /**
    * vue生命周期created
    *
    * @memberof Mob
    */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Mob
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, "load")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "search")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "quicksearch")) {
                    this.searchKey = data;
                    this.pageNumber = 0;
                    this.load(Object.assign({ query: data }, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "refresh")) {
                    this.refresh();
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"Task")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh();
                }
            })
        }
    }

    /**
     * ion-item-sliding拖动事件
     *
     * @memberof Mob
     */
    public ionDrag(){
      this.$store.commit('setPopupStatus',false)
    }

    /**
     * 滚动条事件（计算是否到底部）
     *
     * @memberof Mob
     */
    public scroll(e:any){
        let list:any = this.$refs.mdctrl;
        if(list){
            let scrollTop = list.scrollTop;
            let clientHeight = list.clientHeight;
            let scrollHeight = list.scrollHeight;
            if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight){
                if(!this.allLoaded){
                    this.bottomLoadding = true;
                    this.loadBottom();
                }
            }
        }
    }

    /**
     * 底部加载状态
     *
     * @memberof Mob
     */
    public bottomLoadding = false;

    /**
     * vue 生命周期
     *
     * @memberof Mob
     */
    public beforeDestroy(){
      let list:any = this.$refs.mdctrl;
      if(list){
        list.removeEventListener('touchend',()=>{
          this.$store.commit('setPopupStatus',true)
        })
      }
    }

    /**
     * vue 生命周期
     *
     * @memberof Mob
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Mob
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
        window.removeEventListener('contextmenu',()=>{});
    }

    /**
     * 列表项左滑右滑触发行为
     *
     * @param {*} $event 点击鼠标事件
     * @param {*} tag 操作标识
     * @param {*} item 行数据
     * @memberof Mdctrl
     */
    public mdctrl_click($event: any, tag: any, item: any): void {
        $event.stopPropagation();
        this.selectedArray = [];
        this.selectedArray.push(item);
        if (Object.is(tag, 'u50d1ea3')) {
            this.mdctrl_u50d1ea3_click();
        }
        if (Object.is(tag, 'u78657a8')) {
            this.mdctrl_u78657a8_click();
        }
        if (Object.is(tag, 'u7e33b1f')) {
            this.mdctrl_u7e33b1f_click();
        }
        if (Object.is(tag, 'uc655bcc')) {
            this.mdctrl_uc655bcc_click();
        }
        if (Object.is(tag, 'uaa5b5c3')) {
            this.mdctrl_uaa5b5c3_click();
        }
        if (Object.is(tag, 'uc50cd90')) {
            this.mdctrl_uc50cd90_click();
        }
        if (Object.is(tag, 'ue0846ea')) {
            this.mdctrl_ue0846ea_click();
        }
        if (Object.is(tag, 'u77523c1')) {
            this.mdctrl_u77523c1_click();
        }
        if (Object.is(tag, 'u3834ce6')) {
            this.mdctrl_u3834ce6_click();
        }
        if (Object.is(tag, 'uadbed1d')) {
            this.mdctrl_uadbed1d_click();
        }
        if (Object.is(tag, 'ue6a8f61')) {
            this.mdctrl_ue6a8f61_click();
        }
        if (Object.is(tag, 'u2ec10d0')) {
            this.mdctrl_u2ec10d0_click();
        }
        this.closeSlidings(item);
    }

    /**
     * 关闭列表项左滑右滑
     * @memberof Mdctrl
     */
    public closeSlidings (item: any) {
        const ele :any= this.$refs[item.srfkey];
        if(ele[0] && this.$util.isFunction(ele[0].closeOpened)){
            ele[0].closeOpened();
        }
    }

    /**
     * 单选选中变化
     * 
     * @memberof Mdctrl
     */
    public onSimpleSelChange(item: any = {}) {
        this.$emit('selectionchange', [item]);
        this.selectedValue = item.srfkey;
        this.selectedArray = [];
        this.goPage(item);
    }


   /**
     * 是否展示多选
     *
     * @memberof Mdctrl
     */
    @Prop({default:false}) isChoose?: boolean;

    /**
     * 选中或取消事件
     *
     * @memberof Mdctrl
     */
    public checkboxSelect(item:any){
        let count = this.selectedArray.findIndex((i) => {
            return i.id == item.id;
        });
        let tempFalg = false;
        if(count == -1){
            tempFalg = true;
            this.selectedArray.push(item);
        }else{
            this.selectedArray.splice(count,1);
        }
        this.items.forEach((_item:any,index:number)=>{
            if(_item.id == item.id){
                this.items[index].checked = tempFalg;
            }
        });
        if(!item.checked){
            this.$emit("checkBoxChange",false)
        }else if(this.selectedArray.length == this.items.length){
            this.$emit("checkBoxChange",true)
        }
    }

    /**
     * 全选事件
     *
     * @memberof Mdctrl
     */
    public checkboxAll(value:any) {
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            this.items[index].checked = value;
        }
        if(value){
            this.selectedArray = [...this.items];
        }else{
            this.selectedArray = [];
        }
        this.$forceUpdate();
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MobBase
     */  
    public ActionModel:any ={
        confirmStoryChangeCz: { name: 'confirmStoryChangeCz',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_XQCHANGE_BUT', target: 'SINGLEKEY',icon:'search',isShowCaption:false,isShowIcon:true},
        TaskFavoritesMob: { name: 'TaskFavoritesMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_NFAVOR_BUT', target: 'SINGLEKEY',icon:'star-outline',isShowCaption:false,isShowIcon:true},
        TaskNFavoritesMob: { name: 'TaskNFavoritesMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_FAVOR_BUT', target: 'SINGLEKEY',icon:'star-half-outline',isShowCaption:false,isShowIcon:true},
        StartMobTeamTask: { name: 'StartMobTeamTask',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_START_BUT', target: 'SINGLEKEY',icon:'play',isShowCaption:false,isShowIcon:true},
        StartTaskMob: { name: 'StartTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_START_BUT', target: 'SINGLEKEY',icon:'play',},
        AssignTaskMob: { name: 'AssignTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_ASSIGN_BUT', target: 'SINGLEKEY',icon:'people',isShowCaption:false,isShowIcon:true},
        finishTask1: { name: 'finishTask1',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_COMPLETE_BUT', target: 'SINGLEKEY',icon:'checkmark-circle-outline',isShowCaption:false,isShowIcon:true},
        DoneTaskMob: { name: 'DoneTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_COMPLETE_BUT', target: 'SINGLEKEY',icon:'checkmark-circle-outline',},
        PauseMobTeamTask: { name: 'PauseMobTeamTask',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_PAUSE_BUT', target: 'SINGLEKEY',icon:'pause',isShowCaption:false,isShowIcon:true},
        PauseTaskMob: { name: 'PauseTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_PAUSE_BUT', target: 'SINGLEKEY',icon:'pause',},
        CancelTaskMob: { name: 'CancelTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CANCEL_BUT', target: 'SINGLEKEY',icon:'power',isShowCaption:false,isShowIcon:true},
        CloseTaskMob: { name: 'CloseTaskMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CLOSE_BUT', target: 'SINGLEKEY',icon:'backspace',isShowCaption:false,isShowIcon:true},
        ActiveMobTask: { name: 'ActiveMobTask',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_ACTIVATION_BUT', target: 'SINGLEKEY',icon:'magic',isShowCaption:false,isShowIcon:true},
        ConsumedMobTaskTeam: { name: 'ConsumedMobTaskTeam',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CONSUM_BUT', target: 'SINGLEKEY',icon:'clock-o',isShowCaption:false,isShowIcon:true},
        WorkHoursMob: { name: 'WorkHoursMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_CONSUM_BUT', target: 'SINGLEKEY',icon:'clock-o',},
        deleteMob: { name: 'deleteMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__TASK_DELETE_BUT', target: 'SINGLEKEY',icon:'remove',isShowCaption:false,isShowIcon:true}
    };

    

    /**
     * 获取界面行为权限状态
     *
     * @memberof MobBase
     */
    public getActionState(data:any){
        //let targetData:any = this.transformData(data);
        let tempActionModel:any = JSON.parse(JSON.stringify(this.ActionModel));
        this.$viewTool.calcActionItemAuthState(data,tempActionModel,this.deUIService);
        return tempActionModel;
    }

    /**
    * 判断列表项左滑右滑禁用状态
    *
    * @memberof MobBase
    */
    public setSlidingDisabled(item:any){
        item.sliding_disabled = true;
        Object.keys(this.ActionModel).forEach((key,index) => {
           if(item[key].visabled && item.sliding_disabled ){
             item.sliding_disabled = false;
           }
        })

    }

    /**
     * 长按定时器
     *
     * @memberof MobBase
     */
    public timeOutEvent :number = 0;

    /**
     * 开始长按
     *
     * @memberof MobBase
     */
    public gotouchstart(){
        let _this = this;
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
        this.timeOutEvent = setTimeout(() => {
            if(_this.timeOutEvent > 0){
                this.onCheackChange();
            }
            console.log(this.timeOutEvent);
            this.timeOutEvent = 0
        }, 2000); //这里设置定时
    }

    /**
     * touchmove
     *  如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
     *
     * @memberof MobBase
     */
    public gotouchmove() {
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
    }

    /**
     * touchend
     * 结束长按
     *
     * @memberof MobBase
     */
    public gotouchend() {
        this.timeOutEvent = 0;
    }

}
</script>

<style lang='less'>
@import './mob-mobmdctrl.less';
</style>