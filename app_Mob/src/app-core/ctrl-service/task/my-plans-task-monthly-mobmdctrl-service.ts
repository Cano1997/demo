import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyPlansTaskMonthlyModel } from '@/app-core/ctrl-model/task/my-plans-task-monthly-mobmdctrl-model';


/**
 * MyPlansTaskMonthly 部件服务对象
 *
 * @export
 * @class MyPlansTaskMonthlyService
 * @extends {MdServiceBase}
 */
export class MyPlansTaskMonthlyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyPlansTaskMonthlyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyPlansTaskMonthlyModel = new MyPlansTaskMonthlyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyPlansTaskMonthlyService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyPlansTaskMonthlyService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyPlansTaskMonthlyService;