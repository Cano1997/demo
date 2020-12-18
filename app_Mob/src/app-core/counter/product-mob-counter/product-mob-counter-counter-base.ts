import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 产品移动端计数器计数器服务对象基类
 *
 * @export
 * @class ProductMobCounterCounterServiceBase
 */
export default class ProductMobCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  ProductMobCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.initCounterData();
        this.timer = setInterval(() => {
            this.fetchCounterData(this.context,this.viewparams);
        }, 5000);
    }

    /**
     * 初始化当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('product');
        if (_appEntityService['MobProductCounter'] && _appEntityService['MobProductCounter'] instanceof Function) {
            let result = await _appEntityService['MobProductCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof ProductMobCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}