import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportNewModel } from '@/app-core/ctrl-model/app/report-new-portlet-model';


/**
 * ReportNew 部件服务对象
 *
 * @export
 * @class ReportNewService
 * @extends {PortletServiceBase}
 */
export class ReportNewService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportNewModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportNewModel = new ReportNewModel();
}
// 默认导出
export default ReportNewService;