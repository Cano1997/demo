import { ControlServiceBase } from './control-service-base';
import { Util, HttpResponse } from '../utils';

/**
 * 多数据部件服务基类
 *
 * @export
 * @class MdServiceBase
 * @extends {ControlServiceBase}
 */
export class MdServiceBase extends ControlServiceBase {

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
                if (action != 'Remove') {
                    tempData[dataitem.name] = val;
                }
            });
            Object.assign(result, { records: tempData });
        }
        return result;
    }

    /**
     * 处理请求多数据
     *
     * @protected
     * @param {string} action 行为 
     * @param {*} [context={}] 上下文参数
     * @param {*} [data={}] 数据
     * @returns {*}
     * @memberof ControlServiceBase
     */
    public handleRequestDatas(context: any = {}, data: any = {}): any {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        const dataItems: any[] = this.model.getDataItems();
        const tempData: any = data;
        for (let index = 0; index < tempData.length; index++) {
            const item = tempData[index];
            let _item: any = {};
            for (let index = 0; index < dataItems.length; index++) {
                const dataitem = dataItems[index];
                let val = item.hasOwnProperty(dataitem.prop) ? item[dataitem.prop] : null;
                if (!val) {
                    val = item.hasOwnProperty(dataitem.name) ? item[dataitem.name] : null;
                }
                _item[dataitem.name] = val;
            }
            tempData[index] = _item;
        }
        return data;
    }

}