import { Http,Util } from '@/ibiz-core/utils';
import {SysOrganizationServiceBase} from './sys-organization-service-base';


/**
 * 单位服务对象
 *
 * @export
 * @class SysOrganizationService
 * @extends {SysOrganizationServiceBase}
 */
export class SysOrganizationService extends SysOrganizationServiceBase {

    /**
     * Creates an instance of  SysOrganizationService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysOrganizationService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysOrganizationService;