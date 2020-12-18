import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 测试移动端计数器计数器服务对象基类
 *
 * @export
 * @class ProductTestMobCounterCounterServiceBase
 */
export default class ProductTestMobCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTestMobCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  ProductTestMobCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTestMobCounterCounterServiceBase
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
     * @memberof  ProductTestMobCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  ProductTestMobCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('product');
        if (_appEntityService['MobProductTestCounter'] && _appEntityService['MobProductTestCounter'] instanceof Function) {
            let result = await _appEntityService['MobProductTestCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof ProductTestMobCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}