import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobEditTableModel } from '@/app-core/ctrl-model/test-suite/mob-edit-table-form-model';


/**
 * MobEditTable 部件服务对象
 *
 * @export
 * @class MobEditTableService
 * @extends {FormServiceBase}
 */
export class MobEditTableService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobEditTableModel}
     * @memberof ControlServiceBase
     */
    protected model: MobEditTableModel = new MobEditTableModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobEditTableService
     */
    protected appDEName: string = 'testsuite';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobEditTableService
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
     * @memberof  MobEditTableService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobEditTableService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'type': 'private' });
        }
    }

}
// 默认导出
export default MobEditTableService;