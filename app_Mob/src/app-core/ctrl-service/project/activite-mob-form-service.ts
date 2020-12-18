import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ActiviteMobModel } from '@/app-core/ctrl-model/project/activite-mob-form-model';


/**
 * ActiviteMob 部件服务对象
 *
 * @export
 * @class ActiviteMobService
 * @extends {FormServiceBase}
 */
export class ActiviteMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ActiviteMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ActiviteMobModel = new ActiviteMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActiviteMobService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ActiviteMobService
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
     * @memberof  ActiviteMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ActiviteMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ActiviteMobService;