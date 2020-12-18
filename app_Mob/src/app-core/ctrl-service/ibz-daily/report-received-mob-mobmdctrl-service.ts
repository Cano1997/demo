import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportReceivedMobModel } from '@/app-core/ctrl-model/ibz-daily/report-received-mob-mobmdctrl-model';


/**
 * ReportReceivedMob 部件服务对象
 *
 * @export
 * @class ReportReceivedMobService
 * @extends {MdServiceBase}
 */
export class ReportReceivedMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportReceivedMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportReceivedMobModel = new ReportReceivedMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReportReceivedMobService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ReportReceivedMobService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default ReportReceivedMobService;