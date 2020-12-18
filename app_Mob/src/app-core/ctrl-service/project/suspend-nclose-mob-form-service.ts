import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { SuspendNCloseMobModel } from '@/app-core/ctrl-model/project/suspend-nclose-mob-form-model';


/**
 * SuspendNCloseMob 部件服务对象
 *
 * @export
 * @class SuspendNCloseMobService
 * @extends {FormServiceBase}
 */
export class SuspendNCloseMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {SuspendNCloseMobModel}
     * @memberof ControlServiceBase
     */
    protected model: SuspendNCloseMobModel = new SuspendNCloseMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SuspendNCloseMobService
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof SuspendNCloseMobService
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
     * @memberof  SuspendNCloseMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof SuspendNCloseMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default SuspendNCloseMobService;