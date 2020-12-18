import { Http,Util } from '@/ibiz-core/utils';
import {IbzWeeklyServiceBase} from './ibz-weekly-service-base';


/**
 * 周报服务对象
 *
 * @export
 * @class IbzWeeklyService
 * @extends {IbzWeeklyServiceBase}
 */
export class IbzWeeklyService extends IbzWeeklyServiceBase {

    /**
     * Creates an instance of  IbzWeeklyService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzWeeklyService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * CreateGetLastWeekPlanAndWork接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzWeeklyServiceBase
     */
    public async CreateGetLastWeekPlanAndWork(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        data.ibzweekly = 0;
        data.ibzweeklyid = 0;
        context.ibzweekly = 0;
        let res:any = Http.getInstance().post(`/ibzweeklies/${context.ibzweekly}/creategetlastweekplanandwork`,data,isloading);
        return res;
    }


}
// 默认导出
export default IbzWeeklyService;