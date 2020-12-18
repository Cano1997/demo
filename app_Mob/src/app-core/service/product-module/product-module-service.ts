import { Http,Util } from '@/ibiz-core/utils';
import {ProductModuleServiceBase} from './product-module-service-base';


/**
 * 需求模块服务对象
 *
 * @export
 * @class ProductModuleService
 * @extends {ProductModuleServiceBase}
 */
export class ProductModuleService extends ProductModuleServiceBase {

    /**
     * Creates an instance of  ProductModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProductModuleService;