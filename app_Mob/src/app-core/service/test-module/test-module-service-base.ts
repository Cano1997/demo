import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 测试模块服务对象基类
 *
 * @export
 * @class TestModuleServiceBase
 * @extends {EntityServie}
 */
export class TestModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  TestModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  TestModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof TestModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='testmodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'testmodules';
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
     * @memberof TestModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/${context.testmodule}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/testmodules/${context.testmodule}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/testmodules`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/testmodules`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/testmodules/${context.testmodule}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/testmodules/${context.testmodule}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let res:any = Http.getInstance().delete(`/products/${context.product}/testmodules/${context.testmodule}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/testmodules/${context.testmodule}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let res:any = await Http.getInstance().get(`/products/${context.product}/testmodules/${context.testmodule}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/testmodules/${context.testmodule}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/testmodules/getdraft`,isloading);
            res.data.testmodule = data.testmodule;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/testmodules/getdraft`,isloading);
        res.data.testmodule = data.testmodule;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/testmodules/${context.testmodule}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/testmodules/${context.testmodule}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Fix接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async Fix(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/testmodules/${context.testmodule}/fix`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/testmodules/${context.testmodule}/fix`,data,isloading);
            return res;
    }

    /**
     * RemoveModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async RemoveModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/testmodules/${context.testmodule}/removemodule`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/testmodules/${context.testmodule}/removemodule`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/testmodules/${context.testmodule}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/testmodules/${context.testmodule}/save`,data,isloading);
            
            return res;
    }

    /**
     * FetchByPath接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchByPath(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchbypath`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchbypath`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchParentModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchparentmodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchparentmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchRoot(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchroot`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchroot`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot_NoBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchRoot_NoBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchroot_nobranch`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchroot_nobranch`,tempData,isloading);
        return res;
    }

    /**
     * FetchTestModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestModuleServiceBase
     */
    public async FetchTestModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/testmodules/fetchtestmodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/testmodules/fetchtestmodule`,tempData,isloading);
        return res;
    }
}