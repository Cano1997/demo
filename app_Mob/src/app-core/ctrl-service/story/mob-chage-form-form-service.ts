import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobChageFormModel } from '@/app-core/ctrl-model/story/mob-chage-form-form-model';


/**
 * MobChageForm 部件服务对象
 *
 * @export
 * @class MobChageFormService
 * @extends {FormServiceBase}
 */
export class MobChageFormService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobChageFormModel}
     * @memberof ControlServiceBase
     */
    protected model: MobChageFormModel = new MobChageFormModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobChageFormService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobChageFormService
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
     * @memberof  MobChageFormService
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
     * @memberof MobChageFormService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'neednotreview': '0' });
        }
    }

}
// 默认导出
export default MobChageFormService;