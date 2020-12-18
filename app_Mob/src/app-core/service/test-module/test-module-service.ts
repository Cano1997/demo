import { Http,Util } from '@/ibiz-core/utils';
import {TestModuleServiceBase} from './test-module-service-base';


/**
 * 测试模块服务对象
 *
 * @export
 * @class TestModuleService
 * @extends {TestModuleServiceBase}
 */
export class TestModuleService extends TestModuleServiceBase {

    /**
     * Creates an instance of  TestModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default TestModuleService;