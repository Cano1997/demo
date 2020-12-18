import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobWeekEditModel } from '@/app-core/ctrl-model/ibz-weekly/mob-week-edit-form-model';


/**
 * MobWeekEdit 部件服务对象
 *
 * @export
 * @class MobWeekEditService
 * @extends {FormServiceBase}
 */
export class MobWeekEditService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobWeekEditModel}
     * @memberof ControlServiceBase
     */
    protected model: MobWeekEditModel = new MobWeekEditModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobWeekEditService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobWeekEditService
     */
    protected appDeKey: string = 'ibzweeklyid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobWeekEditService
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
     * @memberof MobWeekEditService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'account': 'srfloginname' });
            Object.assign(response.data, { 'issubmit': '0' });
        }
    }

}
// 默认导出
export default MobWeekEditService;