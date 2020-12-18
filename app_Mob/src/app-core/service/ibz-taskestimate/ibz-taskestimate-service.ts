import { Http,Util } from '@/ibiz-core/utils';
import {IbzTaskestimateServiceBase} from './ibz-taskestimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class IbzTaskestimateService
 * @extends {IbzTaskestimateServiceBase}
 */
export class IbzTaskestimateService extends IbzTaskestimateServiceBase {

    /**
     * Creates an instance of  IbzTaskestimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzTaskestimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzTaskestimateService;