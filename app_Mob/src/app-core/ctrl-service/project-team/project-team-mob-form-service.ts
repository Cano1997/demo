import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamMobModel } from '@/app-core/ctrl-model/project-team/project-team-mob-form-model';


/**
 * ProjectTeamMob 部件服务对象
 *
 * @export
 * @class ProjectTeamMobService
 * @extends {FormServiceBase}
 */
export class ProjectTeamMobService extends FormServiceBase {

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

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  ProjectTeamMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ProjectTeamMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'hours': '7' });
            Object.assign(response.data, { 'limited': 'no' });
        }
    }

}
// 默认导出
export default ProjectTeamMobService;