import StoryService from '@/app-core/service/story/story-service';
import StoryAuthService from '@/app-core/auth-service/story/story-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";
/**
 * 需求UI服务对象基类
 *
 * @export
 * @class StoryUIActionBase
 * @extends {UIActionBase}
 */
export default class StoryUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  StoryUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  StoryUIServiceBase
     */
    public dataService:StoryService = new StoryService();

    /**
     * 所有关联视图
     * 
     * @memberof  StoryUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  StoryUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  StoryUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  StoryUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status','isfavorites','ischild'];

    /**
     * 主状态集合Map
     * 
     * @memberof  StoryUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  StoryUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  StoryUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new StoryAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  StoryUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'newmobeditview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'moblistview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'mobmdview9',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'editmobeditview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'rmoboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'mobmdviewcurproject',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'mobpickupmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'linkstorymobmpickupview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobmpickupbuildview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'logmobmdview9',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr3mobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'moboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'favoritemoremobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'asmoboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'assmobmdview9',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr3mobmpickupview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobmpickupview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'favoritemobmdview9',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr3mobpickupmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobmdview_5219',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'cmoboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr4mobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'assmobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'acmoboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobpickupmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'mobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'assmoremobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'favoritemobmdview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'changemoboptionview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'linkstorymobpickupmdview',srfappde:'stories'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'stories'});
        this.allViewMap.set(':',{viewname:'usr2mobpickupmdbuildview',srfappde:'stories'});
        this.allViewMap.set('MOBPICKUPVIEW:',{viewname:'mobpickupview',srfappde:'stories'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  StoryUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('active__0__0','active__0__0');
        this.allDeMainStateMap.set('active__0__1','active__0__1');
        this.allDeMainStateMap.set('active__0__2','active__0__2');
        this.allDeMainStateMap.set('active__1__0','active__1__0');
        this.allDeMainStateMap.set('active__1__1','active__1__1');
        this.allDeMainStateMap.set('active__1__2','active__1__2');
        this.allDeMainStateMap.set('changed__0__0','changed__0__0');
        this.allDeMainStateMap.set('changed__0__1','changed__0__1');
        this.allDeMainStateMap.set('changed__0__2','changed__0__2');
        this.allDeMainStateMap.set('changed__1__0','changed__1__0');
        this.allDeMainStateMap.set('changed__1__1','changed__1__1');
        this.allDeMainStateMap.set('changed__1__2','changed__1__2');
        this.allDeMainStateMap.set('closed__0__0','closed__0__0');
        this.allDeMainStateMap.set('closed__0__1','closed__0__1');
        this.allDeMainStateMap.set('closed__0__2','closed__0__2');
        this.allDeMainStateMap.set('closed__1__0','closed__1__0');
        this.allDeMainStateMap.set('closed__1__1','closed__1__1');
        this.allDeMainStateMap.set('closed__1__2','closed__1__2');
        this.allDeMainStateMap.set('draft__0__0','draft__0__0');
        this.allDeMainStateMap.set('draft__0__1','draft__0__1');
        this.allDeMainStateMap.set('draft__0__2','draft__0__2');
        this.allDeMainStateMap.set('draft__1__0','draft__1__0');
        this.allDeMainStateMap.set('draft__1__1','draft__1__1');
        this.allDeMainStateMap.set('draft__1__2','draft__1__2');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  StoryUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('active__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_CCASE_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__0__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CCASE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('active__1__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_CCASE_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__0__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CCASE_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('changed__1__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_CCASE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_CCASE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__0__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__0__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_CCASE_BUT':0,'SRFUR__STORY_ASS_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__0__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_FAVOR_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__1__0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__1__1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_DELETE_BUT':0,'SRFUR__STORY_CHANGED_BUT':0,'SRFUR__STORY_CCASE_BUT':0,'SRFUR__STORY_XQXF_BUT':0,'SRFUR__STORY_REVIEW_BUT':0,'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_CLOSED_BUT':0,'SRFUR__STORY_ASS_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('draft__1__2',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__STORY_ACTIVE_BUT':0,'SRFUR__STORY_NFAVOR_BUT':0,'SRFUR__STORY_XQXF_BUT':0,}));
    }

    /**
     * 关联需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_MobReleaseLinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "product": "%product%", "story": "0", "release": "%srfparentkey%" } ;
        let panelNavContext= { "story": "0", "release": "%srfparentkey%", "product": "%product%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.ReleaseLinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联需求成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'story-usr2-mob-mpickup-view', 
            height: 0, 
            width: 0,  
            title: '需求移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }

    /**
     * 关联需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_projectLinkStoriesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "project": "%project%" } ;
        let panelNavContext= { "story": "0", "project": "%project%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.ProjectLinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联需求成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'story-usr3-mob-mpickup-view', 
            height: 0, 
            width: 0,  
            title: '需求实体移动端多数据选择视图(项目下关联需求)', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
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
     * @memberof StoryUIService
     */
    public async Story_MyFavMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
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
     * @memberof StoryUIService
     */
    public async Story_OpenBaseInfoEditViewMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'editmobeditview', parameterName: 'editmobeditview' },
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
     * @memberof StoryUIService
     */
    public async Story_UnlinkStoryMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '是否移除需求关联');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        let panelNavParam= { "srfparentkey": "%productplan%", "productplan": "%productplan%" } ;
        let panelNavContext= { } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.UnlinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('移除成功');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 取消收藏
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_StoryNFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.StoryNFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('取消收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 收藏
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_StoryFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.StoryFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
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
     * @memberof StoryUIService
     */
    public async Story_AssignToMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'asmoboptionview', parameterName: 'asmoboptionview' },
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
     * @memberof StoryUIService
     */
    public async Story_releaseUnlinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.ReleaseUnlinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('移除关联成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 按照计划关联
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_MobAccordingToPlanLinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "project": "%project%" } ;
        let panelNavContext= { "project": "%project%" } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'moboptionview', parameterName: 'moboptionview' },
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
     * 评审
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_ReviewStoryMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'rmoboptionview', parameterName: 'rmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 变更
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_ChangeStoryDetailMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'changemoboptionview', parameterName: 'changemoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 解绑需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_buildUnlinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '您确认移除该需求吗？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.BuildUnlinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('解绑需求成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
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
     * @memberof StoryUIService
     */
    public async Story_MyAssMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
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
     * @memberof StoryUIService
     */
    public async Story_CloseStoryMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
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
     * 关联需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_MobProductLinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavContext= { "productplan": "%productplan%", "story": "0" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.LinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联需求成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'story-link-story-mob-mpickup-view', 
            height: 0, 
            width: 0,  
            title: '需求移动端多数据选择视图（关联需求）', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
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
     * @memberof StoryUIService
     */
    public async Story_deleteMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '确认要删除，删除操作将不可恢复？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.Remove(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('已删除');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 关联需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_MobBuildLinkStory(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "project": "%project%", "build": "%build%" } ;
        let panelNavContext= { "build": "%build%", "story": "0", "project": "%project%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.BuildLinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('关联需求成功！');
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        const view: any = { 
            viewname: 'story-usr2-mob-mpickup-build-view', 
            height: 0, 
            width: 0,  
            title: '需求移动端多数据选择视图', 
            placement: '',
        };
        const result: any = await this.openService.openModal(view, _context, _params);
        if (result && Object.is(result.ret, 'OK')) {
            Object.assign(_params, { srfactionparam: result.datas });
            return backend();
        }
    }

    /**
     * 新建需求
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_MobCreate(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "project": "%project%" } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        let deResParameters: any[] = [];
        if ((context as any).product && true) {
            deResParameters = [
            { pathName: 'products', parameterName: 'product' },
            ]
        }

        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
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
     * 移除
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof StoryUIService
     */
    public async Story_ProjectUnlinkStoryMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '您确定从该项目中移除该需求吗？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { story: '%story%' });
        Object.assign(paramJO, { id: '%story%' });
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
        let panelNavParam= { "project": "%project%" } ;
        let panelNavContext= { "project": "%project%" } ;
        if(Util.typeOf(_args) == 'array' && _args.length > 0){
            _args = _args[0];
        }
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params,_args);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('story');
            const response: any = await curUIService.ProjectUnlinkStory(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('已移除');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"Story",action:'appRefresh',data:args});
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  StoryUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({story:srfkey});
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
     * @memberof  StoryUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  StoryUIServiceBase
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
     * @memberof  StoryUIServiceBase
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
    * @memberof  StoryUIServiceBase
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
    * @memberof  StoryUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}