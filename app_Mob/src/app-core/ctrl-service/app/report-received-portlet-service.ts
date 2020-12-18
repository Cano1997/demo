import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportReceivedModel } from '@/app-core/ctrl-model/app/report-received-portlet-model';


/**
 * ReportReceived 部件服务对象
 *
 * @export
 * @class ReportReceivedService
 * @extends {PortletServiceBase}
 */
export class ReportReceivedService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportReceivedModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportReceivedModel = new ReportReceivedModel();
}
// 默认导出
export default ReportReceivedService;