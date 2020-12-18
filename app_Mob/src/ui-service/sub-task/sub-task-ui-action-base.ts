import SubTaskService from '@/app-core/service/sub-task/sub-task-service';
import SubTaskAuthService from '@/app-core/auth-service/sub-task/sub-task-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
/**
 * 任务UI服务对象基类
 *
 * @export
 * @class SubTaskUIActionBase
 * @extends {UIActionBase}
 */
export default class SubTaskUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  SubTaskUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  SubTaskUIServiceBase
     */
    public dataService:SubTaskService = new SubTaskService();

    /**
     * 所有关联视图
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public mainStateFields:Array<any> = ['status1','isfavorites','tasktype'];

    /**
     * 主状态集合Map
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  SubTaskUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  SubTaskUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new SubTaskAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'mobmdview',srfappde:'subtasks'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'assmoremobmdview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'stopmoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'cancelmoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'favoritemobmdview9',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'closemoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'mobpickupmdview',srfappde:'subtasks'});
        this.allViewMap.set('MOBPICKUPVIEW:',{viewname:'mobpickupview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'startmoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'favoritemoremobmdview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'favoritemobmdview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'commoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'assmobmdview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'moboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'gsmoboptionview',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'assmobmdview9',srfappde:'subtasks'});
        this.allViewMap.set(':',{viewname:'newmobeditview',srfappde:'subtasks'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('cancel__0__10','cancel__0__10');
        this.allDeMainStateMap.set('cancel__0__20','cancel__0__20');
        this.allDeMainStateMap.set('cancel__0__30','cancel__0__30');
        this.allDeMainStateMap.set('cancel__0__40','cancel__0__40');
        this.allDeMainStateMap.set('cancel__1__10','cancel__1__10');
        this.allDeMainStateMap.set('cancel__1__20','cancel__1__20');
        this.allDeMainStateMap.set('cancel__1__30','cancel__1__30');
        this.allDeMainStateMap.set('cancel__1__40','cancel__1__40');
        this.allDeMainStateMap.set('closed__0__10','closed__0__10');
        this.allDeMainStateMap.set('closed__0__20','closed__0__20');
        this.allDeMainStateMap.set('closed__0__30','closed__0__30');
        this.allDeMainStateMap.set('closed__0__40','closed__0__40');
        this.allDeMainStateMap.set('closed__1__10','closed__1__10');
        this.allDeMainStateMap.set('closed__1__20','closed__1__20');
        this.allDeMainStateMap.set('closed__1__30','closed__1__30');
        this.allDeMainStateMap.set('closed__1__40','closed__1__40');
        this.allDeMainStateMap.set('doing__0__10','doing__0__10');
        this.allDeMainStateMap.set('doing__0__20','doing__0__20');
        this.allDeMainStateMap.set('doing__0__30','doing__0__30');
        this.allDeMainStateMap.set('doing__0__40','doing__0__40');
        this.allDeMainStateMap.set('doing__1__10','doing__1__10');
        this.allDeMainStateMap.set('doing__1__20','doing__1__20');
        this.allDeMainStateMap.set('doing__1__30','doing__1__30');
        this.allDeMainStateMap.set('doing__1__40','doing__1__40');
        this.allDeMainStateMap.set('done__0__10','done__0__10');
        this.allDeMainStateMap.set('done__0__20','done__0__20');
        this.allDeMainStateMap.set('done__0__30','done__0__30');
        this.allDeMainStateMap.set('done__0__40','done__0__40');
        this.allDeMainStateMap.set('done__1__10','done__1__10');
        this.allDeMainStateMap.set('done__1__20','done__1__20');
        this.allDeMainStateMap.set('done__1__30','done__1__30');
        this.allDeMainStateMap.set('done__1__40','done__1__40');
        this.allDeMainStateMap.set('pause__0__10','pause__0__10');
        this.allDeMainStateMap.set('pause__0__20','pause__0__20');
        this.allDeMainStateMap.set('pause__0__30','pause__0__30');
        this.allDeMainStateMap.set('pause__0__40','pause__0__40');
        this.allDeMainStateMap.set('pause__1__10','pause__1__10');
        this.allDeMainStateMap.set('pause__1__20','pause__1__20');
        this.allDeMainStateMap.set('pause__1__30','pause__1__30');
        this.allDeMainStateMap.set('pause__1__40','pause__1__40');
        this.allDeMainStateMap.set('storychange__0__10','storychange__0__10');
        this.allDeMainStateMap.set('storychange__0__20','storychange__0__20');
        this.allDeMainStateMap.set('storychange__0__30','storychange__0__30');
        this.allDeMainStateMap.set('storychange__0__40','storychange__0__40');
        this.allDeMainStateMap.set('storychange__1__10','storychange__1__10');
        this.allDeMainStateMap.set('storychange__1__20','storychange__1__20');
        this.allDeMainStateMap.set('storychange__1__30','storychange__1__30');
        this.allDeMainStateMap.set('storychange__1__40','storychange__1__40');
        this.allDeMainStateMap.set('wait__0__10','wait__0__10');
        this.allDeMainStateMap.set('wait__0__20','wait__0__20');
        this.allDeMainStateMap.set('wait__0__30','wait__0__30');
        this.allDeMainStateMap.set('wait__0__40','wait__0__40');
        this.allDeMainStateMap.set('wait__1__10','wait__1__10');
        this.allDeMainStateMap.set('wait__1__20','wait__1__20');
        this.allDeMainStateMap.set('wait__1__30','wait__1__30');
        this.allDeMainStateMap.set('wait__1__40','wait__1__40');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  SubTaskUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('cancel__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('cancel__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('closed__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('doing__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('done__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('pause__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_START_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('storychange__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__0__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__0__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__0__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__0__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_FAVOR_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__1__10',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__1__20',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_ASSIGN_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_COMPLETE_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__STORY_FJTASK_BUT':0,'SRFUR__TASK_START_BUT':0,'SRFUR__TASK_CANCEL_BUT':0,'SRFUR__TASK_ACTIVATION_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__1__30',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('wait__1__40',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__TASK_ACTIVATION_BUT':0,'SRFUR__TASK_SUBTASKS_BUT':0,'SRFUR__TASK_XQCHANGE_BUT':0,'SRFUR__TASK_PAUSE_BUT':0,'SRFUR__TASK_PROCEED_BUT':0,'SRFUR__TASK_NFAVOR_BUT':0,'SRFUR__TASK_FORWARD_BUT':0,'SRFUR__TASK_CLOSE_BUT':0,}));
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
     * @memberof SubTaskUIService
     */
    public async Task_confirmStoryChangeCz(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('subtask');
            const response: any = await curUIService.ConfirmStoryChange(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('确认成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
    }

    /**
     * 工时
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof SubTaskUIService
     */
    public async Task_WorkHoursMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'gsmoboptionview', parameterName: 'gsmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
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
     * @memberof SubTaskUIService
     */
    public async Task_TaskNFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('subtask');
            const response: any = await curUIService.TaskNFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('取消收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
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
     * @memberof SubTaskUIService
     */
    public async Task_MyFavMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'favoritemoremobmdview', parameterName: 'favoritemoremobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 完成
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof SubTaskUIService
     */
    public async Task_DoneTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'commoboptionview', parameterName: 'commoboptionview' },
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
     * 开始
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof SubTaskUIService
     */
    public async Task_StartTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'startmoboptionview', parameterName: 'startmoboptionview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
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
     * @memberof SubTaskUIService
     */
    public async Task_deleteMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '确认要删除，删除操作将不可恢复？');
        if (!state) {
            return Promise.reject();
        }
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
              container.closeView(null);
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('subtask');
            const response: any = await curUIService.Remove(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('已删除');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                }
            } else {
                this.notice.error('系统异常！');
            }
            return response;
        };
        return backend();
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
     * @memberof SubTaskUIService
     */
    public async Task_CloseTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
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
     * 取消
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof SubTaskUIService
     */
    public async Task_CancelTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'cancelmoboptionview', parameterName: 'cancelmoboptionview' },
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
     * @memberof SubTaskUIService
     */
    public async Task_TaskFavoritesMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        const backend = async () => {
            const curUIService: any = await this.globaluiservice.getAppEntityService('subtask');
            const response: any = await curUIService.TaskFavorites(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('收藏成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
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
     * @memberof SubTaskUIService
     */
    public async Task_AssignTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
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
     * @memberof SubTaskUIService
     */
    public async Task_CreateMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
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
     * @memberof SubTaskUIService
     */
    public async Task_MyAssMore(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'assmoremobmdview', parameterName: 'assmoremobmdview' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 暂停
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof SubTaskUIService
     */
    public async Task_PauseTaskMob(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { subtask: '%subtask%' });
        Object.assign(paramJO, { id: '%subtask%' });
        Object.assign(paramJO, { name: '%name%' });
            
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
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, {});
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'subtasks', parameterName: 'subtask' },
            { pathName: 'stopmoboptionview', parameterName: 'stopmoboptionview' },
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
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  SubTaskUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({subtask:srfkey});
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
     * @memberof  SubTaskUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  SubTaskUIServiceBase
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
     * @memberof  SubTaskUIServiceBase
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
    * @memberof  SubTaskUIServiceBase
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
    * @memberof  SubTaskUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}