import { Verify } from '@/ibiz-core/utils';


/**
 * 取消置顶
 *
 * @export
 * @class CancelProductTopLogicBase
 */
export class CancelProductTopLogicBase {

    /**
     * 名称
     * 
     * @memberof  CancelProductTopLogicBase
     */
    private name:string ="CancelProductTop";

    /**
     * 唯一标识
     * 
     * @memberof  CancelProductTopLogicBase
     */
    private id:string = "C5EF7BC5-38C8-49EC-927B-A09B6151CC0E";

    /**
     * 默认参数名称
     * 
     * @memberof  CancelProductTopLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  CancelProductTopLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  CancelProductTopLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CancelProductTopLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  CancelProductTopLogicBase
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
    * 删除置顶
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeRawsqlcall1(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
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
            return this.executeRawsqlcall1(context,params,isloading);   
        }
    }


}