import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainInfoMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-monthly/main-info-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MainInfoMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MainInfoMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class MainInfoMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainInfoMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MainInfoMobTabExpViewtabexppanelModel = new MainInfoMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MainInfoMobTabExpViewtabexppanelService;