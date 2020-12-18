import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 需求模块服务对象基类
 *
 * @export
 * @class ProductModuleServiceBase
 * @extends {EntityServie}
 */
export class ProductModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  ProductModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='productmodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'productmodules';
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
     * @memberof ProductModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/${context.productmodule}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/productmodules/${context.productmodule}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/productmodules`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/productmodules`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productmodules/${context.productmodule}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/productmodules/${context.productmodule}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let res:any = Http.getInstance().delete(`/products/${context.product}/productmodules/${context.productmodule}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/productmodules/${context.productmodule}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productmodules/${context.productmodule}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/productmodules/${context.productmodule}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/productmodules/getdraft`,isloading);
            res.data.productmodule = data.productmodule;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/productmodules/getdraft`,isloading);
        res.data.productmodule = data.productmodule;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productmodules/${context.productmodule}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/productmodules/${context.productmodule}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Fix接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async Fix(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productmodules/${context.productmodule}/fix`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/productmodules/${context.productmodule}/fix`,data,isloading);
            return res;
    }

    /**
     * RemoveModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async RemoveModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/productmodules/${context.productmodule}/removemodule`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/productmodules/${context.productmodule}/removemodule`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productmodules/${context.productmodule}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/productmodules/${context.productmodule}/save`,data,isloading);
            
            return res;
    }

    /**
     * SyncFromIBIZ接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async SyncFromIBIZ(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.productmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/productmodules/${context.productmodule}/syncfromibiz`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/productmodules/${context.productmodule}/syncfromibiz`,data,isloading);
            return res;
    }

    /**
     * FetchByPath接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchByPath(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchbypath`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchbypath`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchParentModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchparentmodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchparentmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchRoot(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchroot`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchroot`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot_NoBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchRoot_NoBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchroot_nobranch`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchroot_nobranch`,tempData,isloading);
        return res;
    }

    /**
     * FetchStoryModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductModuleServiceBase
     */
    public async FetchStoryModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/productmodules/fetchstorymodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/productmodules/fetchstorymodule`,tempData,isloading);
        return res;
    }
}