import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 版本服务对象基类
 *
 * @export
 * @class BuildServiceBase
 * @extends {EntityServie}
 */
export class BuildServiceBase extends EntityService {

    /**
     * Creates an instance of  BuildServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  BuildServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof BuildServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='build';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'builds';
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
     * @memberof BuildServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let res:any = Http.getInstance().get(`/projects/${context.project}/builds/${context.build}/select`,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let res:any = Http.getInstance().get(`/products/${context.product}/builds/${context.build}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/builds/${context.build}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
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
            let res:any = await Http.getInstance().post(`/projects/${context.project}/builds`,data,isloading);
            
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
            let res:any = await Http.getInstance().post(`/products/${context.product}/builds`,data,isloading);
            
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
        let res:any = await Http.getInstance().post(`/builds`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/builds/${context.build}`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/builds/${context.build}`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/builds/${context.build}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let res:any = Http.getInstance().delete(`/projects/${context.project}/builds/${context.build}`,isloading);
            return res;
        }
        if(context.product && context.build){
            let res:any = Http.getInstance().delete(`/products/${context.product}/builds/${context.build}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/builds/${context.build}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/builds/${context.build}`,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let res:any = await Http.getInstance().get(`/products/${context.product}/builds/${context.build}`,isloading);
            
            return res;
        }
            let res:any = await Http.getInstance().get(`/builds/${context.build}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let res:any = await Http.getInstance().get(`/projects/${context.project}/builds/getdraft`,isloading);
            res.data.build = data.build;
            
            return res;
        }
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/builds/getdraft`,isloading);
            res.data.build = data.build;
            
            return res;
        }
        let res:any = await  Http.getInstance().get(`/builds/getdraft`,isloading);
        res.data.build = data.build;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/builds/${context.build}/checkkey`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/builds/${context.build}/checkkey`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/builds/${context.build}/checkkey`,data,isloading);
            return res;
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/builds/${context.build}/linkstory`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/builds/${context.build}/linkstory`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/builds/${context.build}/linkstory`,data,isloading);
            return res;
    }

    /**
     * MobProjectBuildCounter接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async MobProjectBuildCounter(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/projects/${context.project}/builds/${context.build}/mobprojectbuildcounter`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/builds/${context.build}/mobprojectbuildcounter`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().put(`/builds/${context.build}/mobprojectbuildcounter`,data,isloading);
            return res;
    }

    /**
     * OneClickRelease接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async OneClickRelease(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/builds/${context.build}/oneclickrelease`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/builds/${context.build}/oneclickrelease`,data,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().post(`/builds/${context.build}/oneclickrelease`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/builds/${context.build}/save`,data,isloading);
            
            return res;
        }
        if(context.product && context.build){
            let masterData:any = {};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/builds/${context.build}/save`,data,isloading);
            
            return res;
        }
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/builds/${context.build}/save`,data,isloading);
            
            return res;
    }

    /**
     * FetchBugProductBuild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchBugProductBuild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/builds/fetchbugproductbuild`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/builds/fetchbugproductbuild`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/builds/fetchbugproductbuild`,tempData,isloading);
        return res;
    }

    /**
     * FetchCurProduct接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchCurProduct(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/builds/fetchcurproduct`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/builds/fetchcurproduct`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/builds/fetchcurproduct`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/builds/fetchdefault`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/builds/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/builds/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchTestBuild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchTestBuild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/builds/fetchtestbuild`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/builds/fetchtestbuild`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/builds/fetchtestbuild`,tempData,isloading);
        return res;
    }

    /**
     * FetchTestRounds接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchTestRounds(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/projects/${context.project}/builds/fetchtestrounds`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/builds/fetchtestrounds`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/builds/fetchtestrounds`,tempData,isloading);
        return res;
    }

    /**
     * FetchUpdateLog接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async FetchUpdateLog(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/projects/${context.project}/builds/fetchupdatelog`,tempData,isloading);
            return res;
        }
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/builds/fetchupdatelog`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/builds/fetchupdatelog`,tempData,isloading);
        return res;
    }

    /**
     * MentionTest接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BuildServiceBase
     */
    public async MentionTest(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}