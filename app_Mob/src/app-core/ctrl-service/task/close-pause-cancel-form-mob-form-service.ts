import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ClosePauseCancelFormMobModel } from '@/app-core/ctrl-model/task/close-pause-cancel-form-mob-form-model';


/**
 * ClosePauseCancelFormMob 部件服务对象
 *
 * @export
 * @class ClosePauseCancelFormMobService
 * @extends {FormServiceBase}
 */
export class ClosePauseCancelFormMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ClosePauseCancelFormMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ClosePauseCancelFormMobModel = new ClosePauseCancelFormMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ClosePauseCancelFormMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ClosePauseCancelFormMobService
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
     * @memberof  ClosePauseCancelFormMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ClosePauseCancelFormMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ClosePauseCancelFormMobService;