import { Http,Util } from '@/ibiz-core/utils';
import {ProjectStatsServiceBase} from './project-stats-service-base';


/**
 * 项目统计服务对象
 *
 * @export
 * @class ProjectStatsService
 * @extends {ProjectStatsServiceBase}
 */
export class ProjectStatsService extends ProjectStatsServiceBase {

    /**
     * Creates an instance of  ProjectStatsService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectStatsService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProjectStatsService;