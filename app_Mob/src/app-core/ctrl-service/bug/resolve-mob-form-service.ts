import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ResolveMobModel } from '@/app-core/ctrl-model/bug/resolve-mob-form-model';


/**
 * ResolveMob 部件服务对象
 *
 * @export
 * @class ResolveMobService
 * @extends {FormServiceBase}
 */
export class ResolveMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ResolveMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ResolveMobModel = new ResolveMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ResolveMobService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ResolveMobService
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
     * @memberof  ResolveMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ResolveMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ResolveMobService;