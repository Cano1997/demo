import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyCompleteTaskMonthlyModel } from '@/app-core/ctrl-model/task/my-complete-task-monthly-mobmdctrl-model';


/**
 * MyCompleteTaskMonthly 部件服务对象
 *
 * @export
 * @class MyCompleteTaskMonthlyService
 * @extends {MdServiceBase}
 */
export class MyCompleteTaskMonthlyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyCompleteTaskMonthlyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyCompleteTaskMonthlyModel = new MyCompleteTaskMonthlyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyCompleteTaskMonthlyService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyCompleteTaskMonthlyService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyCompleteTaskMonthlyService;