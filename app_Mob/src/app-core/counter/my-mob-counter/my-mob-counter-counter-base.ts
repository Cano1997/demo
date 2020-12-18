import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 我的地盘移动端计数器计数器服务对象基类
 *
 * @export
 * @class MyMobCounterCounterServiceBase
 */
export default class MyMobCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MyMobCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MyMobCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MyMobCounterCounterServiceBase
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
     * @memberof  MyMobCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MyMobCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('ibzmyterritory');
        if (_appEntityService['MyTerritoryCount'] && _appEntityService['MyTerritoryCount'] instanceof Function) {
            let result = await _appEntityService['MyTerritoryCount'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MyMobCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}