<template>
    <span>
        <span v-show="activiedTabViewPanel == 'tabviewpanel'">
                        <view_tabviewpanel
                :viewState="viewState"
                viewName="IbzDailyMyDailyMobTabExpView"  
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
                viewName="IbzDailyMyDailyMobTabExpView"  
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
                viewName="IbzDailyMyDailyMobTabExpView"  
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
import IbzDailyService from '@/app-core/service/ibz-daily/ibz-daily-service';
import MyDailyMobTabExpViewtabexppanelService from '@/app-core/ctrl-service/ibz-daily/my-daily-mob-tab-exp-viewtabexppanel-tabexppanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzDailyUIService from '@/ui-service/ibz-daily/ibz-daily-ui-action';



@Component({
    components: { }
})
export default class MyDailyMobTabExpViewtabexppanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected getControlType(): string {
        return 'TABEXPPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyDailyMobTabExpViewtabexppanelBase
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
     * @type {MyDailyMobTabExpViewtabexppanelService}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected service: MyDailyMobTabExpViewtabexppanelService = new MyDailyMobTabExpViewtabexppanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected appEntityService: IbzDailyService = new IbzDailyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzDailyUIService}
     * @memberof MyDailyMobTabExpViewtabexppanelBase
     */  
    public deUIService:IbzDailyUIService = new IbzDailyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyDailyMobTabExpViewtabexppanel
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
     * @memberof IbzDailyMyDailyMobTabExpView
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
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected action:any = '';

    /**
     * 被激活的分页面板
     *
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop({ default: 'tabviewpanel' }) protected activiedTabViewPanel?: string;     

    /**
     * 是否开启点击重新渲染
     *
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    @Prop({ default: true }) public isEnableReRender?:boolean;    

    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyDailyMobTabExpViewtabexppanel
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
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    public mounted() {
        this.afterMounted();
    }
    
    /**
     * 执行mounted后的逻辑
     *
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    public afterMounted(){
        this.loadCounterData();
    }

    /**
     * vue 生命周期
     *
     * @memberof MyDailyMobTabExpViewtabexppanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyDailyMobTabExpViewtabexppanel
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
     * @memberof MyDailyMobTabExpViewtabexppanel
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
@import './my-daily-mob-tab-exp-viewtabexppanel-tabexppanel.less';
</style>