import IbzTaskestimateService from '@/app-core/service/ibz-taskestimate/ibz-taskestimate-service';
import IbzTaskestimateAuthService from '@/app-core/auth-service/ibz-taskestimate/ibz-taskestimate-auth-service';
import EntityUIActionBase from '@/utils/ui-service-base/entity-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
import { Notice } from '@/utils';
import { Environment } from '@/environments/environment';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";
/**
 * 任务预计UI服务对象基类
 *
 * @export
 * @class IbzTaskestimateUIActionBase
 * @extends {UIActionBase}
 */
export default class IbzTaskestimateUIActionBase extends EntityUIActionBase {

    /**
     * 是否支持工作流
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */
    public isEnableWorkflow:boolean = false;

    /**
     * 当前UI服务对应的数据服务对象
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */
    public dataService:IbzTaskestimateService = new IbzTaskestimateService();

    /**
     * 所有关联视图
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */ 
    public allViewMap: Map<string, Object> = new Map();

    /**
     * 状态值
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */ 
    public stateValue: number = 0;

    /**
     * 状态属性
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */ 
    public stateField: string = "";

    /**
     * 主状态属性集合
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */  
    public mainStateFields:Array<any> = [];

    /**
     * 主状态集合Map
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */  
    public allDeMainStateMap:Map<string,string> = new Map();

    /**
     * 主状态操作标识Map
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */ 
    public allDeMainStateOPPrivsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  IbzTaskestimateUIServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzTaskestimateUIServiceBase
     */
    constructor(opts: any = {}) {
        super();
        this.authService = new IbzTaskestimateAuthService(opts);
        this.initViewMap();
        this.initDeMainStateMap();
        this.initDeMainStateOPPrivsMap();
    }

    /**
     * 初始化视图Map
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */  
    public initViewMap(){
        this.allViewMap.set(':',{viewname:'mobeditview9',srfappde:'ibztaskestimates'});
        this.allViewMap.set(':',{viewname:'mobmeditview9',srfappde:'ibztaskestimates'});
    }

    /**
     * 初始化主状态集合
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */  
    public initDeMainStateMap(){
    }

    /**
     * 初始化主状态操作标识
     * 
     * @memberof  IbzTaskestimateUIServiceBase
     */  
    public initDeMainStateOPPrivsMap(){
    }


    /**
     * 获取指定数据的重定向页面
     * 
     * @param srfkey 数据主键
     * @param isEnableWorkflow  重定向视图是否需要处理流程中的数据
     * @memberof  IbzTaskestimateUIServiceBase
     */
    public async getRDAppView(srfkey:string,isEnableWorkflow:boolean){
        this.isEnableWorkflow = isEnableWorkflow;
        // 进行数据查询
        let result:any = await this.dataService.Get({ibztaskestimate:srfkey});
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
     * @memberof  IbzTaskestimateUIServiceBase
	 */
	public getRealDEType(entity:any){

    }

    /**
     * 获取实体单数据实体视图预定义参数
     * 
     * @param curData 当前数据
     * @param bDataInWF 是否有数据在工作流中
     * @param bWFMode   是否工作流模式
     * @memberof  IbzTaskestimateUIServiceBase
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
     * @memberof  IbzTaskestimateUIServiceBase
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
    * @memberof  IbzTaskestimateUIServiceBase
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
    * @memberof  IbzTaskestimateUIServiceBase
    */ 
   public getAllOPPrivs(data:any){
       return this.authService.getOPPrivs(this.getDEMainStateOPPrivs(data));
   }

}