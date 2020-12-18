import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobReportlyDetailModel } from '@/app-core/ctrl-model/ibz-reportly/mob-reportly-detail-form-model';


/**
 * MobReportlyDetail 部件服务对象
 *
 * @export
 * @class MobReportlyDetailService
 * @extends {FormServiceBase}
 */
export class MobReportlyDetailService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobReportlyDetailModel}
     * @memberof ControlServiceBase
     */
    protected model: MobReportlyDetailModel = new MobReportlyDetailModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobReportlyDetailService
     */
    protected appDEName: string = 'ibzreportly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobReportlyDetailService
     */
    protected appDeKey: string = 'ibzreportlyid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobReportlyDetailService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobReportlyDetailService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobReportlyDetailService;