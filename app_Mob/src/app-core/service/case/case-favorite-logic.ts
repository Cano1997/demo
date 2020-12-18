import { Http,Util } from '@/ibiz-core/utils';
import {CaseFavoriteLogicBase} from './case-favorite-logic-base';

/**
 * 用例收藏
 *
 * @export
 * @class CaseFavoriteLogic
 */
export class CaseFavoriteLogic extends CaseFavoriteLogicBase{

    /**
     * Creates an instance of  CaseFavoriteLogic
     * 
     * @param {*} [opts={}]
     * @memberof  CaseFavoriteLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default CaseFavoriteLogic;
