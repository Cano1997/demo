import { Http,Util } from '@/ibiz-core/utils';
import {ModuleServiceBase} from './module-service-base';


/**
 * 模块服务对象
 *
 * @export
 * @class ModuleService
 * @extends {ModuleServiceBase}
 */
export class ModuleService extends ModuleServiceBase {

    /**
     * Creates an instance of  ModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  ModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ModuleService;