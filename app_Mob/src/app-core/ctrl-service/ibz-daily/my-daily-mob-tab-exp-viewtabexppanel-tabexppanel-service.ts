import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyDailyMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-daily/my-daily-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MyDailyMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MyDailyMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class MyDailyMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyDailyMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MyDailyMobTabExpViewtabexppanelModel = new MyDailyMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyDailyMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default MyDailyMobTabExpViewtabexppanelService;