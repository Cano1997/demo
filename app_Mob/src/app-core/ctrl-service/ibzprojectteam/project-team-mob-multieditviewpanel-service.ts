import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamMobModel } from '@/app-core/ctrl-model/ibzprojectteam/project-team-mob-multieditviewpanel-model';


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
     * 是否为从数据临时模式
     *
     * @protected
     * @type {boolean}
     * @memberof ProjectTeamMobService
     */
    protected isTempMode: boolean = true;

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamMobService
     */
    protected appDEName: string = 'ibzprojectteam';

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