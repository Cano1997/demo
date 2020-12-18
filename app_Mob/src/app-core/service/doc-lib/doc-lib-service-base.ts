import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 文档库服务对象基类
 *
 * @export
 * @class DocLibServiceBase
 * @extends {EntityServie}
 */
export class DocLibServiceBase extends EntityService {

    /**
     * Creates an instance of  DocLibServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof DocLibServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='doclib';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'doclibs';
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
     * @memberof DocLibServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/doclibs/${context.doclib}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
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
        let res:any = await Http.getInstance().post(`/doclibs`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/doclibs/${context.doclib}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/doclibs/${context.doclib}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/doclibs/${context.doclib}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/doclibs/getdraft`,isloading);
        res.data.doclib = data.doclib;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibs/${context.doclib}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Collect接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async Collect(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibs/${context.doclib}/collect`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/doclibs/${context.doclib}/save`,data,isloading);
            
            return res;
    }

    /**
     * UnCollect接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async UnCollect(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibs/${context.doclib}/uncollect`,data,isloading);
            return res;
    }

    /**
     * FetchByCustom接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchByCustom(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchbycustom`,tempData,isloading);
        return res;
    }

    /**
     * FetchByProduct接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchByProduct(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/doclibs/fetchbyproduct`,tempData,isloading);
        return res;
    }

    /**
     * FetchByProductNotFiles接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchByProductNotFiles(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchbyproductnotfiles`,tempData,isloading);
        return res;
    }

    /**
     * FetchByProject接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchByProject(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/doclibs/fetchbyproject`,tempData,isloading);
        return res;
    }

    /**
     * FetchByProjectNotFiles接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchByProjectNotFiles(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchbyprojectnotfiles`,tempData,isloading);
        return res;
    }

    /**
     * FetchCurDocLib接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchCurDocLib(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchcurdoclib`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavourites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchMyFavourites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchmyfavourites`,tempData,isloading);
        return res;
    }

    /**
     * FetchRootModuleMuLu接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibServiceBase
     */
    public async FetchRootModuleMuLu(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibs/fetchrootmodulemulu`,tempData,isloading);
        return res;
    }
}