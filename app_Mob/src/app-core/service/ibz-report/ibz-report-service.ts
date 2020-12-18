import { Http,Util } from '@/ibiz-core/utils';
import {IbzReportServiceBase} from './ibz-report-service-base';


/**
 * 汇报服务对象
 *
 * @export
 * @class IbzReportService
 * @extends {IbzReportServiceBase}
 */
export class IbzReportService extends IbzReportServiceBase {

    /**
     * Creates an instance of  IbzReportService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzReportService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * MyReportINotSubmit接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzReportServiceBase
     */
    public async MyReportINotSubmit(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        context.ibzreport = 0;
        let res:any = Http.getInstance().post(`/ibzreports/${context.ibzreport}/myreportinotsubmit`,data,isloading);
        return res;
    }

}
// 默认导出
export default IbzReportService;