import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainInfoMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * MainInfoMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class MainInfoMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class MainInfoMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainInfoMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MainInfoMobTabExpViewtabviewpanelModel = new MainInfoMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MainInfoMobTabExpViewtabviewpanelService;