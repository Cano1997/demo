import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyMobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-daily/daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * DailyMobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class DailyMobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class DailyMobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyMobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: DailyMobTabExpViewtabviewpanel3Model = new DailyMobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default DailyMobTabExpViewtabviewpanel3Service;