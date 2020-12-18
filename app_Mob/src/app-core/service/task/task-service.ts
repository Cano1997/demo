import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import {TaskServiceBase} from './task-service-base';


/**
 * 任务服务对象
 *
 * @export
 * @class TaskService
 * @extends {TaskServiceBase}
 */
export class TaskService extends TaskServiceBase {

    /**
     * Creates an instance of  TaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TaskServiceBase
     */
    public async CalcTime(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        return new HttpResponse  (200, {totaltime:(data.consumed + data.currentconsumed)},null,null) ;
    }

}
// 默认导出
export default TaskService;