import { IbzFavoritesService } from '@app-core/service/ibz-favorites/ibz-favorites-service';
import { Verify } from '@/ibiz-core/utils';


/**
 * 用例收藏
 *
 * @export
 * @class CaseFavoriteLogicBase
 */
export class CaseFavoriteLogicBase {

    /**
     * 名称
     * 
     * @memberof  CaseFavoriteLogicBase
     */
    private name:string ="caseFavorite";

    /**
     * 唯一标识
     * 
     * @memberof  CaseFavoriteLogicBase
     */
    private id:string = "F144C1D3-1400-49A6-A632-0279D2B11DFC";

    /**
     * 默认参数名称
     * 
     * @memberof  CaseFavoriteLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  CaseFavoriteLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  CaseFavoriteLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseFavoriteLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  CaseFavoriteLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('Default',opts);
        this.paramsMap.set('IbzFavorite',{});
    }


    /**
     * 计算0节点结果
     * 
     * @param params 传入参数
     */
    public compute0Cond(params:any):boolean{
        return true;
    }

    /**
     * 计算1节点结果
     * 
     * @param params 传入参数
     */
    public compute1Cond(params:any):boolean{
        return true;
    }

    /**
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     */
    public onExecute(context:any,params:any,isloading:boolean){
        return this.executeBegin(context,params,isloading);
    }


    /**
    * Create
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeCreate(context:any,params:any,isloading:boolean){
        // 行为处理节点
        let result: any;
        let actionParam:any = this.paramsMap.get('IbzFavorite');
        const targetService:IbzFavoritesService = new IbzFavoritesService();
        if (targetService['Create'] && targetService['Create'] instanceof Function) {
            result = await targetService['Create'](actionParam.context,actionParam.data, false);
        }
        if(result && result.status == 200){
            Object.assign(actionParam.data,result.data);
        return this.paramsMap.get(this.defaultParamName).data;
        }
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute1Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
        }
    }

    /**
    * 准备参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('IbzFavorite').context?this.paramsMap.get('IbzFavorite').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('IbzFavorite').data?this.paramsMap.get('IbzFavorite').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{objectid:tempSrcParam0Data['id']});
    this.paramsMap.set('IbzFavorite',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('IbzFavorite').context?this.paramsMap.get('IbzFavorite').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('IbzFavorite').data?this.paramsMap.get('IbzFavorite').data:{};
    let tempSrcParam1Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam1Data,{account:tempSrcParam1Data['openedby']});
    this.paramsMap.set('IbzFavorite',{data:tempDstParam1Data,context:tempDstParam1Context});
    let tempDstParam2Context:any = this.paramsMap.get('IbzFavorite').context?this.paramsMap.get('IbzFavorite').context:{};
    let tempDstParam2Data:any = this.paramsMap.get('IbzFavorite').data?this.paramsMap.get('IbzFavorite').data:{};
    Object.assign(tempDstParam2Data,{type:"case"});
    this.paramsMap.set('IbzFavorite',{data:tempDstParam2Data,context:tempDstParam2Context});
        if(this.compute0Cond(params)){
            return this.executeCreate(context,params,isloading);   
        }
    }


}