import { Http,Util } from '@/ibiz-core/utils';
import {ProductLineServiceBase} from './product-line-service-base';


/**
 * 产品线服务对象
 *
 * @export
 * @class ProductLineService
 * @extends {ProductLineServiceBase}
 */
export class ProductLineService extends ProductLineServiceBase {

    /**
     * Creates an instance of  ProductLineService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductLineService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProductLineService;