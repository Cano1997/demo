import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanel2Model = new ProdMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanel2Service;