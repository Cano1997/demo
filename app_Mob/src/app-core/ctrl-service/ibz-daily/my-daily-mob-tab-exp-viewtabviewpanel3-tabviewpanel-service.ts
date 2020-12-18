import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyDailyMobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * MyDailyMobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class MyDailyMobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class MyDailyMobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyDailyMobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: MyDailyMobTabExpViewtabviewpanel3Model = new MyDailyMobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default MyDailyMobTabExpViewtabviewpanel3Service;