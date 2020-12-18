import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 移动端菜单计数器计数器服务对象基类
 *
 * @export
 * @class MobMenuCounterCounterServiceBase
 */
export default class MobMenuCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MobMenuCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCounterCounterServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.initCounterData();
        this.timer = setInterval(() => {
            this.fetchCounterData(this.context,this.viewparams);
        }, 60000);
    }

    /**
     * 初始化当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MobMenuCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('ibzmyterritory');
        if (_appEntityService['MobMenuCount'] && _appEntityService['MobMenuCount'] instanceof Function) {
            let result = await _appEntityService['MobMenuCount'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MobMenuCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}