import { Verify } from '@/ibiz-core/utils';


/**
 * 置顶
 *
 * @export
 * @class ProductTopLogicBase
 */
export class ProductTopLogicBase {

    /**
     * 名称
     * 
     * @memberof  ProductTopLogicBase
     */
    private name:string ="ProductTop";

    /**
     * 唯一标识
     * 
     * @memberof  ProductTopLogicBase
     */
    private id:string = "A062E59A-5E49-4CD8-A1D9-07301EA2C693";

    /**
     * 默认参数名称
     * 
     * @memberof  ProductTopLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  ProductTopLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  ProductTopLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTopLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTopLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('ibzTop',{});
        this.paramsMap.set('Default',opts);
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
     * 计算2节点结果
     * 
     * @param params 传入参数
     */
    public compute2Cond(params:any):boolean{
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
    * save置顶
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeDeaction1(context:any,params:any,isloading:boolean){
        // 行为处理节点
    }

    /**
    * 设置置顶数据
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('ibzTop').context?this.paramsMap.get('ibzTop').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('ibzTop').data?this.paramsMap.get('ibzTop').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{objectid:tempSrcParam0Data['id']});
    this.paramsMap.set('ibzTop',{data:tempDstParam0Data,context:tempDstParam0Context});
    let tempDstParam1Context:any = this.paramsMap.get('ibzTop').context?this.paramsMap.get('ibzTop').context:{};
    let tempDstParam1Data:any = this.paramsMap.get('ibzTop').data?this.paramsMap.get('ibzTop').data:{};
    this.paramsMap.set('ibzTop',{data:tempDstParam1Data,context:tempDstParam1Context});
    let tempDstParam2Context:any = this.paramsMap.get('ibzTop').context?this.paramsMap.get('ibzTop').context:{};
    let tempDstParam2Data:any = this.paramsMap.get('ibzTop').data?this.paramsMap.get('ibzTop').data:{};
    Object.assign(tempDstParam2Data,{type:"product"});
    this.paramsMap.set('ibzTop',{data:tempDstParam2Data,context:tempDstParam2Context});
        if(this.compute2Cond(params)){
            return this.executeDeaction1(context,params,isloading);   
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
            return this.executeRawsqlcall1(context,params,isloading);   
        }
    }

    /**
    * 获取置顶最大排序值
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }


}