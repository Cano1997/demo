import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_Task_CaseModel } from '@/app-core/ctrl-model/case/mob-task-case-mobmdctrl-model';


/**
 * Mob_Task_Case 部件服务对象
 *
 * @export
 * @class Mob_Task_CaseService
 * @extends {MdServiceBase}
 */
export class Mob_Task_CaseService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_Task_CaseModel}
     * @memberof ControlServiceBase
     */
    protected model: Mob_Task_CaseModel = new Mob_Task_CaseModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_Task_CaseService
     */
    protected appDEName: string = 'case';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_Task_CaseService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_Task_CaseService;