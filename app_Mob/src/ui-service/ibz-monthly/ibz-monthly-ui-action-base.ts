import IbzMonthlyService from '@/app-core/service/ibz-monthly/ibz-monthly-service';
import IbzMonthlyAuthService from '@/app-core/auth-service/ibz-monthly/ibz-monthly-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";
/**
 * 月报UI服务对象基类
 *
 * @export
 * @class IbzMonthlyUIActionBase
 * @extends {UIActionBase}
 */
export default class IbzMonthlyUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */
    public dataService:IbzMonthlyService = new IbzMonthlyService();

    /**
     * 所有关联视图
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */  
    public mainStateFields:Array<any> = ['issubmit'];

    /**
     * 主状态集合Map
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  IbzMonthlyUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMonthlyUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new IbzMonthlyAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set('MOBEDITVIEW:',{viewname:'mobeditview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'myreceivedmobeditview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'maininfomobeditview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'mysubmitmobmdview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'editmobeditview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'maininfomobtabexpview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'monthlymobmdview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'myreceivedmobmdview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'createmobeditview',srfappde:'ibzmonthlies'});
        this.allViewMap.set(':',{viewname:'myreceivedmobtabexpview',srfappde:'ibzmonthlies'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */  
    public initDeMainStateMap(){
        this.allDeMainStateMap.set('0','0');
        this.allDeMainStateMap.set('1','1');
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  IbzMonthlyUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
        this.allDeMainStateOPPrivsMap.set('0',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{}));
        this.allDeMainStateOPPrivsMap.set('1',Object.assign({'CREATE':1,'DELETE':1,'READ':1,'UPDATE':1},{'SRFUR__MONTHLY_EDIT_BUT':0,'SRFUR__MONTHLY_SUBMIT_BUT':0,}));
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
     * @memberof IbzMonthlyUIService
     */
    public async IbzMonthly_MobSubmit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        let _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { ibzmonthly: '%ibzmonthly%' });
        Object.assign(paramJO, { ibzmonthlyid: '%ibzmonthly%' });
        Object.assign(paramJO, { ibzmonthlyname: '%ibzmonthlyname%' });
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
            const curUIService: any = await this.globaluiservice.getAppEntityService('ibzmonthly');
            const response: any = await curUIService.Submit(_context, _params);
            if (response && response.status === 200) {
                this.notice.success('提交成功！');
                if (xData && xData.refresh && xData.refresh instanceof Function) {
                    xData.refresh(args);
                    AppCenterService.notifyMessage({name:"IbzMonthly",action:'appRefresh',data:args});
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
     * @memberof IbzMonthlyUIService
     */
    public async IbzMonthly_MobCreate(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
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
        let panelNavParam= { "date": "%date%" } ;
        let panelNavContext= { "date": "%date%" } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmonthlies', parameterName: 'ibzmonthly' },
            { pathName: 'createmobeditview', parameterName: 'createmobeditview' },
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
     * 修改
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof IbzMonthlyUIService
     */
    public async IbzMonthly_MobEdit(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { ibzmonthly: '%ibzmonthly%' });
        Object.assign(paramJO, { ibzmonthlyid: '%ibzmonthly%' });
        Object.assign(paramJO, { ibzmonthlyname: '%ibzmonthlyname%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { "date": "%date%" } ;
        let panelNavContext= { "date": "%date%" } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        let response: any = null;
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmonthlies', parameterName: 'ibzmonthly' },
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
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  IbzMonthlyUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({ibzmonthly:srfkey});
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
     * @memberof  IbzMonthlyUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  IbzMonthlyUIServiceBase
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
     * @memberof  IbzMonthlyUIServiceBase
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
    * @memberof  IbzMonthlyUIServiceBase
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
    * @memberof  IbzMonthlyUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}