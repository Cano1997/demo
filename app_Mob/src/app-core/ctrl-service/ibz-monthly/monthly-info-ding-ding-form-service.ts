import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MonthlyInfoDingDingModel } from '@/app-core/ctrl-model/ibz-monthly/monthly-info-ding-ding-form-model';


/**
 * MonthlyInfoDingDing 部件服务对象
 *
 * @export
 * @class MonthlyInfoDingDingService
 * @extends {FormServiceBase}
 */
export class MonthlyInfoDingDingService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MonthlyInfoDingDingModel}
     * @memberof ControlServiceBase
     */
    protected model: MonthlyInfoDingDingModel = new MonthlyInfoDingDingModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MonthlyInfoDingDingService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MonthlyInfoDingDingService
     */
    protected appDeKey: string = 'ibzmonthlyid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MonthlyInfoDingDingService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MonthlyInfoDingDingService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MonthlyInfoDingDingService;