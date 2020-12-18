import { Http,Util } from '@/ibiz-core/utils';
import {SysTeamServiceBase} from './sys-team-service-base';


/**
 * 组服务对象
 *
 * @export
 * @class SysTeamService
 * @extends {SysTeamServiceBase}
 */
export class SysTeamService extends SysTeamServiceBase {

    /**
     * Creates an instance of  SysTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysTeamService;