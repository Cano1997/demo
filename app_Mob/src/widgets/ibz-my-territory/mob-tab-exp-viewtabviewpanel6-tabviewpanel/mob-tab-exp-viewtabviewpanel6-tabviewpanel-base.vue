<template>
    <div class='app-tab-view-panel ibzmyterritory-tabviewpanel6 ' v-if='isActivied' >
        <ibz-my-territory-report-mob-tab-exp-view 
            :_context="JSON.stringify(_context)" 
            :_viewparams="JSON.stringify(_viewparams)" 
            :isChildView="true"
            :panelNavParam="panelNavParam"
            :panelNavContext="panelNavContext"
            viewDefaultUsage="includedView" >
        </ibz-my-territory-report-mob-tab-exp-view>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MobTabExpViewtabviewpanel6Service from '@/app-core/ctrl-service/ibz-my-territory/mob-tab-exp-viewtabviewpanel6-tabviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';



@Component({
    components: { }
})
export default class MobTabExpViewtabviewpanel6Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel6
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel6
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobTabExpViewtabviewpanel6
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobTabExpViewtabviewpanel6Base
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
     * @type {MobTabExpViewtabviewpanel6Service}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected service: MobTabExpViewtabviewpanel6Service = new MobTabExpViewtabviewpanel6Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MobTabExpViewtabviewpanel6Base
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public panelNavContext= { } ;


    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public _viewparams: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobTabExpViewtabviewpanel6
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected isActivied: boolean = false;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobTabExpViewtabviewpanel6
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
     *  @memberof MobTabExpViewtabviewpanel6
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }


    /**
     * vue 生命周期
     *
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobTabExpViewtabviewpanel6
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './mob-tab-exp-viewtabviewpanel6-tabviewpanel.less';
</style>