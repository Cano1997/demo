import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 产品计划移动端计数器计数器服务对象基类
 *
 * @export
 * @class MobProductPlanCounterCounterServiceBase
 */
export default class MobProductPlanCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductPlanCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MobProductPlanCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductPlanCounterCounterServiceBase
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
     * @memberof  MobProductPlanCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductPlanCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('productplan');
        if (_appEntityService['MobProductPlanCounter'] && _appEntityService['MobProductPlanCounter'] instanceof Function) {
            let result = await _appEntityService['MobProductPlanCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MobProductPlanCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}