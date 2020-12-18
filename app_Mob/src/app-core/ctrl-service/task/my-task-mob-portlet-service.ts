import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyTaskMobModel } from '@/app-core/ctrl-model/task/my-task-mob-portlet-model';


/**
 * MyTaskMob 部件服务对象
 *
 * @export
 * @class MyTaskMobService
 * @extends {PortletServiceBase}
 */
export class MyTaskMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyTaskMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyTaskMobModel = new MyTaskMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyTaskMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyTaskMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyTaskMobService;