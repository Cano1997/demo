import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportSubmitModel } from '@/app-core/ctrl-model/app/report-submit-portlet-model';


/**
 * ReportSubmit 部件服务对象
 *
 * @export
 * @class ReportSubmitService
 * @extends {PortletServiceBase}
 */
export class ReportSubmitService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportSubmitModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportSubmitModel = new ReportSubmitModel();
}
// 默认导出
export default ReportSubmitService;