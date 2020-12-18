import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewMyTiJiaotabexppanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-view-my-ti-jiaotabexppanel-tabexppanel-model';


/**
 * Usr2MobTabExpViewMyTiJiaotabexppanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewMyTiJiaotabexppanelService
 * @extends {TabExpServiceBase}
 */
export class Usr2MobTabExpViewMyTiJiaotabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewMyTiJiaotabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewMyTiJiaotabexppanelModel = new Usr2MobTabExpViewMyTiJiaotabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabexppanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewMyTiJiaotabexppanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewMyTiJiaotabexppanelService;