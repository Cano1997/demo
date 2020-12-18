import { Http,Util } from '@/ibiz-core/utils';
import {TestTaskServiceBase} from './test-task-service-base';


/**
 * 测试版本服务对象
 *
 * @export
 * @class TestTaskService
 * @extends {TestTaskServiceBase}
 */
export class TestTaskService extends TestTaskServiceBase {

    /**
     * Creates an instance of  TestTaskService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestTaskService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * MobTestTaskCounter接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestTaskServiceBase
     */
    public async MobTestTaskCounter(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.project && context.testtask){
            let masterData:any = {id:context.testtask};
            Object.assign(data,masterData);
            Object.assign(data,context);
            let res:any = await Http.getInstance().post(`/projects/${context.project}/testtasks/${context.testtask}/mobtesttaskcounter`,data,isloading);

            return res;
        }
        if(context.product && context.testtask){
            let masterData:any = {id:context.testtask};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/testtasks/${context.testtask}/mobtesttaskcounter`,data,isloading);

            return res;
        }
        let res:any = Http.getInstance().post(`/testtasks/${context.testtask}/mobtesttaskcounter`,data,isloading);
        return res;
    }

}
// 默认导出
export default TestTaskService;