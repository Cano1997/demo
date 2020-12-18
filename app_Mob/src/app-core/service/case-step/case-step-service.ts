import { Http,Util } from '@/ibiz-core/utils';
import {CaseStepServiceBase} from './case-step-service-base';


/**
 * 用例步骤服务对象
 *
 * @export
 * @class CaseStepService
 * @extends {CaseStepServiceBase}
 */
export class CaseStepService extends CaseStepServiceBase {

    /**
     * Creates an instance of  CaseStepService.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseStepService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default CaseStepService;