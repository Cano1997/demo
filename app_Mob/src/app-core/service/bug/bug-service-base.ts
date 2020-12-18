import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';
import { GetCurUserConcatLogic } from './get-cur-user-concat-logic';



/**
 * Bug服务对象基类
 *
 * @export
 * @class BugServiceBase
 * @extends {EntityServie}
 */
export class BugServiceBase extends EntityService {

    /**
     * Creates an instance of  BugServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BugServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof BugServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='bug';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'bugs';
        this.APPDETEXT = 'title';
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
     * @memberof BugServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/select`,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}/select`,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/${context.bug}/select`,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/${context.bug}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/bugs/${context.bug}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs`,data,isloading);
            
            return res;
        }
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs`,data,isloading);
            
            return res;
        }
        if(context.story && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs`,data,isloading);
            
            return res;
        }
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/bugs`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/bugs/${context.bug}`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/bugs/${context.bug}`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/bugs/${context.bug}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/bugs/${context.bug}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.project && context.bug){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.story && context.bug){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/bugs/${context.bug}`,isloading);
            return res;
        }
        if(context.product && context.bug){
            let res:any = Http.getInstance().delete(`/products/${context.product}/bugs/${context.bug}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/bugs/${context.bug}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}`,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/${context.bug}`,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/${context.bug}`,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let res:any = await Http.getInstance().get(`/products/${context.product}/bugs/${context.bug}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/bugs/${context.bug}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            
            return res;
        }
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            
            return res;
        }
        if(context.story && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            
            return res;
        }
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/bugs/getdraft`,isloading);
            res.data.bug = data.bug;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/bugs/getdraft`,isloading);
        res.data.bug = data.bug;
        
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/activate`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/activate`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/activate`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/activate`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/activate`,data,isloading);
            return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/assignto`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/assignto`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/assignto`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/assignto`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/assignto`,data,isloading);
            return res;
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/batchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * BugFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BugFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/bugfavorites`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/bugfavorites`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/bugfavorites`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/bugfavorites`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/bugfavorites`,data,isloading);
            return res;
    }

    /**
     * BugNFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BugNFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/bugnfavorites`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/bugnfavorites`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/bugnfavorites`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/bugnfavorites`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/bugnfavorites`,data,isloading);
            return res;
    }

    /**
     * BuildBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildBatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildbatchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * BuildLinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildLinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildlinkbug`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async BuildUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/buildunlinkbug`,data,isloading);
            return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/close`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/close`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/close`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/close`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/close`,data,isloading);
            return res;
    }

    /**
     * Confirm接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Confirm(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/confirm`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/confirm`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/confirm`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/confirm`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/confirm`,data,isloading);
            return res;
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async LinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/linkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/linkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/linkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/linkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/linkbug`,data,isloading);
            return res;
    }

    /**
     * ReleaaseBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaaseBatchUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaasebatchunlinkbug`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkBugbyBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbybug`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkBugbyLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyLeftBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaselinkbugbyleftbug`,data,isloading);
            return res;
    }

    /**
     * ReleaseUnLinkBugbyLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseUnLinkBugbyLeftBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaseunlinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaseunlinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaseunlinkbugbyleftbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaseunlinkbugbyleftbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaseunlinkbugbyleftbug`,data,isloading);
            return res;
    }

    /**
     * ReleaseUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ReleaseUnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/releaseunlinkbug`,data,isloading);
            return res;
    }

    /**
     * Resolve接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Resolve(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/resolve`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/resolve`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/resolve`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/resolve`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/resolve`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/save`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/save`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/save`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/bugs/${context.bug}/save`,data,isloading);
            
            return res;
    }

    /**
     * SendMessage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async SendMessage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/sendmessage`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/sendmessage`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/sendmessage`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/sendmessage`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/sendmessage`,data,isloading);
            return res;
    }

    /**
     * SendMsgPreProcess接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async SendMsgPreProcess(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/sendmsgpreprocess`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/sendmsgpreprocess`,data,isloading);
            return res;
    }

    /**
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async ToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/tostory`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/tostory`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/tostory`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/tostory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/tostory`,data,isloading);
            return res;
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async UnlinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/unlinkbug`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/bugs/${context.bug}/unlinkbug`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/bugs/${context.bug}/unlinkbug`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/bugs/${context.bug}/unlinkbug`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/bugs/${context.bug}/unlinkbug`,data,isloading);
            return res;
    }

    /**
     * UpdateStoryVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async UpdateStoryVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/bugs/${context.bug}/updatestoryversion`,data,isloading);
            
            return res;
        }
        if(context.project && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/bugs/${context.bug}/updatestoryversion`,data,isloading);
            
            return res;
        }
        if(context.story && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/bugs/${context.bug}/updatestoryversion`,data,isloading);
            
            return res;
        }
        if(context.product && context.bug){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/bugs/${context.bug}/updatestoryversion`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/bugs/${context.bug}/updatestoryversion`,data,isloading);
            return res;
    }

    /**
     * FetchAssignedToMyBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchAssignedToMyBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchassignedtomybug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchassignedtomybug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchassignedtomybug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchassignedtomybug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchassignedtomybug`,tempData,isloading);
        return res;
    }

    /**
     * FetchAssignedToMyBugPc接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchAssignedToMyBugPc(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchassignedtomybugpc`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchassignedtomybugpc`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchassignedtomybugpc`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchassignedtomybugpc`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchassignedtomybugpc`,tempData,isloading);
        return res;
    }

    /**
     * FetchBugsByBuild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBugsByBuild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchbugsbybuild`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchbugsbybuild`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchbugsbybuild`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchbugsbybuild`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchbugsbybuild`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchbuildbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchbuildbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchbuildbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchbuildbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkResolvedBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildLinkResolvedBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchbuildlinkresolvedbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildOpenBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildOpenBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildopenbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchbuildopenbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchbuildopenbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchbuildopenbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchbuildopenbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebug`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugmodule`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugmodule`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugmodule`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugmodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugModule_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugModule_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugmodule_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugmodule_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugmodule_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugmodule_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugmodule_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugOpenedBy接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugOpenedBy(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugopenedby`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugopenedby`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugopenedby`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugopenedby`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugopenedby`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugOpenedBy_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugOpenedBy_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugopenedby_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugopenedby_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugopenedby_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugopenedby_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugopenedby_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugRES接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugRES(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugres`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugres`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugres`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugres`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugres`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugRESOLVEDBY接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugRESOLVEDBY(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugresolvedby`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugresolvedby`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugresolvedby`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugresolvedby`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugresolvedby`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugRESOLVEDBY_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugRESOLVEDBY_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugresolvedby_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugresolvedby_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugresolvedby_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugresolvedby_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugresolvedby_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugResolution_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugResolution_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugresolution_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugresolution_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugresolution_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugresolution_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugresolution_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugSeverity_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugSeverity_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugseverity_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugseverity_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugseverity_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugseverity_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugseverity_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugStatus_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugStatus_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugstatus_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugstatus_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugstatus_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugstatus_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugstatus_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildProduceBugType_Project接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchBuildProduceBugType_Project(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchbuildproducebugtype_project`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchbuildproducebugtype_project`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchbuildproducebugtype_project`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchbuildproducebugtype_project`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchbuildproducebugtype_project`,tempData,isloading);
        return res;
    }

    /**
     * FetchCurUserResolve接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchCurUserResolve(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchcuruserresolve`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchcuruserresolve`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchcuruserresolve`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchcuruserresolve`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchcuruserresolve`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyCurOpenedBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchMyCurOpenedBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchmycuropenedbug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchmycuropenedbug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchmycuropenedbug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchmycuropenedbug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchmycuropenedbug`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchMyFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchmyfavorites`,tempData,isloading);
        return res;
    }

    /**
     * FetchNotCurPlanLinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchNotCurPlanLinkBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchnotcurplanlinkbug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchnotcurplanlinkbug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchnotcurplanlinkbug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchnotcurplanlinkbug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchnotcurplanlinkbug`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchProjectBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchprojectbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchprojectbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchprojectbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchprojectbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchprojectbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchreleasebugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchreleasebugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchreleasebugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchreleasebugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchreleasebugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseLeftBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseLeftBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchreleaseleftbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchreleaseleftbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchreleaseleftbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchreleaseleftbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchreleaseleftbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseLinkableLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseLinkableLeftBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchreleaselinkableleftbug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleaselinkableleftbug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleaselinkableleftbug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchreleaselinkableleftbug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchreleaselinkableleftbug`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseLinkableResolvedBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseLinkableResolvedBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchreleaselinkableresolvedbug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchreleaselinkableresolvedbug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchreleaselinkableresolvedbug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchreleaselinkableresolvedbug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchreleaselinkableresolvedbug`,tempData,isloading);
        return res;
    }

    /**
     * FetchReportBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchReportBugs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugs/fetchreportbugs`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/bugs/fetchreportbugs`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugs/fetchreportbugs`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/bugs/fetchreportbugs`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/bugs/fetchreportbugs`,tempData,isloading);
        return res;
    }

    /**
     * FetchTaskRelatedBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async FetchTaskRelatedBug(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/bugs/fetchtaskrelatedbug`,tempData,isloading);
            return res;
        }
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/bugs/fetchtaskrelatedbug`,tempData,isloading);
            return res;
        }
        if(context.story && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/bugs/fetchtaskrelatedbug`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/bugs/fetchtaskrelatedbug`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/bugs/fetchtaskrelatedbug`,tempData,isloading);
        return res;
    }

    /**
     * GetUserConcat接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugServiceBase
     */
    public async GetUserConcat(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let appLogic:GetCurUserConcatLogic = new GetCurUserConcatLogic({context:JSON.parse(JSON.stringify(context)),data:JSON.parse(JSON.stringify(data))});
        const res = await appLogic.onExecute(context,data,isloading?true:false);
        return {status:200,data:res};
    }
}