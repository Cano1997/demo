import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamMobModel } from '@/app-core/ctrl-model/project-team/project-team-mob-multieditviewpanel-model';


/**
 * ProjectTeamMob 部件服务对象
 *
 * @export
 * @class ProjectTeamMobService
 * @extends {MultiEditViewPanelServiceBase}
 */
export class ProjectTeamMobService extends MultiEditViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectTeamMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectTeamMobModel = new ProjectTeamMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamMobService
     */
    protected appDEName: string = 'projectteam';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProjectTeamMobService;