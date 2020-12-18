import { Http,Util } from '@/ibiz-core/utils';
import {BuildServiceBase} from './build-service-base';


/**
 * 版本服务对象
 *
 * @export
 * @class BuildService
 * @extends {BuildServiceBase}
 */
export class BuildService extends BuildServiceBase {

    /**
     * Creates an instance of  BuildService.
     * 
     * @param {*} [opts={}]
     * @memberof  BuildService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default BuildService;