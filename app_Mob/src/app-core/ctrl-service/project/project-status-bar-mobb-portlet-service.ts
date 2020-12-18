import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectStatusBarMobbModel } from '@/app-core/ctrl-model/project/project-status-bar-mobb-portlet-model';


/**
 * ProjectStatusBarMobb 部件服务对象
 *
 * @export
 * @class ProjectStatusBarMobbService
 * @extends {PortletServiceBase}
 */
export class ProjectStatusBarMobbService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectStatusBarMobbModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectStatusBarMobbModel = new ProjectStatusBarMobbModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobbService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectStatusBarMobbService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProjectStatusBarMobbService;