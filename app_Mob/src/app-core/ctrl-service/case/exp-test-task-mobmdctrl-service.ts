import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Exp_TestTaskModel } from '@/app-core/ctrl-model/case/exp-test-task-mobmdctrl-model';


/**
 * Exp_TestTask 部件服务对象
 *
 * @export
 * @class Exp_TestTaskService
 * @extends {MdServiceBase}
 */
export class Exp_TestTaskService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Exp_TestTaskModel}
     * @memberof ControlServiceBase
     */
    protected model: Exp_TestTaskModel = new Exp_TestTaskModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Exp_TestTaskService
     */
    protected appDEName: string = 'case';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Exp_TestTaskService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Exp_TestTaskService;