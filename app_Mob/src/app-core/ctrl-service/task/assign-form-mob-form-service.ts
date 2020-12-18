import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssignFormMobModel } from '@/app-core/ctrl-model/task/assign-form-mob-form-model';


/**
 * AssignFormMob 部件服务对象
 *
 * @export
 * @class AssignFormMobService
 * @extends {FormServiceBase}
 */
export class AssignFormMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssignFormMobModel}
     * @memberof ControlServiceBase
     */
    protected model: AssignFormMobModel = new AssignFormMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssignFormMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssignFormMobService
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
     * @memberof  AssignFormMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof AssignFormMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default AssignFormMobService;