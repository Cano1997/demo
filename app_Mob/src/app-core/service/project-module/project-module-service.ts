import { Http,Util } from '@/ibiz-core/utils';
import {ProjectModuleServiceBase} from './project-module-service-base';


/**
 * 任务模块服务对象
 *
 * @export
 * @class ProjectModuleService
 * @extends {ProjectModuleServiceBase}
 */
export class ProjectModuleService extends ProjectModuleServiceBase {

    /**
     * Creates an instance of  ProjectModuleService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectModuleService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default ProjectModuleService;