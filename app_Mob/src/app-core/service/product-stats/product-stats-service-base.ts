import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 产品统计服务对象基类
 *
 * @export
 * @class ProductStatsServiceBase
 * @extends {EntityServie}
 */
export class ProductStatsServiceBase extends EntityService {

    /**
     * Creates an instance of  ProductStatsServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductStatsServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductStatsServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='productstats';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'productstats';
        this.APPDETEXT = 'name';
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
     * @memberof ProductStatsServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/productstats/${context.productstats}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
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
        let res:any = await Http.getInstance().post(`/productstats`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/productstats/${context.productstats}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/productstats/${context.productstats}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/productstats/${context.productstats}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/productstats/getdraft`,isloading);
        res.data.productstats = data.productstats;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/productstats/${context.productstats}/checkkey`,data,isloading);
            return res;
    }

    /**
     * GetTestStats接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async GetTestStats(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/productstats/${context.productstats}/getteststats`,isloading);
            
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/productstats/${context.productstats}/save`,data,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productstats/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchNoOpenProduct接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductStatsServiceBase
     */
    public async FetchNoOpenProduct(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productstats/fetchnoopenproduct`,tempData,isloading);
        return res;
    }
}