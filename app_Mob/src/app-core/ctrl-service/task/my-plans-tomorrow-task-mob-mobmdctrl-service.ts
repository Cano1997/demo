import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyPlansTomorrowTaskMobModel } from '@/app-core/ctrl-model/task/my-plans-tomorrow-task-mob-mobmdctrl-model';


/**
 * MyPlansTomorrowTaskMob 部件服务对象
 *
 * @export
 * @class MyPlansTomorrowTaskMobService
 * @extends {MdServiceBase}
 */
export class MyPlansTomorrowTaskMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyPlansTomorrowTaskMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyPlansTomorrowTaskMobModel = new MyPlansTomorrowTaskMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyPlansTomorrowTaskMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyPlansTomorrowTaskMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyPlansTomorrowTaskMobService;