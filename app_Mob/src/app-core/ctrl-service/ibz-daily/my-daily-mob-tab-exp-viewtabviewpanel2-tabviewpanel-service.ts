import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyDailyMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * MyDailyMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class MyDailyMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class MyDailyMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyDailyMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: MyDailyMobTabExpViewtabviewpanel2Model = new MyDailyMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default MyDailyMobTabExpViewtabviewpanel2Service;