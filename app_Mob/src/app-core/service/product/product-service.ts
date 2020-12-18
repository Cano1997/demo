import { Http,Util } from '@/ibiz-core/utils';
import {ProductServiceBase} from './product-service-base';


/**
 * 产品服务对象
 *
 * @export
 * @class ProductService
 * @extends {ProductServiceBase}
 */
export class ProductService extends ProductServiceBase {

    /**
     * Creates an instance of  ProductService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProductService;