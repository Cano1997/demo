import { Http,Util } from '@/ibiz-core/utils';
import {IbzDailyServiceBase} from './ibz-daily-service-base';


/**
 * 日报服务对象
 *
 * @export
 * @class IbzDailyService
 * @extends {IbzDailyServiceBase}
 */
export class IbzDailyService extends IbzDailyServiceBase {

    /**
     * Creates an instance of  IbzDailyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzDailyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    public async GetYesterdayDailyPlansTask(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        context.ibzdaily = 0;
        data.ibzdaily = 0;
        data.ibzdailyid = 0;
        let res:any = Http.getInstance().post(`/ibzdailies/${context.ibzdaily}/getyesterdaydailyplanstask`,data,isloading);
        return res;
    }

}
// 默认导出
export default IbzDailyService;