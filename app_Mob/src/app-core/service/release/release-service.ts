import { Http,Util } from '@/ibiz-core/utils';
import {ReleaseServiceBase} from './release-service-base';


/**
 * 发布服务对象
 *
 * @export
 * @class ReleaseService
 * @extends {ReleaseServiceBase}
 */
export class ReleaseService extends ReleaseServiceBase {

    /**
     * Creates an instance of  ReleaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  ReleaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ReleaseService;