import { appEntityServiceConstructor } from '@/app-core/service/app-entity-service-constructor';
import { Util, Http, Loading, HttpResponse } from '../utils';
import { CodeListService } from '@ibiz-core';
import { Store } from 'vuex';
/**
 * 部件服务基类
 *
 * @export
 * @class ControlServiceBase
 */
export class ControlServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {*}
     * @memberof ControlServiceBase
     */
    protected model: any = null;


    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ControlServiceBase
     */
    protected appDEName: string = '';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ControlServiceBase
     */
    protected appDeKey: string = '';

    /**
     * 是否为从数据临时模式
     *
     * @protected
     * @type {boolean}
     * @memberof ControlServiceBase
     */
    protected isTempMode: boolean = false;

    /**
     * 部件应用实体服务
     *
     * @protected
     * @type {*}
     * @memberof ControlServiceBase
     */
    protected service: any;

    /**
     * 代码表服务
     *
     * @protected
     * @type {CodeListService}
     * @memberof ControlServiceBase
     */
    protected codeListService: CodeListService;

    /**
     * 请求服务对象
     *
     * @protected
     * @type {Http}
     * @memberof ControlServiceBase
     */
    protected http: Http = Http.getInstance();

    /**
     * 获取实体服务
     *
     * @protected
     * @param {string} entityName
     * @returns {Promise<any>}
     * @memberof ControlServiceBase
     */
    protected getService(entityName: string): Promise<any> {
        return appEntityServiceConstructor.getService(entityName);
    }

        /**
     * 行为处理之前
     *
     * @protected
     * @param {string} [action]
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading=true]
     * @returns {Promise<any>}
     * @memberof ControlServiceBase
     */
    protected async onBeforeAction(action?: string, context: any = {}, data: any = {}, isLoading: boolean = true): Promise<any> {
        if (!this.service) {
            this.service = await this.getService(this.appDEName);
        }
        this.beforeAction(action, context, data);
    }

    /**
     * 行为处理之前
     *
     * @protected
     * @param {string} [action]
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<any>}
     * @memberof ControlServiceBase
     */
    protected async beforeAction(action?: string, context: any = {}, data: any = {}): Promise<any> { }


    /**
     * 添加数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof ControlServiceBase
     */
    public async add(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Create(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 删除数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof ControlServiceBase
     */
    public async delete(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Remove(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 修改数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof ControlServiceBase
     */
    public async update(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Update(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof ControlServiceBase
     */
    public async get(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Get(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 加载草稿
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof ControlServiceBase
     */
    public async loadDraft(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        let PrimaryKey = Util.createUUID();
        //仿真主键数据
        data[this.appDeKey] = PrimaryKey;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
            //console.log(response);
        } else {
            response = await this.service.GetDraft(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response, true);
            this.mergeDefaults(response);
        }
        response.data[this.appDeKey] = PrimaryKey;
        return response;
        
    }

    /**
     * 前台逻辑
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof EditServiceBase
     */
    public async frontLogic(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = new HttpResponse(200, null, { code: 100, message: `${action}前台逻辑未实现` });
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response, true);
        }
        return response;
    }

    /**
     * 处理请求数据
     *
     * @protected
     * @param {string} action 行为 
     * @param {*} [context={}] 上下文参数
     * @param {*} [data={}] 数据
     * @returns {*}
     * @memberof ControlServiceBase
     */
    protected handleRequestData(action: string, context: any = {}, data: any = {}, isMerge:boolean = false): any {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        if (context && context.srfsessionid) {
            context.srfsessionkey = context.srfsessionid;
            delete context.srfsessionid;
        }
        const dataItems: any[] = this.model.getDataItems();
        const requestData: any = {};
        if(isMerge && (data && data.viewparams)){
            Object.assign(requestData,data.viewparams);
        }
        dataItems.forEach((item: any) => {
            if (item && item.dataType && Object.is(item.dataType, 'FONTKEY')) {
                if (item && item.prop) {
                    requestData[item.prop] = context[item.name];
                }
            } else {
                if (item && item.prop) {
                    requestData[item.prop] = data[item.name];
                }
            }
        });
        return requestData;
    }

    /**
     * 处理response
     *
     * @param {string} action
     * @param {*} response
     * @memberof ControlService
     */
    public handleResponse(action: string, response: any, isCreate: boolean = false): any {
        return new HttpResponse(response.status, this.handleResponseData(action, response.data, isCreate))
    }

    /**
     * 处理返回数据
     *
     * @param {string} action
     * @param {*} response
     * @memberof ControlService
     */
    public handleResponseData(action: string, data: any = {}, isCreate?: boolean): any {
        return data;
    }

    /**
     * 只处理界面主键与应用实体主键之间的转化
     *
     * @param {*} data 传入数据
     * @returns {*}
     * @memberof ControlServiceBase
     */
    public handleDataWithKey(data: any): any {
        if (!this.model && Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        const dataItems: any[] = this.model.getDataItems();
        dataItems.forEach((item: any) => {
            if (item.dataType && Object.is(item.dataType, 'FONTKEY')) {
                data[item.prop] = data[item.name];
                delete data[item.name];
            }
        });
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof EditServiceBase
     */
    protected mergeDefaults(response: any = {}): void { }

    /**
     * Vue 状态管理器
     *
     * @public
     * @type {(any | null)}
     * @memberof AuthService
     */
    public $store: Store<any> | null = null;

    /**
     * Creates an instance of ControlService.
     * 
     * @param {*} [opts={}]
     * @memberof ControlService
     */
    constructor(opts: any = {}) {
        this.$store = opts.$store;
        this.codeListService = new CodeListService({ $store:opts.$store });
    }

    /**
     * 获取状态管理器
     *
     * @returns {(any | null)}
     * @memberof ControlService
     */
    public getStore(): Store<any> | null {
        return this.$store;
    }

}