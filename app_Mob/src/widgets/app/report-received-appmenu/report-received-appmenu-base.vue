<template>
    <!-- 预置菜单样式：图标视图 BEGIN -->
    <app-mob-menu-ionic-view 
        class="" 
        menuName="reportreceived"  
        counterName=""  
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)"  
        v-if="controlStyle == 'ICONVIEW'">
    </app-mob-menu-ionic-view>
    <!-- 预置菜单样式：图标视图 END -->
    <!-- 预置菜单样式：列表视图 BEGIN -->
    <app-mob-menu-list-view 
        class="" 
        menuName="reportreceived" 
        counterName="" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)" 
        v-else-if="controlStyle == 'LISTVIEW'" >
    </app-mob-menu-list-view>
    <!-- 预置菜单样式：列表视图 END -->
    <!-- 预置菜单样式：图片滑动视图 BEGIN -->
    <app-mob-menu-swiper-view 
        class="" 
        menuName="reportreceived" 
        counterName="" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)" 
        v-else-if="controlStyle == 'SWIPERVIEW'">
    </app-mob-menu-swiper-view>
    <!-- 预置菜单样式：图片滑动视图 END -->
    <!-- 侧滑菜单样式：默认样式 BEGIN -->
    <app-mob-menu-sideslip-view 
        class="" 
        menuName="reportreceived" 
        counterName="" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        v-model="defaultActive"
        @select="select($event)" 
        v-else-if="mode">
    </app-mob-menu-sideslip-view>
    <!-- 侧滑菜单样式：默认样式 END -->
    <!-- 预置菜单样式：默认样式 BEGIN -->
    <app-mob-menu-default-view 
        class="" 
        menuName="reportreceived" 
        counterName="" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        v-model="defaultActive"
        @select="select($event)" 
        v-else>
    </app-mob-menu-default-view>
    <!-- 预置菜单样式：默认样式 BEGIN -->
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ReportReceivedService from '@/app-core/ctrl-service/app/report-received-appmenu-service';


import ReportReceivedModel from '@/app-core/ctrl-model/app/report-received-appmenu-model';
import { Environment } from '@/environments/environment';


@Component({
    components: { }
})
export default class ReportReceivedBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ReportReceived
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ReportReceived
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ReportReceived
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ReportReceived
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ReportReceived
     */
    protected getControlType(): string {
        return 'APPMENU'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ReportReceived
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();



    /**
     * 建构部件服务对象
     *
     * @type {ReportReceivedService}
     * @memberof ReportReceived
     */
    protected service: ReportReceivedService = new ReportReceivedService({$store:this.$store});
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ReportReceived
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 部件样式
     *
     * @protected
     * @type {(string | 'ICONVIEW' | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4')}   默认空字符串 | 图标视图 | 列表视图 | 图片滑动视图 | 列表视图（无刷新） | 列表视图（无滑动） | 列表视图（无背景）
     * @memberof ReportReceived
     */
    @Prop({ default: '' }) protected controlStyle!: string | 'ICONVIEW' | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ReportReceived
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ReportReceived
     */
    public getData(): any {
        return null;
    }

    /**
     * 菜单模型
     *
     * @type {ReportReceivedMode}
     * @memberof ReportReceived
     */
    public menuMode: ReportReceivedModel = new ReportReceivedModel();

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof ReportReceived
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 菜单数据
     *
     * @private
     * @type {any[]}
     * @memberof ReportReceived
     */
    @Provide()
    private menus: any[] = [];

    /**
     * 菜单收缩改变
     *
     * @type {boolean}
     * @memberof ReportReceived
     */
    @Model() protected collapsechange?: boolean;

    /**
     * 监听菜单收缩
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ReportReceived
     */
    @Watch('collapsechange')
    onCollapsechangeChange(newVal: any, oldVal: any) {
        if (newVal !== this.isCollapse) {
            this.isCollapse = !this.isCollapse;
        }
    }

    /**
     * 当前模式，菜单在左侧还是在底部，true为左侧
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop() mode: any;

    /**
     * 当前菜单是否在默认视图上
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop({ default: false }) isDefaultPage?: boolean;

    /**
     * 默认打开视图
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop() defPSAppView: any;

    /**
     * 默认激活的index
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Provide() defaultActive: any = null;

    /**
     * 当前选中主题
     *
     * @type {*}
     * @memberof ReportReceived
     */
    @Prop() selectTheme: any;

    /**
     * 默认打开的index数组
     *
     * @type {any[]}
     * @memberof ReportReceived
     */
    @Provide() protected defaultOpeneds: any[] = [];

    /**
     * 是否展开
     *
     * @type {boolean}
     * @memberof ReportReceived
     */
    @Provide() protected isCollapse: boolean = false;

    /**
     * 计数器数据
     *
     * @type {*}
     * @memberof ReportReceived
     */
    protected counterdata: any = {};

    /**
     * vue  生命周期
     *
     * @memberof ReportReceived
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ReportReceived
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.load(data);
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ReportReceived
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ReportReceived
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 获取菜单项数据
     *
     * @private
     * @param {any[]} items
     * @param {string} name
     * @returns
     * @memberof ReportReceived
     */
    private compute(items: any[], name: string) {
        const item: any = {};
        items.some((_item: any) => {
            if (name && Object.is(_item.name, name)) {
                Object.assign(item, _item);
                this.setHideSideBar(_item);
                return true;
            }
            if (_item.items && Array.isArray(_item.items)) {
                const subItem = this.compute(_item.items, name);
                if (Object.keys(subItem).length > 0) {
                    Object.assign(item, subItem);
                    return true;
                }
            }
            return false;
        });
        return item;
    }

    /**
     * 设置是否隐藏菜单栏
     *
     * @private
     * @param {*} item
     * @memberof ReportReceived
     */
    private setHideSideBar(item: any): void {
    }

    /**
     * 菜单项选中处理
     *
     * @param {*} index
     * @param {any[]} indexs
     * @returns
     * @memberof ReportReceived
     */
    protected select(index: any, indexs: any[]) {
        let item = this.compute(this.menus, index);
        if (Object.keys(item).length === 0) {
            return;
        }
        this.click(item);
    }

    /**
     * 菜单点击
     *
     * @private
     * @param {*} item 菜单数据
     * @memberof ReportReceived
     */
    private click(item: any) {
        if (item) {
            switch (item.appfunctag) {
                case 'DailyReportReceived': 
                    this.clickDailyReportReceived(item);
                    return;
                case 'AppFunc10': 
                    this.clickAppFunc10(item);
                    return;
                case 'MyReceivedMonthly': 
                    this.clickMyReceivedMonthly(item);
                    return;
                default:
                    console.warn('未指定应用功能');
            }
        }
    }

    
    /**
     * 日报（我收到的）
     *
     * @param {*} [item={}]
     * @memberof ReportReceived
     */
    protected clickDailyReportReceived(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzdailies', parameterName: 'ibzdaily' },
            { pathName: 'reportreceivedmobmdview', parameterName: 'reportreceivedmobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 周报(我收到的)
     *
     * @param {*} [item={}]
     * @memberof ReportReceived
     */
    protected clickAppFunc10(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzweeklies', parameterName: 'ibzweekly' },
            { pathName: 'mobmdview', parameterName: 'mobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 月报（我收到的）
     *
     * @param {*} [item={}]
     * @memberof ReportReceived
     */
    protected clickMyReceivedMonthly(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmonthlies', parameterName: 'ibzmonthly' },
            { pathName: 'myreceivedmobmdview', parameterName: 'myreceivedmobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }

    /**
     * 数据加载
     *
     * @param {*} data
     * @memberof ReportReceived
     */
    protected load(data: any) {
        this.dataProcess(this.menuMode.getAppMenuItems());
        this.menus = this.menuMode.getAppMenuItems();
        if(Environment.enablePermissionValid){
            this.computedEffectiveMenus(this.menus);
        }
    }

    /**
     * 计算有效菜单项
     *
     * @param {*} data
     * @memberof Main
     */
    public computedEffectiveMenus(inputMenus:Array<any>){
        inputMenus.forEach((_item:any) =>{
            if(!this.$store.getters['authresource/getAuthMenu'](_item)){
                _item.hidden = true;
                if (_item.items && _item.items.length > 0) {
                    this.computedEffectiveMenus(_item.items);
                }
            }
        })
    }

    /**
     * 数据处理
     *
     * @private
     * @param {any[]} items
     * @memberof ReportReceived
     */
    private dataProcess(items: any[]): void {
        items.forEach((_item: any) => {
            if (_item.expanded) {
                this.defaultOpeneds.push(_item.id);
            }
            if (_item.items && _item.items.length > 0) {
                this.dataProcess(_item.items)
            }
        });
    }

    /**
     * 提示框主题样式
     *
     * @readonly
     * @type {string}
     * @memberof ReportReceived
     */
    get popperClass(): string {
        return 'app-popper-menu ' + this.selectTheme;
    }
    
}
</script>

<style lang='less'>
@import './report-received-appmenu.less';
</style>