import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyReportSubmitMobModel } from '@/app-core/ctrl-model/ibz-daily/daily-report-submit-mob-mobmdctrl-model';


/**
 * DailyReportSubmitMob 部件服务对象
 *
 * @export
 * @class DailyReportSubmitMobService
 * @extends {MdServiceBase}
 */
export class DailyReportSubmitMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyReportSubmitMobModel}
     * @memberof ControlServiceBase
     */
    protected model: DailyReportSubmitMobModel = new DailyReportSubmitMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyReportSubmitMobService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyReportSubmitMobService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default DailyReportSubmitMobService;