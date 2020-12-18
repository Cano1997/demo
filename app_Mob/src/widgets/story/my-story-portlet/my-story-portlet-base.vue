<template>
    <ion-row>
        <ion-list class='app-mob-portlet story-dashboard_sysportlet5 '>
            <ion-list-header v-if="editTitle"  class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else>{{$t('app.portlets.mystory.caption')}}</span></span>
                <div v-if="actionBarModelData && actionBarModelData.length> 0" class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" :style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
            <story-ass-mob-mdview9 :_context="JSON.stringify(context)" :isChildView="true" :isPortalView="true" :_viewparams="JSON.stringify(viewparams)" viewDefaultUsage="includedView" ></story-ass-mob-mdview9>
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
import StoryService from '@/app-core/service/story/story-service';
import MyStoryService from '@/app-core/ctrl-service/story/my-story-portlet-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import StoryUIService from '@/ui-service/story/story-ui-action';



@Component({
    components: { }
})
export default class MyStoryBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyStory
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyStory
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyStory
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyStory
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyStory
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyStory
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyStory
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyStory
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyStoryBase
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
     * @type {MyStoryService}
     * @memberof MyStory
     */
    protected service: MyStoryService = new MyStoryService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MyStory
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof MyStoryBase
     */  
    public deUIService:StoryUIService = new StoryUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof Dashboard_sysportlet5Base
     */
    protected async dashboard_sysportlet5_uc2eba09_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

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
        const curUIService: any = await this.globaluiservice.getService('story_ui_action');
        if (curUIService) {
            curUIService.Story_MyAssMore(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyStory
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyStory
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
     * @memberof MyStory
     */
    @Prop() protected customizeTitle?: string;

    
    /**
     * 选择器状态
     *
     * @type {boolean}
     * @memberof MyStory
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
     * @memberof MyStory
     */
    protected actionBarModelData: any[] = [
        {
            viewlogicname: "dashboard_sysportlet5_uc2eba09_click",
            name: "更多",
        }
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof MyStory
     */
    protected handleItemClick($event: any) {
        if (Object.is($event, 'dashboard_sysportlet5_uc2eba09_click')) {
            this.dashboard_sysportlet5_uc2eba09_click(null);
        }
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyStory
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyStory
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MyStory
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyStory
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
     * @memberof MyStory
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyStory
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof MyStory
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof MyStory
     */
    public builtinItemS = [{name:'重命名',viewlogicname:'rename'},{name:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof MyStory
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
     * @memberof MyStory
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
     * @memberof MyStory
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
     * @memberof MyStory
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MyStory
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return (this.$t('app.portlets.mystory.caption') as string)
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MyStory
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof MyStory
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof MyStory
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
@import './my-story-portlet.less';
</style>