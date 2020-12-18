import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 移动端产品发布计数器计数器服务对象基类
 *
 * @export
 * @class MobProductReleaseCounterCounterServiceBase
 */
export default class MobProductReleaseCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductReleaseCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MobProductReleaseCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductReleaseCounterCounterServiceBase
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
     * @memberof  MobProductReleaseCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MobProductReleaseCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('release');
        if (_appEntityService['MobReleaseCounter'] && _appEntityService['MobReleaseCounter'] instanceof Function) {
            let result = await _appEntityService['MobReleaseCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MobProductReleaseCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}