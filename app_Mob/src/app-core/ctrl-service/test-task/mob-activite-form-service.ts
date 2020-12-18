import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobActiviteModel } from '@/app-core/ctrl-model/test-task/mob-activite-form-model';


/**
 * MobActivite 部件服务对象
 *
 * @export
 * @class MobActiviteService
 * @extends {FormServiceBase}
 */
export class MobActiviteService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobActiviteModel}
     * @memberof ControlServiceBase
     */
    protected model: MobActiviteModel = new MobActiviteModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobActiviteService
     */
    protected appDEName: string = 'testtask';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobActiviteService
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
     * @memberof  MobActiviteService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobActiviteService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobActiviteService;