import { Http,Util } from '@/ibiz-core/utils';
import {BranchServiceBase} from './branch-service-base';


/**
 * 产品的分支和平台信息服务对象
 *
 * @export
 * @class BranchService
 * @extends {BranchServiceBase}
 */
export class BranchService extends BranchServiceBase {

    /**
     * Creates an instance of  BranchService.
     * 
     * @param {*} [opts={}]
     * @memberof  BranchService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default BranchService;