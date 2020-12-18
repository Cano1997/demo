import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 文档库分类服务对象基类
 *
 * @export
 * @class DocLibModuleServiceBase
 * @extends {EntityServie}
 */
export class DocLibModuleServiceBase extends EntityService {

    /**
     * Creates an instance of  DocLibModuleServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibModuleServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof DocLibModuleServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='doclibmodule';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'doclibmodules';
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
     * @memberof DocLibModuleServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/doclibmodules/${context.doclibmodule}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
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
        let res:any = await Http.getInstance().post(`/doclibmodules`,data,isloading);
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/doclibmodules/${context.doclibmodule}`,data,isloading);
            
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().delete(`/doclibmodules/${context.doclibmodule}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/doclibmodules/${context.doclibmodule}`,isloading);
            
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/doclibmodules/getdraft`,isloading);
        res.data.doclibmodule = data.doclibmodule;
        
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Collect接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Collect(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/collect`,data,isloading);
            return res;
    }

    /**
     * DocLibModuleNFavorite接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async DocLibModuleNFavorite(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/doclibmodulenfavorite`,data,isloading);
            return res;
    }

    /**
     * DoclibModuleFavorite接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async DoclibModuleFavorite(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/doclibmodulefavorite`,data,isloading);
            return res;
    }

    /**
     * Fix接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Fix(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/fix`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/save`,data,isloading);
            
            return res;
    }

    /**
     * UnCollect接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async UnCollect(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().post(`/doclibmodules/${context.doclibmodule}/uncollect`,data,isloading);
            return res;
    }

    /**
     * FetchAllDocLibModule_Custom接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchAllDocLibModule_Custom(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchalldoclibmodule_custom`,tempData,isloading);
        return res;
    }

    /**
     * FetchAllDoclibModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchAllDoclibModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchalldoclibmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchChildModuleByParent接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchChildModuleByParent(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchchildmodulebyparent`,tempData,isloading);
        return res;
    }

    /**
     * FetchChildModuleByRealParent接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchChildModuleByRealParent(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchchildmodulebyrealparent`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavourites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchMyFavourites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchmyfavourites`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchParentModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchparentmodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchRootModuleMuLu接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchRootModuleMuLu(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchrootmodulemulu`,tempData,isloading);
        return res;
    }

    /**
     * FetchRootModuleMuLuByRoot接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchRootModuleMuLuByRoot(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchrootmodulemulubyroot`,tempData,isloading);
        return res;
    }

    /**
     * FetchRootModuleMuLuBysrfparentkey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof DocLibModuleServiceBase
     */
    public async FetchRootModuleMuLuBysrfparentkey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/doclibmodules/fetchrootmodulemulubysrfparentkey`,tempData,isloading);
        return res;
    }
}