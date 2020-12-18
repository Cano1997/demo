import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyReceivedtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabviewpanel2-tabviewpanel-model';


/**
 * Usr2MobTabExpViewMyReceivedtabviewpanel2 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyReceivedtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewMyReceivedtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyReceivedtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyReceivedtabviewpanel2Model = new Usr2MobTabExpViewMyReceivedtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanel2Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyReceivedtabviewpanel2Service
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyReceivedtabviewpanel2Service;