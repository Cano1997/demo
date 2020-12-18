import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamModel } from '@/app-core/ctrl-model/project-team/project-team-multieditviewpanel-model';


/**
 * ProjectTeam 部件服务对象
 *
 * @export
 * @class ProjectTeamService
 * @extends {MultiEditViewPanelServiceBase}
 */
export class ProjectTeamService extends MultiEditViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectTeamModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectTeamModel = new ProjectTeamModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamService
     */
    protected appDEName: string = 'projectteam';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProjectTeamService;