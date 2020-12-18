import { Http,Util } from '@/ibiz-core/utils';
import {ProductStatsServiceBase} from './product-stats-service-base';


/**
 * 产品统计服务对象
 *
 * @export
 * @class ProductStatsService
 * @extends {ProductStatsServiceBase}
 */
export class ProductStatsService extends ProductStatsServiceBase {

    /**
     * Creates an instance of  ProductStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProductStatsService;