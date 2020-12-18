import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { EditFormModel } from '@/app-core/ctrl-model/ibz-weekly/form-form-model';


/**
 * EditForm 部件服务对象
 *
 * @export
 * @class EditFormService
 * @extends {FormServiceBase}
 */
export class EditFormService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {EditFormModel}
     * @memberof ControlServiceBase
     */
    protected model: EditFormModel = new EditFormModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof EditFormService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof EditFormService
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
     * @memberof  EditFormService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof EditFormService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default EditFormService;