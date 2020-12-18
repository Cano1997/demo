import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 移动端项目版本计数器计数器服务对象基类
 *
 * @export
 * @class MobProjectBuildCounterCounterServiceBase
 */
export default class MobProjectBuildCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MobProjectBuildCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MobProjectBuildCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MobProjectBuildCounterCounterServiceBase
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
     * @memberof  MobProjectBuildCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MobProjectBuildCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('build');
        if (_appEntityService['MobProjectBuildCounter'] && _appEntityService['MobProjectBuildCounter'] instanceof Function) {
            let result = await _appEntityService['MobProjectBuildCounter'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MobProjectBuildCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}