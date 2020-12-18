import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 项目移动端计数器计数器服务对象基类
 *
 * @export
 * @class ProjectCounterCounterServiceBase
 */
export default class ProjectCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  ProjectCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectCounterCounterServiceBase
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
     * @memberof  ProjectCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('project');
        if (_appEntityService['MobProjectCount'] && _appEntityService['MobProjectCount'] instanceof Function) {
            let result = await _appEntityService['MobProjectCount'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof ProjectCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}