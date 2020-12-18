import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/project/mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class MobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabexppanelModel = new MobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabexppanelService;