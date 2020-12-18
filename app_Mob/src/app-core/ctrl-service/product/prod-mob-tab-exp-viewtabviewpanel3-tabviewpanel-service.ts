import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanel3Model = new ProdMobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanel3Service;