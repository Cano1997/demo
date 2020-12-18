import { Http,Util } from '@/ibiz-core/utils';
import {SysTeamMemberServiceBase} from './sys-team-member-service-base';


/**
 * 组成员服务对象
 *
 * @export
 * @class SysTeamMemberService
 * @extends {SysTeamMemberServiceBase}
 */
export class SysTeamMemberService extends SysTeamMemberServiceBase {

    /**
     * Creates an instance of  SysTeamMemberService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysTeamMemberService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysTeamMemberService;