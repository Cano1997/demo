import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { LogMainModel } from '@/app-core/ctrl-model/build/log-main-form-model';


/**
 * LogMain 部件服务对象
 *
 * @export
 * @class LogMainService
 * @extends {FormServiceBase}
 */
export class LogMainService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {LogMainModel}
     * @memberof ControlServiceBase
     */
    protected model: LogMainModel = new LogMainModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LogMainService
     */
    protected appDEName: string = 'build';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof LogMainService
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
     * @memberof  LogMainService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof LogMainService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default LogMainService;