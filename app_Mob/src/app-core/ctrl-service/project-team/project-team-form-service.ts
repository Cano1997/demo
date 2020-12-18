import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProjectTeamModel } from '@/app-core/ctrl-model/project-team/project-team-form-model';


/**
 * ProjectTeam 部件服务对象
 *
 * @export
 * @class ProjectTeamService
 * @extends {FormServiceBase}
 */
export class ProjectTeamService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProjectTeamModel}
     * @memberof ControlServiceBase
     */
    protected model: ProjectTeamModel = new ProjectTeamModel();

    /**
     * 是否为从数据临时模式
     *
     * @protected
     * @type {boolean}
     * @memberof ProjectTeamService
     */
    protected isTempMode: boolean = true;

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

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  ProjectTeamService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ProjectTeamService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'hours': '7' });
        }
    }

}
// 默认导出
export default ProjectTeamService;