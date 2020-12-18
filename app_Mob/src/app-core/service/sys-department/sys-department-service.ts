import { Http,Util } from '@/ibiz-core/utils';
import {SysDepartmentServiceBase} from './sys-department-service-base';


/**
 * 部门服务对象
 *
 * @export
 * @class SysDepartmentService
 * @extends {SysDepartmentServiceBase}
 */
export class SysDepartmentService extends SysDepartmentServiceBase {

    /**
     * Creates an instance of  SysDepartmentService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysDepartmentService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysDepartmentService;