import { Http,Util } from '@/ibiz-core/utils';
import {IbzSysUpdateFeaturesServiceBase} from './ibz-sys-update-features-service-base';


/**
 * 系统更新功能服务对象
 *
 * @export
 * @class IbzSysUpdateFeaturesService
 * @extends {IbzSysUpdateFeaturesServiceBase}
 */
export class IbzSysUpdateFeaturesService extends IbzSysUpdateFeaturesServiceBase {

    /**
     * Creates an instance of  IbzSysUpdateFeaturesService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzSysUpdateFeaturesService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzSysUpdateFeaturesService;