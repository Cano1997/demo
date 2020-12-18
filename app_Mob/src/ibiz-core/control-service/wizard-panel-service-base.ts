import { ControlServiceBase } from './control-service-base';
import { Util, HttpResponse } from '../utils';

/**
 * 向导面板部件服务基类
 *
 * @export
 * @class WizardPanelServiceBase
 * @extends {ControlServiceBase}
 */
export class WizardPanelServiceBase extends ControlServiceBase {

    /**
     * 初始化向导
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof WizardPanelServiceBase
     */
    public async init(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Create(context, data);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 向导结束
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof WizardPanelServiceBase
     */
    public async finish(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Update(context, data);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }
}