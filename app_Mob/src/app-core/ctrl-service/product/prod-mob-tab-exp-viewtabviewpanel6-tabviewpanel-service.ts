import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabviewpanel6Model } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabviewpanel6-tabviewpanel-model';


/**
 * ProdMobTabExpViewtabviewpanel6 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabviewpanel6Service
 * @extends {TabViewPanelServiceBase}
 */
export class ProdMobTabExpViewtabviewpanel6Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabviewpanel6Model}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabviewpanel6Model = new ProdMobTabExpViewtabviewpanel6Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel6Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabviewpanel6Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabviewpanel6Service;