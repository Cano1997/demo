import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-my-territory/report-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ReportMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ReportMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class ReportMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportMobTabExpViewtabexppanelModel = new ReportMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ReportMobTabExpViewtabexppanelService;