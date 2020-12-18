import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { DailyInfoMobModel } from '@/app-core/ctrl-model/ibz-daily/daily-info-mob-form-model';


/**
 * DailyInfoMob 部件服务对象
 *
 * @export
 * @class DailyInfoMobService
 * @extends {FormServiceBase}
 */
export class DailyInfoMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {DailyInfoMobModel}
     * @memberof ControlServiceBase
     */
    protected model: DailyInfoMobModel = new DailyInfoMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DailyInfoMobService
     */
    protected appDEName: string = 'ibzdaily';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof DailyInfoMobService
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
     * @memberof  DailyInfoMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof DailyInfoMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default DailyInfoMobService;