import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 移动端测试版本计数器计数器服务对象基类
 *
 * @export
 * @class MobTestTaskCounterCounterServiceBase
 */
export default class MobTestTaskCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobTestTaskCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MobTestTaskCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobTestTaskCounterCounterServiceBase
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
     * @memberof  MobTestTaskCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MobTestTaskCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('testtask');
        if (_appEntityService['MobTestTaskCounter'] && _appEntityService['MobTestTaskCounter'] instanceof Function) {
            let result = await _appEntityService['MobTestTaskCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MobTestTaskCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}