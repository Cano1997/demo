import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyReceivedtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabviewpanel3-tabviewpanel-model';


/**
 * Usr2MobTabExpViewMyReceivedtabviewpanel3 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyReceivedtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewMyReceivedtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyReceivedtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyReceivedtabviewpanel3Model = new Usr2MobTabExpViewMyReceivedtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanel3Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyReceivedtabviewpanel3Service;