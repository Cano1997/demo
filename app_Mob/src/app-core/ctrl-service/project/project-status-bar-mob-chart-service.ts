import { ChartServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectStatusBarMobModel } from '@/app-core/ctrl-model/project/project-status-bar-mob-chart-model';


/**
 * ProjectStatusBarMob 部件服务对象
 *
 * @export
 * @class ProjectStatusBarMobService
 * @extends {ChartServiceBase}
 */
export class ProjectStatusBarMobService extends ChartServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectStatusBarMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectStatusBarMobModel = new ProjectStatusBarMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobService
     */
    protected appDeKey: string = 'id';

}
// 默认导出
export default ProjectStatusBarMobService;