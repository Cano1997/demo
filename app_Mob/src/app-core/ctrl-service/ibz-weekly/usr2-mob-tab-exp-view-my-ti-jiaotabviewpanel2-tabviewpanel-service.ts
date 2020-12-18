import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyTiJiaotabviewpanel2Model } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-ti-jiaotabviewpanel2-tabviewpanel-model';


/**
 * Usr2MobTabExpViewMyTiJiaotabviewpanel2 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyTiJiaotabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewMyTiJiaotabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyTiJiaotabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyTiJiaotabviewpanel2Model = new Usr2MobTabExpViewMyTiJiaotabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanel2Service
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyTiJiaotabviewpanel2Service;