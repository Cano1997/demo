import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 项目团队服务对象基类
 *
 * @export
 * @class IbzprojectteamnestServiceBase
 * @extends {EntityServie}
 */
export class IbzprojectteamnestServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzprojectteamnestServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzprojectteamnestServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzprojectteamnestServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzprojectteamnest';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzprojectteamnests';
        this.APPDETEXT = 'account';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * GetUserRole接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async GetUserRole(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project &&  true){
            return Http.getInstance().post(`projects/${context.project}/ibzprojectteamnests/getuserrole`,data,isloading);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchRowEditDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchRowEditDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchRowEditDefault ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempRowEditDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchTempRowEditDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempRowEditDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTaskCntEstimateConsumedLeft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchTaskCntEstimateConsumedLeft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTaskCntEstimateConsumedLeft ---FETCH
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return {"status":200,"data":result};
            }else{
                return {"status":200,"data":[]};
            } 
        }else{
            return {"status":200,"data":[]};
        }
    }

    /**
     * FetchTempTaskCntEstimateConsumedLeft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzprojectteamnestServiceBase
     */
    public async FetchTempTaskCntEstimateConsumedLeft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempTaskCntEstimateConsumedLeft ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_ibzprojectteamnests') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }
}