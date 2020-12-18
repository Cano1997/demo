import { Http,Util } from '@/ibiz-core/utils';
import {ProductTopLogicBase} from './product-top-logic-base';

/**
 * 置顶
 *
 * @export
 * @class ProductTopLogic
 */
export class ProductTopLogic extends ProductTopLogicBase{

    /**
     * Creates an instance of  ProductTopLogic
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTopLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default ProductTopLogic;
