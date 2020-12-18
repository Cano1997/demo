import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';
import { MyTerritoryCountLogic } from './my-territory-count-logic';



/**
 * 我的地盘服务对象基类
 *
 * @export
 * @class IbzMyTerritoryServiceBase
 * @extends {EntityServie}
 */
export class IbzMyTerritoryServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzMyTerritoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMyTerritoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzMyTerritoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzmyterritory';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibzmyterritories';
        this.APPDETEXT = 'realname';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzmyterritories/${context.ibzmyterritory}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/ibzmyterritories`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/ibzmyterritories/${context.ibzmyterritory}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/ibzmyterritories/${context.ibzmyterritory}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/ibzmyterritories/${context.ibzmyterritory}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/ibzmyterritories/getdraft`,isloading);
        res.data.ibzmyterritory = data.ibzmyterritory;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzmyterritories/${context.ibzmyterritory}/checkkey`,data,isloading);
            return res;
    }

    /**
     * MobMenuCount接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async MobMenuCount(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().post(`/ibzmyterritories/mobmenucount`,isloading);
        res.data.ibzmyterritory = data.ibzmyterritory;
        
        return res;
    }

    /**
     * MyFavoriteCount接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async MyFavoriteCount(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().post(`/ibzmyterritories/myfavoritecount`,isloading);
        res.data.ibzmyterritory = data.ibzmyterritory;
        
        return res;
    }

    /**
     * MyTerritoryCount接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async MyTerritoryCount(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().post(`/ibzmyterritories/myterritorycount`,isloading);
        res.data.ibzmyterritory = data.ibzmyterritory;
        
        return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/ibzmyterritories/${context.ibzmyterritory}/save`,data,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzmyterritories/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyWork接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchMyWork(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzmyterritories/fetchmywork`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyWorkMob接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchMyWorkMob(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzmyterritories/fetchmyworkmob`,tempData,isloading);
        return res;
    }

    /**
     * FetchWelcome接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMyTerritoryServiceBase
     */
    public async FetchWelcome(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzmyterritories/fetchwelcome`,tempData,isloading);
        return res;
    }
}