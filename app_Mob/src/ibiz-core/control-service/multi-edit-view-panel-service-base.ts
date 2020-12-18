import { ControlServiceBase } from './control-service-base';
import { Util, HttpResponse } from '@/ibiz-core/utils';
/**
 * 多编辑视图面板部件服务基类
 *
 * @export
 * @class MultiEditViewPanelServiceBase
 * @extends {ControlServiceBase}
 */
export class MultiEditViewPanelServiceBase extends ControlServiceBase {

     /**
     * 处理返回数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isCreate]
     * @returns {*}
     * @memberof MultiEditViewPanelServiceBase
     */
    public handleResponseData(action: string, data: any = {}, isCreate?: boolean): any {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        const dataItems: any[] = this.model.getDataItems();
        const item: any = {};
        if(data instanceof Array){
            data.forEach((_data:any) => {
                dataItems.forEach(dataitem => {
                    let val: any = _data.hasOwnProperty(dataitem.prop) ? _data[dataitem.prop] : null;
                    if (!val) {
                        val = _data.hasOwnProperty(dataitem.name) ? _data[dataitem.name] : null;
                    }
                    item[dataitem.name] = val;
                });
                Object.assign(_data, item);
            });
        }else{

        }
        return data;
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof MultiEditViewPanelServiceBase
     */
    public async get(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data, true);
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
}