import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-daily/daily-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * DailyMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class DailyMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class DailyMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: DailyMobTabExpViewtabexppanelModel = new DailyMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default DailyMobTabExpViewtabexppanelService;