import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobDailyEditModel } from '@/app-core/ctrl-model/ibz-daily/mob-daily-edit-form-model';


/**
 * MobDailyEdit 部件服务对象
 *
 * @export
 * @class MobDailyEditService
 * @extends {FormServiceBase}
 */
export class MobDailyEditService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobDailyEditModel}
     * @memberof ControlServiceBase
     */
    protected model: MobDailyEditModel = new MobDailyEditModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobDailyEditService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobDailyEditService
     */
    protected appDeKey: string = 'ibzdailyid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobDailyEditService
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
     * @memberof MobDailyEditService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'ibz_dailyname': 'srfpersonname' });
            Object.assign(response.data, { 'account': 'srfloginname' });
        }
    }

}
// 默认导出
export default MobDailyEditService;