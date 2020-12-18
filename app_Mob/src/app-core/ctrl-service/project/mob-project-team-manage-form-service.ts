import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobProjectTeamManageModel } from '@/app-core/ctrl-model/project/mob-project-team-manage-form-model';


/**
 * MobProjectTeamManage 部件服务对象
 *
 * @export
 * @class MobProjectTeamManageService
 * @extends {FormServiceBase}
 */
export class MobProjectTeamManageService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobProjectTeamManageModel}
     * @memberof ControlServiceBase
     */
    protected model: MobProjectTeamManageModel = new MobProjectTeamManageModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobProjectTeamManageService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobProjectTeamManageService
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
     * @memberof  MobProjectTeamManageService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobProjectTeamManageService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobProjectTeamManageService;