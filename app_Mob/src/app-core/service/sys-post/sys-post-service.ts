import { Http,Util } from '@/ibiz-core/utils';
import {SysPostServiceBase} from './sys-post-service-base';


/**
 * 岗位服务对象
 *
 * @export
 * @class SysPostService
 * @extends {SysPostServiceBase}
 */
export class SysPostService extends SysPostServiceBase {

    /**
     * Creates an instance of  SysPostService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysPostService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysPostService;