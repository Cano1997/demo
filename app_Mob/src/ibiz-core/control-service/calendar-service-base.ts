import { MdServiceBase } from './md-service-base';
import { HttpResponse } from '../utils';

/**
 * 日历部件服务基类
 *
 * @export
 * @class CalendarServiceBase
 * @extends {MdServiceBase}
 */
export class CalendarServiceBase extends MdServiceBase {

    /**
     * 事件配置集合
     *
     * @protected
     * @type {any[]}
     * @memberof CalendarServiceBase
     */
    protected eventsConfig: any = {};

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
                item.color = this.eventsConfig[type].color;
                item.textColor = this.eventsConfig[type].textColor;
                item.itemType = this.eventsConfig[type].itemType;
            });
        }
        this.model.itemType = this.eventsConfig[type].itemType;
        response = this.handleResponse(type, response);
        return response.data.records;
    }

    /**
     * 处理response
     *
     * @param {string} action
     * @param {*} response
     * @memberof CalendarServiceBase
     */
    public handleResponse(action: string, response: any): any {
        return new HttpResponse(response.status, this.handleResponseData(action, response.data));
    }

}