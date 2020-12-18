import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanel4Model } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel4-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel4 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanel4Service
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanel4Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanel4Model}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanel4Model = new ProdMobTabExpViewtabviewpanel4Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel4Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel4Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanel4Service;