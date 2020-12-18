import IbzWeeklyService from '@/app-core/service/ibz-weekly/ibz-weekly-service';
import IbzWeeklyAuthService from '@/app-core/auth-service/ibz-weekly/ibz-weekly-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";
/**
 * 周报UI服务对象基类
 *
 * @export
 * @class IbzWeeklyUIActionBase
 * @extends {UIActionBase}
 */
export default class IbzWeeklyUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */
    public dataService:IbzWeeklyService = new IbzWeeklyService();

    /**
     * 所有关联视图
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */  
    public mainStateFields:Array<any> = ['issubmit'];

    /**
     * 主状态集合Map
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  IbzWeeklyUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzWeeklyUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new IbzWeeklyAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'mobeditviewcreate',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'usr2mobtabexpview',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'mobeditviewmainmytijiao',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'usr2mobtabexpviewmytijiao',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'usr2mobtabexpviewmyreceived',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'usr2mobmdview',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'usr2mobeditview',srfappde:'ibzweeklies'});
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'mobmdview',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'mobeditviewmian',srfappde:'ibzweeklies'});
        this.allViewMap.set(':',{viewname:'mobeditviewmainreceived',srfappde:'ibzweeklies'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('0','0');
        this.allDeMainStateMap.set('1','1');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  IbzWeeklyUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__WEEKLY_NSUBMIT_BUT':0,}));
        this.allDeMainStateOPPrivsMap.set('1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__WEEKLY_SUBMIT_BUT':0,}));
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
     * @memberof IbzWeeklyUIService
     */
    public async IbzWeekly_mobEdit1(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { ibzweekly: '%ibzweekly%' });
        Object.assign(paramJO, { ibzweeklyid: '%ibzweekly%' });
        Object.assign(paramJO, { ibzweeklyname: '%ibzweeklyname%' });
            
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
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzweeklies', parameterName: 'ibzweekly' },
            { pathName: 'mobeditviewmian', parameterName: 'mobeditviewmian' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
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
     * @memberof IbzWeeklyUIService
     */
    public async IbzWeekly_MobEdit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzweeklies', parameterName: 'ibzweekly' },
            { pathName: 'mobeditviewcreate', parameterName: 'mobeditviewcreate' },
        ];
        const routeParam: any = this.openService.formatRouteParam(_context, deResParameters, parameters, _args, _params);
        response = await this.openService.openView(routeParam);
        return response;
    }

    /**
     * 提交
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof IbzWeeklyUIService
     */
    public async IbzWeekly_MobSubmit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const state: boolean = await Notice.getInstance().confirm('警告', '你确定现在提交吗？');
        if (!state) {
            return Promise.reject();
        }
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { ibzweekly: '%ibzweekly%' });
        Object.assign(paramJO, { ibzweeklyid: '%ibzweekly%' });
        Object.assign(paramJO, { ibzweeklyname: '%ibzweeklyname%' });
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
            const curUIService: any = await this.globaluiservice.getAppEntityService('ibzweekly');
            const response: any = await curUIService.Submit(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('提交成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"IbzWeekly",action:'appRefresh',data:args});
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
     * @memberof  IbzWeeklyUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({ibzweekly:srfkey});
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
     * @memberof  IbzWeeklyUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  IbzWeeklyUIServiceBase
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
     * @memberof  IbzWeeklyUIServiceBase
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
    * @memberof  IbzWeeklyUIServiceBase
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
    * @memberof  IbzWeeklyUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}