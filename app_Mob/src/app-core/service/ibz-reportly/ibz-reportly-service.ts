import { Http,Util } from '@/ibiz-core/utils';
import {IbzReportlyServiceBase} from './ibz-reportly-service-base';


/**
 * 汇报服务对象
 *
 * @export
 * @class IbzReportlyService
 * @extends {IbzReportlyServiceBase}
 */
export class IbzReportlyService extends IbzReportlyServiceBase {

    /**
     * Creates an instance of  IbzReportlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzReportlyService;