<template>
    <!-- 预置菜单样式：图标视图 BEGIN -->
    <app-mob-menu-ionic-view 
        class="" 
        menuName="appindexview"  
        counterName="mobmenucounter"  
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)"  
        v-if="controlStyle == 'ICONVIEW'">
    </app-mob-menu-ionic-view>
    <!-- 预置菜单样式：图标视图 END -->
    <!-- 预置菜单样式：列表视图 BEGIN -->
    <app-mob-menu-list-view 
        class="" 
        menuName="appindexview" 
        counterName="mobmenucounter" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)" 
        v-else-if="controlStyle == 'LISTVIEW'" >
    </app-mob-menu-list-view>
    <!-- 预置菜单样式：列表视图 END -->
    <!-- 预置菜单样式：图片滑动视图 BEGIN -->
    <app-mob-menu-swiper-view 
        class="" 
        menuName="appindexview" 
        counterName="mobmenucounter" 
        :items="menus" 
        :menuModels="menuMode.getAppFuncs()" 
        @select="select($event)" 
        v-else-if="controlStyle == 'SWIPERVIEW'">
    </app-mob-menu-swiper-view>
    <!-- 预置菜单样式：图片滑动视图 END -->
    <!-- 侧滑菜单样式：默认样式 BEGIN -->
    <app-mob-menu-sideslip-view 
        class="" 
        menuName="appindexview" 
        counterName="mobmenucounter" 
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
        menuName="appindexview" 
        counterName="mobmenucounter" 
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
import AppIndexViewService from '@/app-core/ctrl-service/app/app-index-view-appmenu-service';


import AppIndexViewModel from '@/app-core/ctrl-model/app/app-index-view-appmenu-model';
import { Environment } from '@/environments/environment';


@Component({
    components: { }
})
export default class AppIndexViewBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AppIndexView
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof AppIndexView
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AppIndexView
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AppIndexView
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AppIndexView
     */
    protected getControlType(): string {
        return 'APPMENU'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AppIndexView
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();



    /**
     * 建构部件服务对象
     *
     * @type {AppIndexViewService}
     * @memberof AppIndexView
     */
    protected service: AppIndexViewService = new AppIndexViewService({$store:this.$store});
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppIndexView
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
     * @memberof AppIndexView
     */
    @Prop({ default: '' }) protected controlStyle!: string | 'ICONVIEW' | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AppIndexView
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AppIndexView
     */
    public getData(): any {
        return null;
    }

    /**
     * 菜单模型
     *
     * @type {AppIndexViewMode}
     * @memberof AppIndexView
     */
    public menuMode: AppIndexViewModel = new AppIndexViewModel();

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof AppIndexView
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 菜单数据
     *
     * @private
     * @type {any[]}
     * @memberof AppIndexView
     */
    @Provide()
    private menus: any[] = [];

    /**
     * 菜单收缩改变
     *
     * @type {boolean}
     * @memberof AppIndexView
     */
    @Model() protected collapsechange?: boolean;

    /**
     * 监听菜单收缩
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppIndexView
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
     * @memberof AppIndexView
     */
    @Prop() mode: any;

    /**
     * 当前菜单是否在默认视图上
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Prop({ default: false }) isDefaultPage?: boolean;

    /**
     * 默认打开视图
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Prop() defPSAppView: any;

    /**
     * 默认激活的index
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Provide() defaultActive: any = null;

    /**
     * 当前选中主题
     *
     * @type {*}
     * @memberof AppIndexView
     */
    @Prop() selectTheme: any;

    /**
     * 默认打开的index数组
     *
     * @type {any[]}
     * @memberof AppIndexView
     */
    @Provide() protected defaultOpeneds: any[] = [];

    /**
     * 是否展开
     *
     * @type {boolean}
     * @memberof AppIndexView
     */
    @Provide() protected isCollapse: boolean = false;

    /**
     * 计数器数据
     *
     * @type {*}
     * @memberof AppIndexView
     */
    protected counterdata: any = {};

    /**
     * vue  生命周期
     *
     * @memberof AppIndexView
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AppIndexView
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
        this.load({});
    }

    /**
     * vue 生命周期
     *
     * @memberof AppIndexView
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AppIndexView
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
     * @memberof AppIndexView
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
     * @memberof AppIndexView
     */
    private setHideSideBar(item: any): void {
        if (item.hidesidebar) {
            this.$emit('collapsechange', true);
        }
    }

    /**
     * 菜单项选中处理
     *
     * @param {*} index
     * @param {any[]} indexs
     * @returns
     * @memberof AppIndexView
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
     * @memberof AppIndexView
     */
    private click(item: any) {
        if (item) {
            switch (item.appfunctag) {
                case 'AppFunc3': 
                    this.clickAppFunc3(item);
                    return;
                case 'Auto22': 
                    this.clickAuto22(item);
                    return;
                case 'Auto13': 
                    this.clickAuto13(item);
                    return;
                case 'AppFunc4': 
                    this.clickAppFunc4(item);
                    return;
                case 'AppFunc14': 
                    this.clickAppFunc14(item);
                    return;
                case 'AppFunc': 
                    this.clickAppFunc(item);
                    return;
                case 'AppFunc2': 
                    this.clickAppFunc2(item);
                    return;
                case 'Auto18': 
                    this.clickAuto18(item);
                    return;
                case 'Auto20': 
                    this.clickAuto20(item);
                    return;
                default:
                    console.warn('未指定应用功能');
            }
        }
    }

    
    /**
     * 更新日志
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAppFunc3(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            { pathName: 'mobmdview', parameterName: 'mobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 我的地盘
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAuto22(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { "ibzreport": "0" } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'appportalview2', parameterName: 'appportalview2' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 产品
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAuto13(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'mobmdview', parameterName: 'mobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 人员登录地图
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAppFunc4(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
            { pathName: 'mobmapview', parameterName: 'mobmapview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 用户头像编辑
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAppFunc14(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysemployees', parameterName: 'sysemployee' },
            { pathName: 'headportraitmobeditview', parameterName: 'headportraitmobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 个人中心
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAppFunc(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysemployees', parameterName: 'sysemployee' },
            { pathName: 'loginmobeditview', parameterName: 'loginmobeditview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 用户选择
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAppFunc2(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'users', parameterName: 'user' },
            { pathName: 'mobpickupview', parameterName: 'mobpickupview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 项目
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAuto18(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'mobmdview', parameterName: 'mobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }
    
    /**
     * 测试
     *
     * @param {*} [item={}]
     * @memberof AppIndexView
     */
    protected clickAuto20(item: any = {}) {
        let navigateParam: any = { } ;
        let navigateContext: any = { } ;
        const { param: _param, context: _context } = this.$viewTool.formatNavigateParam(navigateContext, navigateParam, this.context, this.viewparams, {});
        let context = { ..._context };
        let param = { ..._param };
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
        ];
        const routeParam: any = this.globaluiservice.openService.formatRouteParam(context, deResParameters, parameters, [], param);
        this.globaluiservice.openService.openView(routeParam);
    }

    /**
     * 数据加载
     *
     * @param {*} data
     * @memberof AppIndexView
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
            if(Object.is(_item.id,'setting' )){
                _item.hidden = false;
            }
        })
    }

    /**
     * 数据处理
     *
     * @private
     * @param {any[]} items
     * @memberof AppIndexView
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
     * @memberof AppIndexView
     */
    get popperClass(): string {
        return 'app-popper-menu ' + this.selectTheme;
    }
    
}
</script>

<style lang='less'>
@import './app-index-view-appmenu.less';
</style>