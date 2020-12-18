import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobMainDataEditModel } from '@/app-core/ctrl-model/bug/mob-main-data-edit-form-model';


/**
 * MobMainDataEdit 部件服务对象
 *
 * @export
 * @class MobMainDataEditService
 * @extends {FormServiceBase}
 */
export class MobMainDataEditService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobMainDataEditModel}
     * @memberof ControlServiceBase
     */
    protected model: MobMainDataEditModel = new MobMainDataEditModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobMainDataEditService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobMainDataEditService
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
     * @memberof  MobMainDataEditService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'ProductService') && Object.is(interfaceName, 'FetchCurUer')) {
            const service: any = await this.getService('product');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchCurUer(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'ModuleService') && Object.is(interfaceName, 'FetchBugModule')) {
            const service: any = await this.getService('module');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchBugModule(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'SysEmployeeService') && Object.is(interfaceName, 'FetchDefault')) {
            const service: any = await this.getService('sysemployee');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchDefault(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'ProjectService') && Object.is(interfaceName, 'FetchBugProject')) {
            const service: any = await this.getService('project');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchBugProject(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'StoryService') && Object.is(interfaceName, 'FetchBugStory')) {
            const service: any = await this.getService('story');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchBugStory(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'TaskService') && Object.is(interfaceName, 'FetchBugTask')) {
            const service: any = await this.getService('task');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchBugTask(data);
            return this.doItems(response);
        }
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobMainDataEditService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobMainDataEditService;