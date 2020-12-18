import { Http,Util } from '@/ibiz-core/utils';
import {TaskEstimateServiceBase} from './task-estimate-service-base';


/**
 * 任务预计服务对象
 *
 * @export
 * @class TaskEstimateService
 * @extends {TaskEstimateServiceBase}
 */
export class TaskEstimateService extends TaskEstimateServiceBase {

    /**
     * Creates an instance of  TaskEstimateService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskEstimateService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default TaskEstimateService;