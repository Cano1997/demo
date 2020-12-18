import {Http, HttpResponse, Util} from '@/ibiz-core/utils';
import {ProductPlanServiceBase} from './product-plan-service-base';


/**
 * 产品计划服务对象
 *
 * @export
 * @class ProductPlanService
 * @extends {ProductPlanServiceBase}
 */
export class ProductPlanService extends ProductPlanServiceBase {

    /**
     * Creates an instance of  ProductPlanService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductPlanService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetEnd接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductPlanServiceBase
     */
    public async GetPlanEnd(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {

        if(!(data && data.begin && data.delta)) {
            return new HttpResponse  (200,{},null,null) ;;
        }
        let begin: Date = new Date(data.begin);
        let period = parseInt(data.delta);

        begin.setDate(begin.getDate() + period - 1);

        let year = begin.getFullYear();
        let month = begin.getMonth() + 1;
        let day = begin.getDate();

        return  new HttpResponse  (200, {
            end: `${year}-${month < 10 ? ('0' + month) : month}-${day < 10 ? ('0' + day) : day}`
        },null,null) ;;

    }

}
// 默认导出
export default ProductPlanService;