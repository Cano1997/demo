import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 周报服务对象基类
 *
 * @export
 * @class IbzWeeklyServiceBase
 * @extends {EntityServie}
 */
export class IbzWeeklyServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzWeeklyServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzWeeklyServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzWeeklyServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzweekly';
        this.APPDEKEY = 'ibzweeklyid';
        this.APPDENAME = 'ibzweeklies';
        this.APPDETEXT = 'ibzweeklyname';
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
     * @memberof IbzWeeklyServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzweeklies/${context.ibzweekly}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
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
        let res:any = await Http.getInstance().post(`/ibzweeklies`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/ibzweeklies/${context.ibzweekly}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/ibzweeklies/${context.ibzweekly}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/ibzweeklies/${context.ibzweekly}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/ibzweeklies/getdraft`,isloading);
        res.data.ibzweekly = data.ibzweekly;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/checkkey`,data,isloading);
            return res;
    }

    /**
     * CreateEveryWeekReport接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async CreateEveryWeekReport(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/createeveryweekreport`,data,isloading);
            return res;
    }

    /**
     * CreateGetLastWeekPlanAndWork接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async CreateGetLastWeekPlanAndWork(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/creategetlastweekplanandwork`,data,isloading);
            return res;
    }

    /**
     * EditGetLastWeekTaskAndComTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async EditGetLastWeekTaskAndComTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/editgetlastweektaskandcomtask`,data,isloading);
            return res;
    }

    /**
     * HaveRead接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async HaveRead(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/haveread`,data,isloading);
            return res;
    }

    /**
     * JugThisWeekCreateWeekly接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async JugThisWeekCreateWeekly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/jugthisweekcreateweekly`,data,isloading);
            return res;
    }

    /**
     * PushUserWeekly接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async PushUserWeekly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/pushuserweekly`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/save`,data,isloading);
            
            return res;
    }

    /**
     * Submit接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async Submit(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/submit`,data,isloading);
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzweeklies/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyNotSubmit接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async FetchMyNotSubmit(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzweeklies/fetchmynotsubmit`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyWeekly接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async FetchMyWeekly(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/ibzweeklies/fetchmyweekly`,tempData,isloading);
        return res;
    }
}