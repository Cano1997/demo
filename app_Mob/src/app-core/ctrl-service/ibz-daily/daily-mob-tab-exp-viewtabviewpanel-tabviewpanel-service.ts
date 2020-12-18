import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-daily/daily-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * DailyMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class DailyMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class DailyMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: DailyMobTabExpViewtabviewpanelModel = new DailyMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default DailyMobTabExpViewtabviewpanelService;