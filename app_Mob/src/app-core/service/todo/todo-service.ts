import { Http,Util } from '@/ibiz-core/utils';
import {TodoServiceBase} from './todo-service-base';


/**
 * 待办服务对象
 *
 * @export
 * @class TodoService
 * @extends {TodoServiceBase}
 */
export class TodoService extends TodoServiceBase {

    /**
     * Creates an instance of  TodoService.
     * 
     * @param {*} [opts={}]
     * @memberof  TodoService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default TodoService;