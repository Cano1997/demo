import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainInfoMobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * MainInfoMobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class MainInfoMobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class MainInfoMobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainInfoMobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: MainInfoMobTabExpViewtabviewpanel3Model = new MainInfoMobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MainInfoMobTabExpViewtabviewpanel3Service;