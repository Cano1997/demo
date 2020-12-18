<template>
    <div class='pickupviewpanel sysemployee-pickupviewpanel'>
        <component 
            v-if="inited && view.viewname && !Object.is(view.viewname, '')" 
            ref="pickupview"
            viewDefaultUsage="includedView"
            :is="view.viewname" 
            :isChildView="true"
            :_context="JSON.stringify(_context)"
            :_viewparams="JSON.stringify(_viewparams)"
            :isSingleSelect="isSingleSelect"
            :isShowButtons="isShowButtons"
            :panelViewState="viewState"
            :key="this.$util.createUUID()"
            @viewdataschange="onViewDatasChange"
            @viewdatasactivated="viewDatasActivated"
            @viewload="onViewLoad">
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
import UserTreeMobMPickupViewpickupviewpanelService from '@/app-core/ctrl-service/sys-employee/user-tree-mob-mpickup-viewpickupviewpanel-pickupviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';



@Component({
    components: { }
})
export default class UserTreeMobMPickupViewpickupviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected getControlType(): string {
        return 'PICKUPVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  UserTreeMobMPickupViewpickupviewpanelBase
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
     * @type {UserTreeMobMPickupViewpickupviewpanelService}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected service: UserTreeMobMPickupViewpickupviewpanelService = new UserTreeMobMPickupViewpickupviewpanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof UserTreeMobMPickupViewpickupviewpanelBase
     */  
    public deUIService:SysEmployeeUIService = new SysEmployeeUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public panelNavContext= { } ;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public _viewparams: any;
    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    public getData(): any {
        return {};
    }

    /**
     * 视图名称
     *
     * @type {*}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected view: any = {
        viewname: 'sys-employee-mpk-mob-pickup-tree-view',
        data: {},
    }

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop({default: true}) protected isShowButtons!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    @Prop() protected isSingleSelect?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected inited: boolean = false;

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof UserTreeMobMPickupViewpickupviewpanel
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
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图加载完成
     *
     * @param {*} $event
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof UserTreeMobMPickupViewpickupviewpanel
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
     *  @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }

    /**
     * vue 生命周期
     *
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof UserTreeMobMPickupViewpickupviewpanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 快速搜索
     *
     * @memberof UserTreeMobMPickupViewpickupviewpanel
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
@import './user-tree-mob-mpickup-viewpickupviewpanel-pickupviewpanel.less';
</style>