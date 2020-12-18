import { Http,Util } from '@/ibiz-core/utils';
import {CaseNFavoriteLogicBase} from './case-nfavorite-logic-base';

/**
 * 用例取消收藏
 *
 * @export
 * @class CaseNFavoriteLogic
 */
export class CaseNFavoriteLogic extends CaseNFavoriteLogicBase{

    /**
     * Creates an instance of  CaseNFavoriteLogic
     * 
     * @param {*} [opts={}]
     * @memberof  CaseNFavoriteLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default CaseNFavoriteLogic;
