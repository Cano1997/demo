import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 用例步骤服务对象基类
 *
 * @export
 * @class CaseStepServiceBase
 * @extends {EntityServie}
 */
export class CaseStepServiceBase extends EntityService {

    /**
     * Creates an instance of  CaseStepServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseStepServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof CaseStepServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='casestep';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'casesteps';
        this.APPDETEXT = 'expect';
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
     * @memberof CaseStepServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
            
            return res;
        }
        if(context.story && context.case && context.casestep){
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
            
            return res;
        }
        if(context.product && context.case && context.casestep){
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
            
            return res;
        }
        if(context.case && context.casestep){
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}/select`,isloading);
            
            return res;
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
            
            return res;
        }
        if(context.story && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps`,data,isloading);
            
            return res;
        }
        if(context.product && context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps`,data,isloading);
            
            return res;
        }
        if(context.case && true){
            let masterData:any = {};
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps`,data,isloading);
            
            return res;
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/cases/${context.case}/casesteps/${context.casestep}`,data,isloading);
            
            return res;
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.story && context.case && context.casestep){
            let res:any = Http.getInstance().delete(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.product && context.case && context.casestep){
            let res:any = Http.getInstance().delete(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
        if(context.case && context.casestep){
            let res:any = Http.getInstance().delete(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            return res;
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            
            return res;
        }
        if(context.story && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            
            return res;
        }
        if(context.product && context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            
            return res;
        }
        if(context.case && context.casestep){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/casesteps/${context.casestep}`,isloading);
            
            return res;
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            
            return res;
        }
        if(context.story && context.case && true){
            let res:any = await Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            
            return res;
        }
        if(context.product && context.case && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            
            return res;
        }
        if(context.case && true){
            let res:any = await Http.getInstance().get(`/cases/${context.case}/casesteps/getdraft`,isloading);
            res.data.casestep = data.casestep;
            
            return res;
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/checkkey`,data,isloading);
            
            return res;
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            
            return res;
        }
        if(context.story && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            
            return res;
        }
        if(context.product && context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            
            return res;
        }
        if(context.case && context.casestep){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/cases/${context.case}/casesteps/${context.casestep}/save`,data,isloading);
            
            return res;
        }
    }

    /**
     * FetchCurTest接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchCurTest(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchcurtest`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchcurtest`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchcurtest`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchcurtest`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchDefault1接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchDefault1(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchdefault1`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchMob接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchMob(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchmob`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchmob`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchmob`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchmob`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversion`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchVersions接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchVersions(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
            return res;
        }
        if(context.story && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/stories/${context.story}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
            return res;
        }
        if(context.product && context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
            return res;
        }
        if(context.case && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/cases/${context.case}/casesteps/fetchversions`,tempData,isloading);
            return res;
        }
    }

    /**
     * FetchTempCurTest接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempCurTest(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempCurTest ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTempDefault1接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempDefault1(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempDefault1 ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTempMob接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempMob(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempMob ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTempVersion接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempVersion(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempVersion ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }

    /**
     * FetchTempVersions接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseStepServiceBase
     */
    public async FetchTempVersions(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchTempVersions ---FETCHTEMP
        if(context.srfsessionkey && !Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
            let result:any = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
            if(result){
                return new HttpResponse(200,{});
            }else{
                return new HttpResponse(200,{});
            } 
        }else{
            return new HttpResponse(200,{});
        }
    }
}