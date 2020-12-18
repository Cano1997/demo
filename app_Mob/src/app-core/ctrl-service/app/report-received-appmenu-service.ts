import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportReceivedModel } from '@/app-core/ctrl-model/app/report-received-appmenu-model';


/**
 * ReportReceived 部件服务对象
 *
 * @export
 * @class ReportReceivedService
 * @extends {AppMenuServiceBase}
 */
export class ReportReceivedService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportReceivedModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportReceivedModel = new ReportReceivedModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof ReportReceived
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/report-receivedappmenu', params);
    }

}
// 默认导出
export default ReportReceivedService;