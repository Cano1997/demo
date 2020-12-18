import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyReceivedtabexppanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabexppanel-tabexppanel-model';


/**
 * Usr2MobTabExpViewMyReceivedtabexppanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyReceivedtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class Usr2MobTabExpViewMyReceivedtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyReceivedtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyReceivedtabexppanelModel = new Usr2MobTabExpViewMyReceivedtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabexppanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyReceivedtabexppanelService;