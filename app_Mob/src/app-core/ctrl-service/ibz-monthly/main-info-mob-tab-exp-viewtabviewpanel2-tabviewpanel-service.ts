import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainInfoMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * MainInfoMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class MainInfoMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class MainInfoMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainInfoMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: MainInfoMobTabExpViewtabviewpanel2Model = new MainInfoMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainInfoMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MainInfoMobTabExpViewtabviewpanel2Service;