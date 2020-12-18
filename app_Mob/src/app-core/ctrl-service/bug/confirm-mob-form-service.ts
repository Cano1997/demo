import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ConfirmMobModel } from '@/app-core/ctrl-model/bug/confirm-mob-form-model';


/**
 * ConfirmMob 部件服务对象
 *
 * @export
 * @class ConfirmMobService
 * @extends {FormServiceBase}
 */
export class ConfirmMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ConfirmMobModel}
     * @memberof ControlServiceBase
     */
    protected model: ConfirmMobModel = new ConfirmMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ConfirmMobService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ConfirmMobService
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
     * @memberof  ConfirmMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'SysEmployeeService') && Object.is(interfaceName, 'FetchDefault')) {
            const service: any = await this.getService('sysemployee');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchDefault(data);
            return this.doItems(response);
        }
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof ConfirmMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default ConfirmMobService;