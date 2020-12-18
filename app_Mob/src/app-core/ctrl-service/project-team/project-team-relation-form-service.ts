import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamRelationModel } from '@/app-core/ctrl-model/project-team/project-team-relation-form-model';


/**
 * ProjectTeamRelation 部件服务对象
 *
 * @export
 * @class ProjectTeamRelationService
 * @extends {FormServiceBase}
 */
export class ProjectTeamRelationService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectTeamRelationModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectTeamRelationModel = new ProjectTeamRelationModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamRelationService
     */
    protected appDEName: string = 'projectteam';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectTeamRelationService
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
     * @memberof  ProjectTeamRelationService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ProjectTeamRelationService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ProjectTeamRelationService;