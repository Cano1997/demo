import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';
import { GetCurUserConcatLogic } from './get-cur-user-concat-logic';



/**
 * 需求服务对象基类
 *
 * @export
 * @class StoryServiceBase
 * @extends {EntityServie}
 */
export class StoryServiceBase extends EntityService {

    /**
     * Creates an instance of  StoryServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof StoryServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='story';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'stories';
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
     * @memberof StoryServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/${context.story}/select`,isloading);
            
            return res;
        }
            let res:any = Http.getInstance().get(`/stories/${context.story}/select`,isloading);
            
            return res;
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            if(!data.srffrontuf || data.srffrontuf !== "1"){
                data[this.APPDEKEY] = null;
            }
            if(data.srffrontuf){
                delete data.srffrontuf;
            }
            let tempContext:any = JSON.parse(JSON.stringify(context));
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories`,data,isloading);
            this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs?res.data.bugs:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs?res.data.storyspecs:[]));
            this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));
            
            return res;
        }
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/stories`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs?res.data.bugs:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs?res.data.storyspecs:[]));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));
        
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().put(`/products/${context.product}/stories/${context.story}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/stories/${context.story}`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let res:any = Http.getInstance().delete(`/products/${context.product}/stories/${context.story}`,isloading);
            return res;
        }
            let res:any = Http.getInstance().delete(`/stories/${context.story}`,isloading);
            return res;
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = await Http.getInstance().get(`/stories/${context.story}`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/getdraft`,isloading);
            res.data.story = data.story;
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
        let res:any = await  Http.getInstance().get(`/stories/getdraft`,isloading);
        res.data.story = data.story;
                    this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

        return res;
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Activate(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/activate`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/activate`,data,isloading);
            return res;
    }

    /**
     * AllPush接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async AllPush(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/allpush`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/allpush`,data,isloading);
            return res;
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async AssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/assignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/assignto`,data,isloading);
            return res;
    }

    /**
     * BatchAssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchAssignTo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchassignto`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchassignto`,data,isloading);
            return res;
    }

    /**
     * BatchChangeBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeBranch(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangebranch`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchchangebranch`,data,isloading);
            return res;
    }

    /**
     * BatchChangeModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangemodule`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchchangemodule`,data,isloading);
            return res;
    }

    /**
     * BatchChangePlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangePlan(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangeplan`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchchangeplan`,data,isloading);
            return res;
    }

    /**
     * BatchChangeStage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeStage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchchangestage`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchchangestage`,data,isloading);
            return res;
    }

    /**
     * BatchClose接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchClose(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchclose`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchclose`,data,isloading);
            return res;
    }

    /**
     * BatchReview接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchReview(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchreview`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchreview`,data,isloading);
            return res;
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/batchunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/batchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BugToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BugToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/bugtostory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/bugtostory`,data,isloading);
            return res;
    }

    /**
     * BuildBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BuildBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/buildbatchunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/buildbatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BuildLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/buildlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/buildlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BuildUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/buildunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/buildunlinkstory`,data,isloading);
            return res;
    }

    /**
     * BuildUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async BuildUnlinkStorys(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/buildunlinkstorys`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/buildunlinkstorys`,data,isloading);
            return res;
    }

    /**
     * Change接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Change(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/change`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/change`,data,isloading);
            return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/checkkey`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/checkkey`,data,isloading);
            return res;
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/close`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/close`,data,isloading);
            return res;
    }

    /**
     * GetStorySpec接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetStorySpec(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/getstoryspec`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/getstoryspec`,data,isloading);
            return res;
    }

    /**
     * GetStorySpecs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetStorySpecs(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/${context.story}/getstoryspecs`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = await Http.getInstance().get(`/stories/${context.story}/getstoryspecs`,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
    }

    /**
     * ImportPlanStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ImportPlanStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/importplanstories`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/importplanstories`,data,isloading);
            return res;
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async LinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/linkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/linkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectbatchunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/projectbatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/projectlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/projectunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ProjectUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ProjectUnlinkStorys(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/projectunlinkstorys`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/projectunlinkstorys`,data,isloading);
            return res;
    }

    /**
     * Push接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Push(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/push`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/push`,data,isloading);
            return res;
    }

    /**
     * ReleaseBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ReleaseLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releaselinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/releaselinkstory`,data,isloading);
            return res;
    }

    /**
     * ReleaseUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releaseunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/releaseunlinkstory`,data,isloading);
            return res;
    }

    /**
     * ResetReviewedBy接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ResetReviewedBy(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/resetreviewedby`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/resetreviewedby`,data,isloading);
            return res;
    }

    /**
     * Review接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Review(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/review`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/review`,data,isloading);
            return res;
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/stories/${context.story}/save`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
    }

    /**
     * SendMessage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async SendMessage(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/sendmessage`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/sendmessage`,data,isloading);
            return res;
    }

    /**
     * SendMsgPreProcess接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async SendMsgPreProcess(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/sendmsgpreprocess`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/sendmsgpreprocess`,data,isloading);
            return res;
    }

    /**
     * StoryFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async StoryFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/storyfavorites`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/storyfavorites`,data,isloading);
            return res;
    }

    /**
     * StoryNFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async StoryNFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/storynfavorites`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/storynfavorites`,data,isloading);
            return res;
    }

    /**
     * SyncFromIbiz接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async SyncFromIbiz(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/syncfromibiz`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/syncfromibiz`,data,isloading);
            return res;
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async UnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/unlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/unlinkstory`,data,isloading);
            return res;
    }

    /**
     * FetchAssignedToMyStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchAssignedToMyStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchassignedtomystory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchassignedtomystory`,tempData,isloading);
        return res;
    }

    /**
     * FetchAssignedToMyStoryCalendar接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchAssignedToMyStoryCalendar(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchassignedtomystorycalendar`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchassignedtomystorycalendar`,tempData,isloading);
        return res;
    }

    /**
     * FetchBugStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchBugStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchbugstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchbugstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkCompletedStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildLinkCompletedStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchbuildlinkcompletedstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchbuildlinkcompletedstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildLinkableStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildLinkableStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchbuildlinkablestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchbuildlinkablestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchBuildStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchbuildstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchbuildstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchByModule(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchbymodule`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchbymodule`,tempData,isloading);
        return res;
    }

    /**
     * FetchCaseStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchCaseStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchcasestory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchcasestory`,tempData,isloading);
        return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchGetProductStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchGetProductStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchgetproductstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchgetproductstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyCurOpenedStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchMyCurOpenedStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchmycuropenedstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchmycuropenedstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchMyFavorites接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchMyFavorites(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchmyfavorites`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchmyfavorites`,tempData,isloading);
        return res;
    }

    /**
     * FetchNotCurPlanLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchNotCurPlanLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchnotcurplanlinkstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchnotcurplanlinkstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchParentDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchparentdefault`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchparentdefault`,tempData,isloading);
        return res;
    }

    /**
     * FetchParentDefaultQ接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchParentDefaultQ(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchparentdefaultq`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchparentdefaultq`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchProjectLinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchprojectlinkstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchprojectlinkstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchProjectStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchProjectStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchprojectstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchprojectstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseLinkableStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchReleaseLinkableStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchreleaselinkablestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchreleaselinkablestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReleaseStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchReleaseStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchreleasestories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchreleasestories`,tempData,isloading);
        return res;
    }

    /**
     * FetchReportStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchReportStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().post(`/products/${context.product}/stories/fetchreportstories`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().post(`/stories/fetchreportstories`,tempData,isloading);
        return res;
    }

    /**
     * FetchStoryChild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryChild(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchstorychild`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchstorychild`,tempData,isloading);
        return res;
    }

    /**
     * FetchStoryRelated接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryRelated(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchstoryrelated`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchstoryrelated`,tempData,isloading);
        return res;
    }

    /**
     * FetchSubStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchSubStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchsubstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchsubstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchTaskRelatedStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchTaskRelatedStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchtaskrelatedstory`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchtaskrelatedstory`,tempData,isloading);
        return res;
    }

    /**
     * FetchView接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async FetchView(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let tempData:any = JSON.parse(JSON.stringify(data));
            let res:any = Http.getInstance().get(`/products/${context.product}/stories/fetchview`,tempData,isloading);
            return res;
        }
        let tempData:any = JSON.parse(JSON.stringify(data));
        let res:any = Http.getInstance().get(`/stories/fetchview`,tempData,isloading);
        return res;
    }

    /**
     * GetTaskReStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetTaskReStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * GetUserConcat接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetUserConcat(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let appLogic:GetCurUserConcatLogic = new GetCurUserConcatLogic({context:JSON.parse(JSON.stringify(context)),data:JSON.parse(JSON.stringify(data))});
        const res = await appLogic.onExecute(context,data,isloading?true:false);
        return {status:200,data:res};
    }

    /**
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ToStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}