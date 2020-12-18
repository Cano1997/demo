import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectStatusBarMobBModel } from '@/app-core/ctrl-model/project/project-status-bar-mob-b-portlet-model';


/**
 * ProjectStatusBarMobB 部件服务对象
 *
 * @export
 * @class ProjectStatusBarMobBService
 * @extends {PortletServiceBase}
 */
export class ProjectStatusBarMobBService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectStatusBarMobBModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectStatusBarMobBModel = new ProjectStatusBarMobBModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobBService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobBService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProjectStatusBarMobBService;