import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-my-territory/report-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * ReportMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class ReportMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class ReportMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: ReportMobTabExpViewtabviewpanel2Model = new ReportMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ReportMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ReportMobTabExpViewtabviewpanel2Service;