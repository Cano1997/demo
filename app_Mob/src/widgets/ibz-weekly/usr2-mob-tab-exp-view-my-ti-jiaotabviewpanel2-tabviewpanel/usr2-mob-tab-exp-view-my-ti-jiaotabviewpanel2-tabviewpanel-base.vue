<template>
    <div class='app-tab-view-panel ibzweekly-tabviewpanel2 ' v-if='isActivied' >
        <task-my-complete-task-mob-mdview-weekly 
            :_context="JSON.stringify(_context)" 
            :_viewparams="JSON.stringify(_viewparams)" 
            :isChildView="true"
            :panelNavParam="panelNavParam"
            :panelNavContext="panelNavContext"
            viewDefaultUsage="includedView" >
        </task-my-complete-task-mob-mdview-weekly>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzWeeklyService from '@/app-core/service/ibz-weekly/ibz-weekly-service';
import Usr2MobTabExpViewMyTiJiaotabviewpanel2Service from '@/app-core/ctrl-service/ibz-weekly/usr2-mob-tab-exp-view-my-ti-jiaotabviewpanel2-tabviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzWeeklyUIService from '@/ui-service/ibz-weekly/ibz-weekly-ui-action';



@Component({
    components: { }
})
export default class Usr2MobTabExpViewMyTiJiaotabviewpanel2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  Usr2MobTabExpViewMyTiJiaotabviewpanel2Base
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
     * @type {Usr2MobTabExpViewMyTiJiaotabviewpanel2Service}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected service: Usr2MobTabExpViewMyTiJiaotabviewpanel2Service = new Usr2MobTabExpViewMyTiJiaotabviewpanel2Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzWeeklyService}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected appEntityService: IbzWeeklyService = new IbzWeeklyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzWeeklyUIService}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2Base
     */  
    public deUIService:IbzWeeklyUIService = new IbzWeeklyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public panelNavContext= { } ;


    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public _viewparams: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected isActivied: boolean = false;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
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
     *  @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }


    /**
     * vue 生命周期
     *
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './usr2-mob-tab-exp-view-my-ti-jiaotabviewpanel2-tabviewpanel.less';
</style>