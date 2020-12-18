<template>
    <span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel'">
                        <view_tabviewpanel
                :viewState="viewState"
                viewName="IbzWeeklyUsr2MobTabExpViewMyReceived"  
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel"  
                ref='tabviewpanel' 
                @closeview="closeView($event)">
            </view_tabviewpanel>
        </span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel2'">
                        <view_tabviewpanel2
                :viewState="viewState"
                viewName="IbzWeeklyUsr2MobTabExpViewMyReceived"  
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel2"  
                ref='tabviewpanel2' 
                @closeview="closeView($event)">
            </view_tabviewpanel2>
        </span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel3'">
                        <view_tabviewpanel3
                :viewState="viewState"
                viewName="IbzWeeklyUsr2MobTabExpViewMyReceived"  
                :viewparams="viewparams" 
                :context="context" 
                name="tabviewpanel3"  
                ref='tabviewpanel3' 
                @closeview="closeView($event)">
            </view_tabviewpanel3>
        </span>
    </span>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzWeeklyService from '@/app-core/service/ibz-weekly/ibz-weekly-service';
import Usr2MobTabExpViewMyReceivedtabexppanelService from '@/app-core/ctrl-service/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabexppanel-tabexppanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzWeeklyUIService from '@/ui-service/ibz-weekly/ibz-weekly-ui-action';



@Component({
    components: { }
})
export default class Usr2MobTabExpViewMyReceivedtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  Usr2MobTabExpViewMyReceivedtabexppanelBase
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
     * @type {Usr2MobTabExpViewMyReceivedtabexppanelService}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected service: Usr2MobTabExpViewMyReceivedtabexppanelService = new Usr2MobTabExpViewMyReceivedtabexppanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzWeeklyService}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected appEntityService: IbzWeeklyService = new IbzWeeklyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzWeeklyUIService}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanelBase
     */  
    public deUIService:IbzWeeklyUIService = new IbzWeeklyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 加载计数器数据
     *
     * @param {any[]} args
     * @memberof ProdMobTabExpViewtabexppanel
     */
    public async loadCounterData() {
       this.$emit("counterInit",this.counterServiceArray[0]);
    }

    /**
     * 销毁计数器服务
     *
     * @memberof IbzWeeklyUsr2MobTabExpViewMyReceived
     */   
    public counterserviceDestroy(){
        this.counterServiceArray.forEach((item:any)=>{
            item.destroyCounter();
        });
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop({ default: 'tabviewpanel' }) protected activiedTabViewPanel?: string;     

    /**
     * 是否开启点击重新渲染
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    @Prop({ default: true }) public isEnableReRender?:boolean;    

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.action = action;
                if (data.activeItem) {
                    this.tabPanelClick(data.activeItem);
                } else {
                    this.$nextTick(() => {
                     let panel:any = this.activiedTabViewPanel
                     if(panel){
                     this.viewState.next({ tag: panel, action: this.action, data: {}});
                    }
                    });
                }
            });
        }
    }    

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    public mounted() {
        this.afterMounted();
    }
    
    /**
     * 执行mounted后的逻辑
     *
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    public afterMounted(){
        this.loadCounterData();
    }

    /**
     * vue 生命周期
     *
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected afterDestroy() {
        this.counterserviceDestroy();
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 分页面板选中
     *
     * @param {*} $event
     * @returns
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanel
     */
    protected tabPanelClick($event: any) {
        if (!$event) {
            return;
        }
        if (!this.viewState) {
            return;
        }
        this.$emit("changepanel",$event);
        this.$nextTick(() => {
            let panel:any = this.activiedTabViewPanel
            if(panel){
              this.viewState.next({ tag: panel, action: this.action, data: {}});
            }
            if (this.isEnableReRender) {         
              if (panel) {
                let panelarr:any = Object.keys(this.$refs);
                panelarr.splice(panelarr.findIndex((item:any) => item === panel), 1);
                panelarr.forEach((item:any,index:number)=>{
                  let tabviewpanel:any = this.$refs[item];
                  if (tabviewpanel.isActivied) {
                    tabviewpanel.isActivied = false;
                  }
                })
              }
            }
        });
    }



}
</script>

<style lang='less'>
@import './usr2-mob-tab-exp-view-my-receivedtabexppanel-tabexppanel.less';
</style>