import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobNewModel } from '@/app-core/ctrl-model/todo/mob-new-form-model';


/**
 * MobNew 部件服务对象
 *
 * @export
 * @class MobNewService
 * @extends {FormServiceBase}
 */
export class MobNewService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobNewModel}
     * @memberof ControlServiceBase
     */
    protected model: MobNewModel = new MobNewModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobNewService
     */
    protected appDEName: string = 'todo';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobNewService
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
     * @memberof  MobNewService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobNewService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'type': 'custom' });
        }
    }

}
// 默认导出
export default MobNewService;