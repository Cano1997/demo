import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 任务模块服务对象基类
 *
 * @export
 * @class ProjectModuleServiceBase
 * @extends {EntityServie}
 */
export class ProjectModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  ProjectModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProjectModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='projectmodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'projectmodules';
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
     * @memberof ProjectModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/projectmodules/${context.projectmodule}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/projectmodules`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/projectmodules/${context.projectmodule}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/projectmodules/${context.projectmodule}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/projectmodules/${context.projectmodule}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/projectmodules/${context.projectmodule}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/projectmodules/${context.projectmodule}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/projectmodules/${context.projectmodule}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/projectmodules/getdraft`,isloading);
            res.data.projectmodule = data.projectmodule;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/projectmodules/getdraft`,isloading);
        res.data.projectmodule = data.projectmodule;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/projectmodules/${context.projectmodule}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Fix接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Fix(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/fix`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/projectmodules/${context.projectmodule}/fix`,data,isloading);
            return res;
    }

    /**
     * RemoveModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async RemoveModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/projectmodules/${context.projectmodule}/removemodule`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/projectmodules/${context.projectmodule}/removemodule`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.projectmodule){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/projectmodules/${context.projectmodule}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/projectmodules/${context.projectmodule}/save`,data,isloading);
            
            return res;
    }

    /**
     * FetchByPath接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchByPath(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchbypath`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchbypath`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchParentModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchparentmodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchparentmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchRoot(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchroot`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchroot`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot_NoBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchRoot_NoBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchroot_nobranch`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchroot_nobranch`,tempData,isloading);
        return res;
    }

    /**
     * FetchRoot_Task接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchRoot_Task(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchroot_task`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchroot_task`,tempData,isloading);
        return res;
    }

    /**
     * FetchTaskModules接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectModuleServiceBase
     */
    public async FetchTaskModules(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/projectmodules/fetchtaskmodules`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/projectmodules/fetchtaskmodules`,tempData,isloading);
        return res;
    }
}