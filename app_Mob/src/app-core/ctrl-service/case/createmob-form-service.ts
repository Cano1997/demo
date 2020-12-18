import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { CreatemobModel } from '@/app-core/ctrl-model/case/createmob-form-model';


/**
 * Createmob 部件服务对象
 *
 * @export
 * @class CreatemobService
 * @extends {FormServiceBase}
 */
export class CreatemobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {CreatemobModel}
     * @memberof ControlServiceBase
     */
    protected model: CreatemobModel = new CreatemobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CreatemobService
     */
    protected appDEName: string = 'case';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof CreatemobService
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
     * @memberof  CreatemobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof CreatemobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default CreatemobService;