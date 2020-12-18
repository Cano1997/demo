import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * Usr2MobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewtabviewpanelModel = new Usr2MobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewtabviewpanelService;