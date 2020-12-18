import { Http,Util } from '@/ibiz-core/utils';
import {ProjectTeamServiceBase} from './project-team-service-base';


/**
 * 项目团队服务对象
 *
 * @export
 * @class ProjectTeamService
 * @extends {ProjectTeamServiceBase}
 */
export class ProjectTeamService extends ProjectTeamServiceBase {

    /**
     * Creates an instance of  ProjectTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProjectTeamService;