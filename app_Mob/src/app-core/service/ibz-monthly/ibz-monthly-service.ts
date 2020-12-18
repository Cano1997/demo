import { Http,Util } from '@/ibiz-core/utils';
import {IbzMonthlyServiceBase} from './ibz-monthly-service-base';


/**
 * 月报服务对象
 *
 * @export
 * @class IbzMonthlyService
 * @extends {IbzMonthlyServiceBase}
 */
export class IbzMonthlyService extends IbzMonthlyServiceBase {

    /**
     * Creates an instance of  IbzMonthlyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMonthlyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * CreateGetInfo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzMonthlyServiceBase
     */
    public async CreateGetInfo(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {ibzmonthlyid:0};
        Object.assign(data,masterData);
        let res:any = Http.getInstance().post(`/ibzmonthlies/0/creategetinfo`,data,isloading);
        return res;
    }

}
// 默认导出
export default IbzMonthlyService;