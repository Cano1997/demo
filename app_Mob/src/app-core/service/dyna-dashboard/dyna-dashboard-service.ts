import { Http,Util } from '@/ibiz-core/utils';
import {DynaDashboardServiceBase} from './dyna-dashboard-service-base';


/**
 * 动态数据看板服务对象
 *
 * @export
 * @class DynaDashboardService
 * @extends {DynaDashboardServiceBase}
 */
export class DynaDashboardService extends DynaDashboardServiceBase {

    /**
     * Creates an instance of  DynaDashboardService.
     * 
     * @param {*} [opts={}]
     * @memberof  DynaDashboardService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default DynaDashboardService;