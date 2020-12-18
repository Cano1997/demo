import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyDailyMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * MyDailyMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class MyDailyMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class MyDailyMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyDailyMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MyDailyMobTabExpViewtabviewpanelModel = new MyDailyMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default MyDailyMobTabExpViewtabviewpanelService;