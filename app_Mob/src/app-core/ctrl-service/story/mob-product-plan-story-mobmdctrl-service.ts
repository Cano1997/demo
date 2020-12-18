import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_ProductPlan_StoryModel } from '@/app-core/ctrl-model/story/mob-product-plan-story-mobmdctrl-model';


/**
 * Mob_ProductPlan_Story 部件服务对象
 *
 * @export
 * @class Mob_ProductPlan_StoryService
 * @extends {MdServiceBase}
 */
export class Mob_ProductPlan_StoryService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_ProductPlan_StoryModel}
     * @memberof ControlServiceBase
     */
    protected model: Mob_ProductPlan_StoryModel = new Mob_ProductPlan_StoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_ProductPlan_StoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_ProductPlan_StoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_ProductPlan_StoryService;