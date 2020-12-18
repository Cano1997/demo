<template>
    <div class='pickupviewpanel case-pickupviewpanel'>
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
import CaseService from '@/app-core/service/case/case-service';
import Usr2MobMPickupViewpickupviewpanelService from '@/app-core/ctrl-service/case/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import CaseUIService from '@/ui-service/case/case-ui-action';



@Component({
    components: { }
})
export default class Usr2MobMPickupViewpickupviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected getControlType(): string {
        return 'PICKUPVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  Usr2MobMPickupViewpickupviewpanelBase
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
     * @type {Usr2MobMPickupViewpickupviewpanelService}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected service: Usr2MobMPickupViewpickupviewpanelService = new Usr2MobMPickupViewpickupviewpanelService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected appEntityService: CaseService = new CaseService();

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof Usr2MobMPickupViewpickupviewpanelBase
     */  
    public deUIService:CaseUIService = new CaseUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public panelNavContext= { } ;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public _viewparams: any;
    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    public getData(): any {
        return {};
    }

    /**
     * 视图名称
     *
     * @type {*}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected view: any = {
        viewname: 'case-usr2-mob-pickup-mdview',
        data: {},
    }

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop({default: true}) protected isShowButtons!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    @Prop() protected isSingleSelect?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected inited: boolean = false;

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected onViewDatasChange($event: any): void {
        if ($event.length > 0) {
          $event.forEach((item:any,index:any) => {
              let srfmajortext = item['title'];
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
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图加载完成
     *
     * @param {*} $event
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Usr2MobMPickupViewpickupviewpanel
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
     *  @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }

    /**
     * vue 生命周期
     *
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Usr2MobMPickupViewpickupviewpanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 快速搜索
     *
     * @memberof Usr2MobMPickupViewpickupviewpanel
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
@import './usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel.less';
</style>