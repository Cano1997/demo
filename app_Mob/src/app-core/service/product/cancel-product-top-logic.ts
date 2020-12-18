import { Http,Util } from '@/ibiz-core/utils';
import {CancelProductTopLogicBase} from './cancel-product-top-logic-base';

/**
 * 取消置顶
 *
 * @export
 * @class CancelProductTopLogic
 */
export class CancelProductTopLogic extends CancelProductTopLogicBase{

    /**
     * Creates an instance of  CancelProductTopLogic
     * 
     * @param {*} [opts={}]
     * @memberof  CancelProductTopLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default CancelProductTopLogic;
