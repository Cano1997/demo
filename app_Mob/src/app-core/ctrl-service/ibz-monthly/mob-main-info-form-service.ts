import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobMainInfoModel } from '@/app-core/ctrl-model/ibz-monthly/mob-main-info-form-model';


/**
 * MobMainInfo 部件服务对象
 *
 * @export
 * @class MobMainInfoService
 * @extends {FormServiceBase}
 */
export class MobMainInfoService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobMainInfoModel}
     * @memberof ControlServiceBase
     */
    protected model: MobMainInfoModel = new MobMainInfoModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobMainInfoService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobMainInfoService
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
     * @memberof  MobMainInfoService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobMainInfoService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobMainInfoService;