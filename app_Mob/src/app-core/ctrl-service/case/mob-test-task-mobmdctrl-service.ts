import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_TestTaskModel } from '@/app-core/ctrl-model/case/mob-test-task-mobmdctrl-model';


/**
 * Mob_TestTask 部件服务对象
 *
 * @export
 * @class Mob_TestTaskService
 * @extends {MdServiceBase}
 */
export class Mob_TestTaskService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_TestTaskModel}
     * @memberof ControlServiceBase
     */
    protected model: Mob_TestTaskModel = new Mob_TestTaskModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_TestTaskService
     */
    protected appDEName: string = 'case';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_TestTaskService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_TestTaskService;