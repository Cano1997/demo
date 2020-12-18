import { Http,Util } from '@/ibiz-core/utils';
import {BugServiceBase} from './bug-service-base';


/**
 * Bug服务对象
 *
 * @export
 * @class BugService
 * @extends {BugServiceBase}
 */
export class BugService extends BugServiceBase {

    /**
     * Creates an instance of  BugService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default BugService;