import { Verify } from '@/ibiz-core/utils';


/**
 * 用例取消收藏
 *
 * @export
 * @class CaseNFavoriteLogicBase
 */
export class CaseNFavoriteLogicBase {

    /**
     * 名称
     * 
     * @memberof  CaseNFavoriteLogicBase
     */
    private name:string ="CaseNFavorite";

    /**
     * 唯一标识
     * 
     * @memberof  CaseNFavoriteLogicBase
     */
    private id:string = "699454E8-70DD-4030-8491-A58C05B1FD40";

    /**
     * 默认参数名称
     * 
     * @memberof  CaseNFavoriteLogicBase
     */
    private defaultParamName:string = "Default";

    /**
     * 参数集合
     * 
     * @memberof  CaseNFavoriteLogicBase
     */
    private paramsMap:Map<string,any> = new Map();

    /**
     * Creates an instance of  CaseNFavoriteLogicBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseNFavoriteLogicBase
     */
    constructor(opts: any = {}) {
        this.initParams(opts);
    }

    /**
     * 初始化参数集合
     * 
     * @param {*} [opts={}]
     * @memberof  CaseNFavoriteLogicBase
     */
    public initParams(opts:any){
        this.paramsMap.set('IbzFavorite',{});
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
    * 开始
    * 
    * @param params 传入参数
    */
    private async executeBegin(context:any,params:any,isloading:boolean){
        //开始节点
        if(this.compute0Cond(params)){
            return this.executeCaseNFavrite(context,params,isloading);   
        }
    }

    /**
    * 用例取消收藏
    * 
    * @param context 应用上下文
    * @param params 传入参数
    */
    private async executeCaseNFavrite(context:any,params:any,isloading:boolean){
        // RAWSQLCALL暂未支持
        console.log("RAWSQLCALL暂未支持");
        return this.paramsMap.get(this.defaultParamName).data;
    }


}