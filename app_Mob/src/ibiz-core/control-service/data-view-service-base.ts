import { Util, HttpResponse } from '../utils';
import { ControlServiceBase } from './control-service-base';

/**
 * 数据视图部件服务基类
 *
 * @export
 * @class DataViewServiceBase
 * @extends {ControlServiceBase}
 */
export class DataViewServiceBase extends ControlServiceBase {

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof DataViewServiceBase
     */
    public async search(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
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

}