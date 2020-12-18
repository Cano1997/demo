<template>
    <div class='pickupviewpanel sysemployee-pickupviewpanel'>
        <component 
            v-if="inited && view.viewname && !Object.is(view.viewname, '')" 
            :is="view.viewname" 
            :_context="JSON.stringify(_context)"
            :_viewparams="JSON.stringify(_viewparams)"
            viewDefaultUsage="includedView"
            :isSingleSelect="isSingleSelect"
            :isShowButtons="isShowButtons"
            @viewdataschange="onViewDatasChange"
            @viewdatasactivated="viewDatasActivated"
            @viewload="onViewLoad"
            ref="pickupview"
            :key="this.$util.createUUID()">
        </component>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysEmployeeService from '@/app-core/service/sys-employee/sys-employee-service';
import Usr2MobPickupViewpickupviewpanelService from '@/app-core/ctrl-service/sys-employee/usr2-mob-pickup-viewpickupviewpanel-pickupviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';



@Component({
    components: {
    }
})
export default class Usr2MobPickupViewpickupviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected getControlType(): string {
        return 'PICKUPVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  Usr2MobPickupViewpickupviewpanelBase
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
     * @type {Usr2MobPickupViewpickupviewpanelService}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected service: Usr2MobPickupViewpickupviewpanelService = new Usr2MobPickupViewpickupviewpanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof Usr2MobPickupViewpickupviewpanelBase
     */  
    public deUIService:SysEmployeeUIService = new SysEmployeeUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public panelNavContext= { } ;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public _viewparams: any;
    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public getData(): any {
        return {};
    }

    /**
     * 视图名称
     *
     * @type {*}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected view: any = {
        viewname: 'sys-employee-mob-pickup-tree-view',
        data: {},
    }

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop({default: true}) protected isShowButtons!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    @Prop() protected isSingleSelect?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected inited: boolean = false;

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected onViewDatasChange($event: any): void {
        if ($event.length > 0) {
          $event.forEach((item:any,index:any) => {
              let srfmajortext = item['personname'];
              if(srfmajortext){
                Object.assign($event[index],{srfmajortext: srfmajortext});
              }
          });
        }
        this.$emit('selectionchange', $event);
    }

    /**
     * 视图数据被激活
     *
     * @param {*} $event
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图加载完成
     *
     * @param {*} $event
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Usr2MobPickupViewpickupviewpanel
     */    
    protected afterCreated(){
        this.parsePanelParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    Object.assign(this.viewparams, data);
                    this.inited = true;
                }
            });
        }
    }

    /**
     * 解析面板导航参数
     *
     *  @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }

    /**
     * vue 生命周期
     *
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 快速搜索
     *
     * @memberof Usr2MobPickupViewpickupviewpanel
     */
    public async quickSearch(query: string): Promise<any> {
        let pickupview:any = this.$refs.pickupview;
        if(pickupview){
            pickupview.quickSearch(query);
        }
    }

}
</script>

<style lang='less'>
@import './usr2-mob-pickup-viewpickupviewpanel-pickupviewpanel.less';
</style>