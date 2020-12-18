import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyCompleteTaskMobModel } from '@/app-core/ctrl-model/task/my-complete-task-mob-mobmdctrl-model';


/**
 * MyCompleteTaskMob 部件服务对象
 *
 * @export
 * @class MyCompleteTaskMobService
 * @extends {MdServiceBase}
 */
export class MyCompleteTaskMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyCompleteTaskMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyCompleteTaskMobModel = new MyCompleteTaskMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyCompleteTaskMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyCompleteTaskMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyCompleteTaskMobService;