import { Http,Util } from '@/ibiz-core/utils';
import {SubTaskServiceBase} from './sub-task-service-base';


/**
 * 任务服务对象
 *
 * @export
 * @class SubTaskService
 * @extends {SubTaskServiceBase}
 */
export class SubTaskService extends SubTaskServiceBase {

    /**
     * Creates an instance of  SubTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  SubTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SubTaskService;