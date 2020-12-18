import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyTiJiaotabviewpanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-ti-jiaotabviewpanel-tabviewpanel-model';


/**
 * Usr2MobTabExpViewMyTiJiaotabviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyTiJiaotabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewMyTiJiaotabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyTiJiaotabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyTiJiaotabviewpanelModel = new Usr2MobTabExpViewMyTiJiaotabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabviewpanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyTiJiaotabviewpanelService;