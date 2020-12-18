<template>
    <div class='app-tab-view-panel ibzmyterritory-tabviewpanel ' v-if='isActivied' >
        <ibz-daily-daily-mob-mdview 
            :_context="JSON.stringify(_context)" 
            :_viewparams="JSON.stringify(_viewparams)" 
            :isChildView="true"
            :panelNavParam="panelNavParam"
            :panelNavContext="panelNavContext"
            viewDefaultUsage="includedView" >
        </ibz-daily-daily-mob-mdview>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import DailyMobTabExpViewtabviewpanelService from '@/app-core/ctrl-service/ibz-my-territory/daily-mob-tab-exp-viewtabviewpanel-tabviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';



@Component({
    components: { }
})
export default class DailyMobTabExpViewtabviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  DailyMobTabExpViewtabviewpanelBase
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
     * @type {DailyMobTabExpViewtabviewpanelService}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected service: DailyMobTabExpViewtabviewpanelService = new DailyMobTabExpViewtabviewpanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof DailyMobTabExpViewtabviewpanelBase
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public panelNavContext= { } ;


    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public _viewparams: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected isActivied: boolean = false;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DailyMobTabExpViewtabviewpanel
     */    
    protected afterCreated(){
        this.parsePanelParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (!this.isActivied) {
                    this.$nextTick(() => {
                        this.isActivied = true;
                    });
                }
            });
        }
    }

    /**
     * 解析面板导航参数
     *
     *  @memberof DailyMobTabExpViewtabviewpanel
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }


    /**
     * vue 生命周期
     *
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DailyMobTabExpViewtabviewpanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './daily-mob-tab-exp-viewtabviewpanel-tabviewpanel.less';
</style>