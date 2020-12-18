import BugService from '@/app-core/service/bug/bug-service';
import BugAuthService from '@/app-core/auth-service/bug/bug-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";
/**
 * BugUI服务对象基类
 *
 * @export
 * @class BugUIActionBase
 * @extends {UIActionBase}
 */
export default class BugUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  BugUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  BugUIServiceBase
     */
    public dataService:BugService = new BugService();

    /**
     * 所有关联视图
     * 
     * @memberof  BugUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  BugUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  BugUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  BugUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status','isfavorites','confirmed'];

    /**
     * 主状态集合Map
     * 
     * @memberof  BugUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  BugUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  BugUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BugUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new BugAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  BugUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'colsemobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobmpickupbuildcreatebugview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'planmobmdview9',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'cmoboptionview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'editnewmobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'rmoboptionview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'testmobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'acmoboptionview',srfappde:'bugs'});
        this.allViewMap.set('MOBMDATAVIEW:',{viewname:'mobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'assmobmdview9',srfappde:'bugs'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'newmobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'assmoboptionview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'confirmmobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'assigntomobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobmpickupview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'assmobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobpickupmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobmpickupleftview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr2mobmpickupview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobpickupbuildresolvedmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobpickupmdview1',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr2mobpickupmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'resolvemobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'logmobmdview9',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'activationmobeditview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr4mobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'closemoboptionview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr3mobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'assmoremobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr2mobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr6mobmdview',srfappde:'bugs'});
        this.allViewMap.set(':',{viewname:'usr5mobmdview',srfappde:'bugs'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  BugUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('active__0__0','active__0__0');
        this.allDeMainStateMap.set('active__0__1','active__0__1');
        this.allDeMainStateMap.set('active__1__0','active__1__0');
        this.allDeMainStateMap.set('active__1__1','active__1__1');
        this.allDeMainStateMap.set('closed__0__0','closed__0__0');
        this.allDeMainStateMap.set('closed__0__1','closed__0__1');
        this.allDeMainStateMap.set('closed__1__0','closed__1__0');
        this.allDeMainStateMap.set('closed__1__1','closed__1__1');
        this.allDeMainStateMap.set('resolved__0__0','resolved__0__0');
        this.allDeMainStateMap.set('resolved__0__1','resolved__0__1');
        this.allDeMainStateMap.set('resolved__1__0','resolved__1__0');
        this.allDeMainStateMap.set('resolved__1__1','resolved__1__1');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  BugUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('active__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_ACTIVATE_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_ACTIVATE_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_ACTIVATE_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,'SRFUR__BUG_ACTIVATE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_ASSIGNTO_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_TOSTORY_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_ASSIGNTO_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__BUG_TOSTORY_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_ASSIGNTO_BUT':0,'SRFUR__BUG_TOSTORY_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_CLOSE_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_ASSIGNTO_BUT':0,'SRFUR__BUG_TOSTORY_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__PROP_LBUG_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('resolved__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('resolved__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_FAVOR_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('resolved__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,'SRFUR__PROP_LBUG_BUT':0,'SRFUR__BUG_CONFIRM_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('resolved__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__BUG_CONFIRM_BUT':0,'SRFUR__BUG_RESOLVE_BUT':0,'SRFUR__BUG_NFAVOR_BUT':0,'SRFUR__PROP_LBUG_BUT':0,}));
    }

    /**
     * 移除bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_releaseUnlinkBugByLeftBug(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "release": "%release%" } ;
        let panelNavContext= { "release": "%release%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.ReleaseUnLinkBugbyLeftBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('移除bug成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 激活
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_ActivationMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'acmoboptionview', parameterName: 'acmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 移除bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_releaseUnlinkBug(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "release": "%release%" } ;
        let panelNavContext= { "release": "%release%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.ReleaseUnlinkBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('移除bug成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 新建
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobCreate(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'newmobeditview', parameterName: 'newmobeditview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 指派
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_AssingToBugMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'assmoboptionview', parameterName: 'assmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 关联bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobReleaseLinkResolvedBug(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "product": "%product%", "srfparentkey": "%release%", "bug": "0", "release": "%release%" } ;
        let panelNavContext= { "bug": "0", "product": "%product%", "srfparentkey": "%release%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.ReleaseLinkBugbyBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联bug成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'bug-usr3-mob-mpickup-view', 
            height: 0, 
            width: 0,  
            title: 'Bug移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }

    /**
     * 确认
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_ConfirmBugMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'cmoboptionview', parameterName: 'cmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 关联bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobProductPlanLinkBug(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "productplan": "%productplan%" } ;
        let panelNavContext= { "bug": "0" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.LinkBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联bug成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'bug-usr2-mob-mpickup-view', 
            height: 0, 
            width: 0,  
            title: 'Bug移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }

    /**
     * 解除关联
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_unlinkBug_buildMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '您确认移除该Bug吗？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "build": "%build%" } ;
        let panelNavContext= { "build": "%build%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.BuildUnlinkBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('解除关联成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 删除
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_deleteMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '确认要删除，删除操作将不可恢复？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
              container.closeView(null);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.Remove(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('已删除');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 编辑
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobMainEdit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'editnewmobeditview', parameterName: 'editnewmobeditview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 移除关联
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_UnlinkBugMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '是否移除关联Bug');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "productplan": "%productplan%" } ;
        let panelNavContext= { } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.UnlinkBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('移除成功');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Bug",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 解决
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_ResolveBugMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 更多
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_AssToMyBugMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 关联bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobReleaseLinkLeftBug(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "product": "%product%", "srfparentkey": "%release%", "bug": "0", "release": "%release%" } ;
        let panelNavContext= { "bug": "0", "product": "%product%", "srfparentkey": "%release%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.ReleaseLinkBugbyLeftBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联bug成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'bug-usr3-mob-mpickup-left-view', 
            height: 0, 
            width: 0,  
            title: 'Bug移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }

    /**
     * 关闭
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_CloseBugMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { bug: '%bug%' });
        Object.assign(paramJO, { id: '%bug%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && (context as any).story && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).project && true) {
            deResParameters = [
            { pathName: 'projects', parameterName: 'project' },
            ]
        }
        if ((context as any).story && true) {
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'closemoboptionview', parameterName: 'closemoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        if (response) {
            if (xData && xData.refresh && xData.refresh instanceof Function) {
                xData.refresh(args);
            }
        }
        return response;
    }

    /**
     * 关联bug
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof BugUIService
     */
    public async Bug_MobBuildLink(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'NONE';
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        // 直接调实体服务需要转换的数据
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        // 导航参数
        let panelNavParam= { "product": "%product%", "project": "%project%", "srfloginname": "%srfloginname%", "build": "%srfparentkey%" } ;
        let panelNavContext= { "bug": "0", "build": "%srfparentkey%", "srfloginname": "%srfloginname%", "project": "%project%", "product": "%product%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('bug');
            const response: any = await curUIService.BuildLinkBug(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联bug成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'bug-usr3-mob-mpickup-build-create-bug-view', 
            height: 0, 
            width: 0,  
            title: 'Bug移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  BugUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({bug:srfkey});
        const curData:any = result.data;
        //判断当前数据模式,默认为true，todo
        const iRealDEModel:boolean = true;

        let bDataInWF:boolean = false;
		let bWFMode:any = false;
		// 计算数据模式
		if (this.isEnableWorkflow) {
			bDataInWF = await this.dataService.testDataInWF({stateValue:this.stateValue,stateField:this.stateField},curData);
			if (bDataInWF) {
				bDataInWF = true;
				bWFMode = await this.dataService.testUserExistWorklist(null,curData);
			}
        }
        let strPDTViewParam:string = await this.getDESDDEViewPDTParam(curData, bDataInWF, bWFMode);
        //若不是当前数据模式，处理strPDTViewParam，todo

        //查找视图

        //返回视图
        return this.allViewMap.get(strPDTViewParam);
    }

    /**
	 * 获取实际的数据类型
     * 
     * @memberof  BugUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  BugUIServiceBase
     */
    public async getDESDDEViewPDTParam(curData:any, bDataInWF:boolean, bWFMode:boolean){
        let strPDTParam:string = '';
		if (bDataInWF) {
			// 判断数据是否在流程中
        }
        //多表单，todo
        const multiFormDEField:string|null =null;

        if (multiFormDEField) {
			const objFormValue:string = curData[multiFormDEField];
			if(!Environment.isAppMode){
				return 'MOBEDITVIEW:'+objFormValue;
			}
			return 'EDITVIEW:'+objFormValue;
        }
		if(!Environment.isAppMode){
            if(this.getDEMainStateTag(curData)){
                return `MOBEDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
            }
			return 'MOBEDITVIEW:';
        }
        if(this.getDEMainStateTag(curData)){
            return `EDITVIEW:MSTAG:${ this.getDEMainStateTag(curData)}`;
        }
		return 'EDITVIEW:';
    }

    /**
     * 获取数据对象的主状态标识
     * 
     * @param curData 当前数据
     * @memberof  BugUIServiceBase
     */  
    public getDEMainStateTag(curData:any){
        if(this.mainStateFields.length === 0) return null;

        this.mainStateFields.forEach((singleMainField:any) =>{
            if(!(singleMainField in curData)){
                console.warn(`当前数据对象不包含属性${singleMainField}，可能会发生错误`);
            }
        })
        for (let i = 0; i <= 1; i++) {
            let strTag:string = (curData[this.mainStateFields[0]] != null && curData[this.mainStateFields[0]] !== "")?(i == 0) ? curData[this.mainStateFields[0]] : "":"";
            if (this.mainStateFields.length >= 2) {
                for (let j = 0; j <= 1; j++) {
                    let strTag2:string = (curData[this.mainStateFields[1]] != null && curData[this.mainStateFields[1]] !== "")?`${strTag}__${(j == 0) ? curData[this.mainStateFields[1]] : ""}`:strTag;
                    if (this.mainStateFields.length >= 3) {
                        for (let k = 0; k <= 1; k++) {
                            let strTag3:string = (curData[this.mainStateFields[2]] != null && curData[this.mainStateFields[2]] !== "")?`${strTag2}__${(k == 0) ? curData[this.mainStateFields[2]] : ""}`:strTag2;
                            // 判断是否存在
                            return this.allDeMainStateMap.get(strTag3);
                        }
                    }else{
                        return this.allDeMainStateMap.get(strTag2);
                    }
                }
            }else{
                return this.allDeMainStateMap.get(strTag);
            }
        }
        return null;
    }

    /**
    * 获取数据对象当前操作标识
    * 
    * @param data 当前数据
    * @memberof  BugUIServiceBase
    */  
   public getDEMainStateOPPrivs(data:any){
        if(this.getDEMainStateTag(data)){
            return this.allDeMainStateOPPrivsMap.get((this.getDEMainStateTag(data) as string));
        }else{
            return null;
        }
   }

    /**
    * 获取数据对象所有的操作标识
    * 
    * @param data 当前数据
    * @memberof  BugUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}