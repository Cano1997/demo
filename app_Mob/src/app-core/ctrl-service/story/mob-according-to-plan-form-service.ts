import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobAccordingToPlanModel } from '@/app-core/ctrl-model/story/mob-according-to-plan-form-model';


/**
 * MobAccordingToPlan 部件服务对象
 *
 * @export
 * @class MobAccordingToPlanService
 * @extends {FormServiceBase}
 */
export class MobAccordingToPlanService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobAccordingToPlanModel}
     * @memberof ControlServiceBase
     */
    protected model: MobAccordingToPlanModel = new MobAccordingToPlanModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobAccordingToPlanService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobAccordingToPlanService
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
     * @memberof  MobAccordingToPlanService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobAccordingToPlanService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'project': 'project' });
            Object.assign(response.data, { 'id': '0' });
        }
    }

}
// 默认导出
export default MobAccordingToPlanService;