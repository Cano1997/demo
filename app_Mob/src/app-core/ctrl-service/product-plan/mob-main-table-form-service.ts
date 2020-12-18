import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobMainTableModel } from '@/app-core/ctrl-model/product-plan/mob-main-table-form-model';


/**
 * MobMainTable 部件服务对象
 *
 * @export
 * @class MobMainTableService
 * @extends {FormServiceBase}
 */
export class MobMainTableService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobMainTableModel}
     * @memberof ControlServiceBase
     */
    protected model: MobMainTableModel = new MobMainTableModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobMainTableService
     */
    protected appDEName: string = 'productplan';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobMainTableService
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
     * @memberof  MobMainTableService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobMainTableService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobMainTableService;