import { Http,Util } from '@/ibiz-core/utils';
import {SysUpdateFeaturesServiceBase} from './sys-update-features-service-base';


/**
 * 系统更新功能服务对象
 *
 * @export
 * @class SysUpdateFeaturesService
 * @extends {SysUpdateFeaturesServiceBase}
 */
export class SysUpdateFeaturesService extends SysUpdateFeaturesServiceBase {

    /**
     * Creates an instance of  SysUpdateFeaturesService.
     * 
     * @param {*} [opts={}]
     * @memberof  SysUpdateFeaturesService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default SysUpdateFeaturesService;