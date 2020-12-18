import { ChartServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProductStatusPieMobModel } from '@/app-core/ctrl-model/product/product-status-pie-mob-chart-model';


/**
 * ProductStatusPieMob 部件服务对象
 *
 * @export
 * @class ProductStatusPieMobService
 * @extends {ChartServiceBase}
 */
export class ProductStatusPieMobService extends ChartServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProductStatusPieMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ProductStatusPieMobModel = new ProductStatusPieMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusPieMobService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusPieMobService
     */
    protected appDeKey: string = 'id';

}
// 默认导出
export default ProductStatusPieMobService;