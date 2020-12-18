import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssMobModel } from '@/app-core/ctrl-model/todo/ass-mob-form-model';


/**
 * AssMob 部件服务对象
 *
 * @export
 * @class AssMobService
 * @extends {FormServiceBase}
 */
export class AssMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssMobModel}
     * @memberof ControlServiceBase
     */
    protected model: AssMobModel = new AssMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssMobService
     */
    protected appDEName: string = 'todo';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssMobService
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
     * @memberof  AssMobService
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
     * @memberof AssMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default AssMobService;