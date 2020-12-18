import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 我收到的未读汇报计数器服务对象基类
 *
 * @export
 * @class MyReportCounterCounterServiceBase
 */
export default class MyReportCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  MyReportCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  MyReportCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  MyReportCounterCounterServiceBase
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
     * @memberof  MyReportCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData(this.context,this.viewparams);
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  MyReportCounterCounterServiceBase
     */
    public async fetchCounterData(context:any,data:any){
        let _appEntityService:any = await this.appEntityService.getService('ibzreport');
        if (_appEntityService['ReportIReceived'] && _appEntityService['ReportIReceived'] instanceof Function) {
            let result = await _appEntityService['ReportIReceived'](context,data, false);
            this.counterData = result.data;
        }
    }

    /**
     * 刷新数据
     *
     * @memberof MyReportCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData(this.context,this.viewparams);
        return res;
    }

}