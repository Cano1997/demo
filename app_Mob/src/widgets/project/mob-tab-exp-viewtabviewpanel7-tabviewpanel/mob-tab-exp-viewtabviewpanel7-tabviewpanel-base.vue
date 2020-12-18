<template>
    <div class='app-tab-view-panel project-tabviewpanel7 ' v-if='isActivied' >
        <doc-lib-project-doc-lib-mob-tree-view 
            :_context="JSON.stringify(_context)" 
            :_viewparams="JSON.stringify(_viewparams)" 
            :isChildView="true"
            :panelNavParam="panelNavParam"
            :panelNavContext="panelNavContext"
            viewDefaultUsage="includedView" >
        </doc-lib-project-doc-lib-mob-tree-view>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ProjectService from '@/app-core/service/project/project-service';
import MobTabExpViewtabviewpanel7Service from '@/app-core/ctrl-service/project/mob-tab-exp-viewtabviewpanel7-tabviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import ProjectUIService from '@/ui-service/project/project-ui-action';



@Component({
    components: { }
})
export default class MobTabExpViewtabviewpanel7Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel7
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel7
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobTabExpViewtabviewpanel7
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobTabExpViewtabviewpanel7Base
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
     * @type {MobTabExpViewtabviewpanel7Service}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected service: MobTabExpViewtabviewpanel7Service = new MobTabExpViewtabviewpanel7Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected appEntityService: ProjectService = new ProjectService();

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof MobTabExpViewtabviewpanel7Base
     */  
    public deUIService:ProjectUIService = new ProjectUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 面板导航参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public panelNavParam= { } ;

    /**
     * 面板导航上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public panelNavContext= { } ;


    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public _context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public _viewparams: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobTabExpViewtabviewpanel7
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected isActivied: boolean = false;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobTabExpViewtabviewpanel7
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
     *  @memberof MobTabExpViewtabviewpanel7
     */
    protected parsePanelParam(){
        const { context: context, param: param } = this.$viewTool.formatNavigateParam( this.panelNavContext, this.panelNavParam, this.context, this.viewparams, {});
        this._context = { ...context };
        this._viewparams = { ...param };
    }


    /**
     * vue 生命周期
     *
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobTabExpViewtabviewpanel7
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './mob-tab-exp-viewtabviewpanel7-tabviewpanel.less';
</style>