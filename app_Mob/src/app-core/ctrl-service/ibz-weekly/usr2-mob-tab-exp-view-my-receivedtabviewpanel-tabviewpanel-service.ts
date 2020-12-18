import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyReceivedtabviewpanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabviewpanel-tabviewpanel-model';


/**
 * Usr2MobTabExpViewMyReceivedtabviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyReceivedtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewMyReceivedtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyReceivedtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyReceivedtabviewpanelModel = new Usr2MobTabExpViewMyReceivedtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyReceivedtabviewpanelService;