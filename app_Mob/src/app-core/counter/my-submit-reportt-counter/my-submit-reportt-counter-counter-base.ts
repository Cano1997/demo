import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 我未提交的汇报计数器服务对象基类
 *
 * @export
 * @class MySubmitReporttCounterCounterServiceBase
 */
export default class MySubmitReporttCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MySubmitReporttCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MySubmitReporttCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MySubmitReporttCounterCounterServiceBase
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
     * @memberof  MySubmitReporttCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MySubmitReporttCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('ibzreport');
        if (_appEntityService['MyReportINotSubmit'] && _appEntityService['MyReportINotSubmit'] instanceof Function) {
            let result = await _appEntityService['MyReportINotSubmit'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MySubmitReporttCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}