import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-my-territory/daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * DailyMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class DailyMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class DailyMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: DailyMobTabExpViewtabviewpanel2Model = new DailyMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default DailyMobTabExpViewtabviewpanel2Service;