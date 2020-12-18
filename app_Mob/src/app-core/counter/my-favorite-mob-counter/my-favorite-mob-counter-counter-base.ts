import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 我的收藏移动端计数器计数器服务对象基类
 *
 * @export
 * @class MyFavoriteMobCounterCounterServiceBase
 */
export default class MyFavoriteMobCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MyFavoriteMobCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MyFavoriteMobCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MyFavoriteMobCounterCounterServiceBase
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
     * @memberof  MyFavoriteMobCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MyFavoriteMobCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('ibzmyterritory');
        if (_appEntityService['MyFavoriteCount'] && _appEntityService['MyFavoriteCount'] instanceof Function) {
            let result = await _appEntityService['MyFavoriteCount'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MyFavoriteMobCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}