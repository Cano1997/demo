import { Http,Util } from '@/ibiz-core/utils';
import {GetUserConcatLogicBase} from './get-user-concat-logic-base';

/**
 * 获取联系人
 *
 * @export
 * @class GetUserConcatLogic
 */
export class GetUserConcatLogic extends GetUserConcatLogicBase{

    /**
     * Creates an instance of  GetUserConcatLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetUserConcatLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetUserConcatLogic;
