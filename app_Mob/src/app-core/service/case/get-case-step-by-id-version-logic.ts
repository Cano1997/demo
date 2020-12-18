import { Http,Util } from '@/ibiz-core/utils';
import {GetCaseStepByIdVersionLogicBase} from './get-case-step-by-id-version-logic-base';

/**
 * 根据用例标识和版本获取用例步骤
 *
 * @export
 * @class GetCaseStepByIdVersionLogic
 */
export class GetCaseStepByIdVersionLogic extends GetCaseStepByIdVersionLogicBase{

    /**
     * Creates an instance of  GetCaseStepByIdVersionLogic
     * 
     * @param {*} [opts={}]
     * @memberof  GetCaseStepByIdVersionLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default GetCaseStepByIdVersionLogic;
