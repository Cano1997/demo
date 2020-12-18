import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * Usr2MobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class Usr2MobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewtabexppanelModel = new Usr2MobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewtabexppanelService;