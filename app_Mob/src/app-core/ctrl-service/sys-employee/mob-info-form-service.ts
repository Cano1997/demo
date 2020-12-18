import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobInfoModel } from '@/app-core/ctrl-model/sys-employee/mob-info-form-model';


/**
 * MobInfo 部件服务对象
 *
 * @export
 * @class MobInfoService
 * @extends {FormServiceBase}
 */
export class MobInfoService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobInfoModel}
     * @memberof ControlServiceBase
     */
    protected model: MobInfoModel = new MobInfoModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobInfoService
     */
    protected appDEName: string = 'sysemployee';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobInfoService
     */
    protected appDeKey: string = 'userid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobInfoService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobInfoService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobInfoService;