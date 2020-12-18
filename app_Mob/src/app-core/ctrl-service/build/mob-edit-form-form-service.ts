import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobEditFormModel } from '@/app-core/ctrl-model/build/mob-edit-form-form-model';


/**
 * MobEditForm 部件服务对象
 *
 * @export
 * @class MobEditFormService
 * @extends {FormServiceBase}
 */
export class MobEditFormService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobEditFormModel}
     * @memberof ControlServiceBase
     */
    protected model: MobEditFormModel = new MobEditFormModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobEditFormService
     */
    protected appDEName: string = 'build';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobEditFormService
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
     * @memberof  MobEditFormService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'ProductService') && Object.is(interfaceName, 'FetchCurProject')) {
            const service: any = await this.getService('product');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchCurProject(data);
            return this.doItems(response);
        }
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
     * @memberof MobEditFormService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobEditFormService;