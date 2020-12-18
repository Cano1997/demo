import { Verify } from '@/ibiz-core/utils';


/**
 * 获取联系人
 *
 * @export
 * @class GetUserConcatLogicBase
 */
export class GetUserConcatLogicBase {

    /**
     * 名称
     * 
     * @memberof  GetUserConcatLogicBase
     */
    private name:string ="GetUserConcat";

    /**
     * 唯一标识
     * 
     * @memberof  GetUserConcatLogicBase
     */
    private id:string = "A0E75F7B-F3D6-430A-9F25-AF78072BA7C5";

    /**
     * 默认参数名称
     * 
     * @memberof  GetUserConcatLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  GetUserConcatLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  GetUserConcatLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserConcatLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserConcatLogicBase
     */
    public initParams(opts:any){
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
     * 执行逻辑
     * 
     * @param context 应用上下文
     * @param params 传入参数
     */
    public onExecute(context:any,params:any,isloading:boolean){
        return this.executeBegin(context,params,isloading);
    }


    /**
    * 准备参数
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executePrepareparam1(context:any,params:any,isloading:boolean){
        // 准备参数节点
    let tempDstParam0Context:any = this.paramsMap.get('Default').context?this.paramsMap.get('Default').context:{};
    let tempDstParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    let tempSrcParam0Data:any = this.paramsMap.get('Default').data?this.paramsMap.get('Default').data:{};
    Object.assign(tempDstParam0Data,{mailto:tempSrcParam0Data['mailtopk']});
    this.paramsMap.set('Default',{data:tempDstParam0Data,context:tempDstParam0Context});
        return this.paramsMap.get(this.defaultParamName).data;
    }

    /**
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executePrepareparam1(context,params,isloading);   
        }
    }


}