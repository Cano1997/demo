import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { CloseMobModel } from '@/app-core/ctrl-model/bug/close-mob-form-model';


/**
 * CloseMob 部件服务对象
 *
 * @export
 * @class CloseMobService
 * @extends {FormServiceBase}
 */
export class CloseMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {CloseMobModel}
     * @memberof ControlServiceBase
     */
    protected model: CloseMobModel = new CloseMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CloseMobService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof CloseMobService
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
     * @memberof  CloseMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof CloseMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default CloseMobService;