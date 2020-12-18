import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProductStatusChartMobModel } from '@/app-core/ctrl-model/product/product-status-chart-mob-portlet-model';


/**
 * ProductStatusChartMob 部件服务对象
 *
 * @export
 * @class ProductStatusChartMobService
 * @extends {PortletServiceBase}
 */
export class ProductStatusChartMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProductStatusChartMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ProductStatusChartMobModel = new ProductStatusChartMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusChartMobService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProductStatusChartMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProductStatusChartMobService;