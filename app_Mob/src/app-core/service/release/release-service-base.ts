import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 发布服务对象基类
 *
 * @export
 * @class ReleaseServiceBase
 * @extends {EntityServie}
 */
export class ReleaseServiceBase extends EntityService {

    /**
     * Creates an instance of  ReleaseServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ReleaseServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ReleaseServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='release';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'releases';
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
     * @memberof ReleaseServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let res:any = Http.getInstance().get(`/products/${context.product}/releases/${context.release}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/releases/${context.release}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/releases`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/releases/${context.release}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/releases/${context.release}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let res:any = Http.getInstance().delete(`/products/${context.product}/releases/${context.release}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/releases/${context.release}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let res:any = await Http.getInstance().get(`/products/${context.product}/releases/${context.release}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/releases/${context.release}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/releases/getdraft`,isloading);
            res.data.release = data.release;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/releases/getdraft`,isloading);
        res.data.release = data.release;
        
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/activate`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/activate`,data,isloading);
            return res;
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async BatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/batchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/batchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * ChangeStatus接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async ChangeStatus(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/changestatus`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/changestatus`,data,isloading);
            return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/checkkey`,data,isloading);
            return res;
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/linkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/linkbug`,data,isloading);
            return res;
    }

    /**
     * LinkBugbyBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async LinkBugbyBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/linkbugbybug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/linkbugbybug`,data,isloading);
            return res;
    }

    /**
     * LinkBugbyLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async LinkBugbyLeftBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/linkbugbyleftbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/linkbugbyleftbug`,data,isloading);
            return res;
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/linkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/linkstory`,data,isloading);
            return res;
    }

    /**
     * MobReleaseCounter接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async MobReleaseCounter(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/releases/${context.release}/mobreleasecounter`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/releases/${context.release}/mobreleasecounter`,data,isloading);
            return res;
    }

    /**
     * OneClickRelease接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async OneClickRelease(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/oneclickrelease`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/oneclickrelease`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/releases/${context.release}/save`,data,isloading);
            
            return res;
    }

    /**
     * Terminate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async Terminate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/terminate`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/terminate`,data,isloading);
            return res;
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async UnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.release){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/releases/${context.release}/unlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/releases/${context.release}/unlinkbug`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/releases/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/releases/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchReportRelease接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ReleaseServiceBase
     */
    public async FetchReportRelease(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/releases/fetchreportrelease`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/releases/fetchreportrelease`,tempData,isloading);
        return res;
    }
}