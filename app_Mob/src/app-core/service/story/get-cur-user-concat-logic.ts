import { Http,Util } from '@/ibiz-core/utils';
import {GetCurUserConcatLogicBase} from './get-cur-user-concat-logic-base';

/**
 * 获取联系人
 *
 * @export
 * @class GetCurUserConcatLogic
 */
export class GetCurUserConcatLogic extends GetCurUserConcatLogicBase{

    /**
     * Creates an instance of  GetCurUserConcatLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetCurUserConcatLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetCurUserConcatLogic;
