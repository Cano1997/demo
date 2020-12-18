import { ControlServiceBase } from './control-service-base';
import { Util, HttpResponse } from '../utils';
/**
 * 地图部件服务基类
 *
 * @export
 * @class AppMenuServiceBase
 * @extends {ControlServiceBase}
 */
export class MapServiceBase extends ControlServiceBase {
       /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof MdServiceBase
     */
    public async search(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data, true);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.FetchDefault(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }


    /**
     * 地图项配置集合
     *
     * @protected
     * @type {any[]}
     * @memberof Mobmaptest
     */
    protected mapItemConfig: any = {};
 

    /**
     * 加载实体数据集
     *
     * @protected
     * @param {string} action 
     * @param {*} context
     * @param {*} data
     * @param {string} calendarItem
     * @param {string} [serviceName]
     * @returns {Promise<any[]>}
     * @memberof CalendarServiceBase
     */
    protected async loadDEDataSet(action: string, context: any, data: any, calendarItem: string, serviceName?: string): Promise<any[]> {
        if (serviceName) {
            const service: any = await this.getService(serviceName);
            const response: HttpResponse = await service[action](context, data);
            if (response.isError && response.isError()) {
                return Promise.reject(response);
            }
            return this.formatItem(response, calendarItem);
        }
        const response: HttpResponse = await this.service[action](context, data);
        if (response.isError && response.isError()) {
            return Promise.reject(response);
        }
        return this.formatItem(response, calendarItem);
    }

    /**
     * 格式化数据项
     *
     * @protected
     * @param {*} response
     * @param {string} type
     * @returns {any[]}
     * @memberof CalendarServiceBase
     */
    protected formatItem(response: any, type: string): any[] {
        if (response.data) {
            response.data.forEach((item: any) => {
                item.color = this.mapItemConfig[type].color;
                item.textColor = this.mapItemConfig[type].textColor;
                item.itemType = this.mapItemConfig[type].itemType;
            });
        }
        this.model.itemType = this.mapItemConfig[type].itemType;
        response = this.handleResponse(type, response);
        return response.data.records;
    }
    
    /**
     * 加载草稿
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof MdServiceBase
     */
    public async loadDraft(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        const response: any = await super.loadDraft(action, context, data, isLoading);
        // 处理返回数据，补充判断标识
        if (response.data) {
            Object.assign(response.data, { srfuf: '0' });
        }
        return response;
    }

    /**
     * 处理response
     *
     * @param {string} action
     * @param {*} response
     * @memberof MdServiceBase
     */
    public handleResponse(action: string, response: any): any {
        const result = {};
        if (response.status) {
            Object.assign(result, { status: response.status });
        }
        if (response.headers) {
            if (response.headers['x-page']) {
                Object.assign(result, { page: Number(response.headers['x-page']) });
            }
            if (response.headers['x-per-page']) {
                Object.assign(result, { size: Number(response.headers['x-per-page']) });
            }
            if (response.headers['x-total']) {
                Object.assign(result, { total: Number(response.headers['x-total']) });
            }
        }
        Object.assign(result, this.handleResponseData(action, response.data));
        return new HttpResponse(response.status, result);
    }

    /**
    * 处理数据
    *
    * @param {string} action  行为名称
    * @param {*} [data]
    * @returns
    * @memberof MdServiceBase
    */
    public handleResponseData(action: string, data: any) {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return { records: data };
        }
        const result: any = {};
        const dataItems: any[] = this.model.getDataItems();
        const tempData: any = data;
        if (!tempData) {
            Object.assign(result, { records: tempData });
        } else if (tempData instanceof Array) {
            if (tempData.length > 0) {
                tempData.forEach((item: any) => {
                    dataItems.forEach(dataitem => {
                        let val = item.hasOwnProperty(dataitem.prop) ? item[dataitem.prop] : null;
                        if (!val) {
                            val = item.hasOwnProperty(dataitem.name) ? item[dataitem.name] : null;
                        }
                        item[dataitem.name] = val;
                    });
                });
                Object.assign(result, { records: tempData });
            } else {
                Object.assign(result, { records: [] });
            }
        } else {
            dataItems.forEach(dataitem => {
                let val = tempData.hasOwnProperty(dataitem.prop) ? tempData[dataitem.prop] : null;
                if (!val) {
                    val = tempData.hasOwnProperty(dataitem.name) ? tempData[dataitem.name] : null;
                }
                if(action != 'Remove'){
                    tempData[dataitem.name] = val;
                }
            });
            Object.assign(result, { records: tempData });
        }
        return result;
    }
}