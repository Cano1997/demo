import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanel5Model } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel5-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel5 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanel5Service
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanel5Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanel5Model}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanel5Model = new ProdMobTabExpViewtabviewpanel5Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel5Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel5Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanel5Service;