import { Http,Util } from '@/ibiz-core/utils';
import {SysUpdateLogServiceBase} from './sys-update-log-service-base';


/**
 * 更新日志服务对象
 *
 * @export
 * @class SysUpdateLogService
 * @extends {SysUpdateLogServiceBase}
 */
export class SysUpdateLogService extends SysUpdateLogServiceBase {

    /**
     * Creates an instance of  SysUpdateLogService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysUpdateLogService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysUpdateLogService;