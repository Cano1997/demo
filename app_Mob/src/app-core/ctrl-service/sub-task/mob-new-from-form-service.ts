import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobNewFromModel } from '@/app-core/ctrl-model/sub-task/mob-new-from-form-model';


/**
 * MobNewFrom 部件服务对象
 *
 * @export
 * @class MobNewFromService
 * @extends {FormServiceBase}
 */
export class MobNewFromService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobNewFromModel}
     * @memberof ControlServiceBase
     */
    protected model: MobNewFromModel = new MobNewFromModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobNewFromService
     */
    protected appDEName: string = 'subtask';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobNewFromService
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
     * @memberof  MobNewFromService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'ProjectService') && Object.is(interfaceName, 'FetchCurUser')) {
            const service: any = await this.getService('project');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchCurUser(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'ProjectModuleService') && Object.is(interfaceName, 'FetchTaskModules')) {
            const service: any = await this.getService('projectmodule');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchTaskModules(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'StoryService') && Object.is(interfaceName, 'FetchTaskRelatedStory')) {
            const service: any = await this.getService('story');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchTaskRelatedStory(data);
            return this.doItems(response);
        }
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobNewFromService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'module': 'module' });
            Object.assign(response.data, { 'allmodules': '1' });
            Object.assign(response.data, { 'story': 'story' });
        }
    }

}
// 默认导出
export default MobNewFromService;