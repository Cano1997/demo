import { Http,Util } from '@/ibiz-core/utils';
import {ActionServiceBase} from './action-service-base';


/**
 * 系统日志服务对象
 *
 * @export
 * @class ActionService
 * @extends {ActionServiceBase}
 */
export class ActionService extends ActionServiceBase {

    /**
     * Creates an instance of  ActionService.
     * 
     * @param {*} [opts={}]
     * @memberof  ActionService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ActionService;