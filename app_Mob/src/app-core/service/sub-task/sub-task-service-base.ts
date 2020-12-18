import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 任务服务对象基类
 *
 * @export
 * @class SubTaskServiceBase
 * @extends {EntityServie}
 */
export class SubTaskServiceBase extends EntityService {

    /**
     * Creates an instance of  SubTaskServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof SubTaskServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='subtask';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'subtasks';
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
     * @memberof SubTaskServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/subtasks/${context.subtask}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
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
        let res:any = await Http.getInstance().post(`/subtasks`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/subtasks/${context.subtask}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/subtasks/${context.subtask}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/subtasks/${context.subtask}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/subtasks/getdraft`,isloading);
        res.data.subtask = data.subtask;
        
        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/activate`,data,isloading);
            return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/assignto`,data,isloading);
            return res;
    }

    /**
     * Cancel接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Cancel(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/cancel`,data,isloading);
            return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/close`,data,isloading);
            return res;
    }

    /**
     * ConfirmStoryChange接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async ConfirmStoryChange(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/confirmstorychange`,data,isloading);
            return res;
    }

    /**
     * DeleteEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async DeleteEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/deleteestimate`,data,isloading);
            return res;
    }

    /**
     * EditEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async EditEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/editestimate`,data,isloading);
            return res;
    }

    /**
     * Finish接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Finish(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/finish`,data,isloading);
            return res;
    }

    /**
     * Pause接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Pause(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/pause`,data,isloading);
            return res;
    }

    /**
     * RecordEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async RecordEstimate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/recordestimate`,data,isloading);
            return res;
    }

    /**
     * Restart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Restart(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/restart`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/subtasks/${context.subtask}/save`,data,isloading);
            
            return res;
    }

    /**
     * SendMessage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async SendMessage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/sendmessage`,data,isloading);
            return res;
    }

    /**
     * SendMsgPreProcess接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async SendMsgPreProcess(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/sendmsgpreprocess`,data,isloading);
            return res;
    }

    /**
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async Start(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/start`,data,isloading);
            return res;
    }

    /**
     * TaskFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async TaskFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/taskfavorites`,data,isloading);
            return res;
    }

    /**
     * TaskNFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async TaskNFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/subtasks/${context.subtask}/tasknfavorites`,data,isloading);
            return res;
    }

    /**
     * FetchAssignedToMyTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchAssignedToMyTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchassignedtomytask`,tempData,isloading);
        return res;
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchbymodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchChildTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchChildTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchchildtask`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchdefaultrow`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchMyFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchmyfavorites`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchprojecttask`,tempData,isloading);
        return res;
    }

    /**
     * FetchRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchroottask`,tempData,isloading);
        return res;
    }

    /**
     * FetchTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/subtasks/fetchtypegroup`,tempData,isloading);
        return res;
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async CalcTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempAssignedToMyTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempAssignedToMyTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempChildTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempChildTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempDefaultRow(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempMyFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempMyFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempProjectTASK(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempRootTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchTempTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof SubTaskServiceBase
     */
    public async FetchTempTypeGroup(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}