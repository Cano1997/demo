import { Http,Util } from '@/ibiz-core/utils';
import {TestSuiteServiceBase} from './test-suite-service-base';


/**
 * 测试套件服务对象
 *
 * @export
 * @class TestSuiteService
 * @extends {TestSuiteServiceBase}
 */
export class TestSuiteService extends TestSuiteServiceBase {

    /**
     * Creates an instance of  TestSuiteService.
     * 
     * @param {*} [opts={}]
     * @memberof  TestSuiteService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * MobTestSuiteCount接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof TestSuiteServiceBase
     */
    public async MobTestSuiteCount(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.testsuite){
            let masterData:any = {id:context.testsuite};
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/testsuites/${context.testsuite}/mobtestsuitecount`,data,isloading);

            return res;
        }
        let res:any = Http.getInstance().post(`/testsuites/${context.testsuite}/mobtestsuitecount`,data,isloading);
        return res;
    }

}
// 默认导出
export default TestSuiteService;