import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import {ProjectServiceBase} from './project-service-base';


/**
 * 项目服务对象
 *
 * @export
 * @class ProjectService
 * @extends {ProjectServiceBase}
 */
export class ProjectService extends ProjectServiceBase {

    /**
     * Creates an instance of  ProjectService.
     *
     * @param {*} [opts={}]
     * @memberof  ProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * UpdateCycle接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UpdateCycle(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {

        if(!(data && data.begin && data.end)) {
            return new HttpResponse  (200,{},null,null) ;;
        }
        let begin: Date = new Date(data.begin);
        let end: Date = new Date(data.end);
        let period = Math.floor((end.getTime() - begin.getTime())/(1000 * 60 * 60 *24)) + 1;
        let days: number = 0;
        let curWeek: number = begin.getDay();
        begin.setDate(begin.getDate() + period);
        for(; period > 0; period--, curWeek++) {
            curWeek = curWeek > 6 ? (curWeek - 7) : curWeek;
            if(curWeek > 0 && curWeek < 6) {
                days++;
            }
        }

        return  new HttpResponse  (200, {days:days},null,null) ;;
    }

    /**
     * UpdateProjectCycle接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectServiceBase
     */
    public async UpdateProjectCycle(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {

        if(!(data && data.begin && data.period)) {
            if(data.end && data.begin) {
                let begin: Date = new Date(data.begin);
                let end: Date = new Date(data.end);
                data.period = Math.floor((end.getTime() - begin.getTime())/(1000 * 60 * 60 *24)) + 1;
            }else {
                return new HttpResponse  (200,{},null,null) ;
            }

        }
        let begin: Date = new Date(data.begin);
        let period = parseInt(data.period);
        let days: number = 0;
        let curWeek: number = begin.getDay();
        begin.setDate(begin.getDate() + period - 1);
        for(; period > 0; period--, curWeek++) {
            curWeek = curWeek > 6 ? (curWeek - 7) : curWeek;
            if(curWeek > 0 && curWeek < 6) {
                days++;
            }
        }
        let year = begin.getFullYear();
        let month = begin.getMonth() + 1;
        let day = begin.getDate();

        return new HttpResponse  (200,{ end: `${year}-${month < 10 ? ('0' + month) : month}-${day < 10 ? ('0' + day) : day}`,days: days },null,null) ;;
    }

}
// 默认导出
export default ProjectService;