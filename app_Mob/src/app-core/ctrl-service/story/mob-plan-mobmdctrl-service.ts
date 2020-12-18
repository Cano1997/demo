import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_PlanModel } from '@/app-core/ctrl-model/story/mob-plan-mobmdctrl-model';


/**
 * Mob_Plan 部件服务对象
 *
 * @export
 * @class Mob_PlanService
 * @extends {MdServiceBase}
 */
export class Mob_PlanService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_PlanModel}
     * @memberof ControlServiceBase
     */
    protected model: Mob_PlanModel = new Mob_PlanModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_PlanService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_PlanService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_PlanService;