import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { CompleteFormMobModel } from '@/app-core/ctrl-model/task/complete-form-mob-form-model';


/**
 * CompleteFormMob 部件服务对象
 *
 * @export
 * @class CompleteFormMobService
 * @extends {FormServiceBase}
 */
export class CompleteFormMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {CompleteFormMobModel}
     * @memberof ControlServiceBase
     */
    protected model: CompleteFormMobModel = new CompleteFormMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CompleteFormMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof CompleteFormMobService
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
     * @memberof  CompleteFormMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof CompleteFormMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default CompleteFormMobService;