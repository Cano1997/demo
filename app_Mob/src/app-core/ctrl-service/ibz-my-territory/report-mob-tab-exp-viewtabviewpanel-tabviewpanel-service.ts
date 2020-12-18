import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-my-territory/report-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * ReportMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class ReportMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class ReportMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportMobTabExpViewtabviewpanelModel = new ReportMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ReportMobTabExpViewtabviewpanelService;