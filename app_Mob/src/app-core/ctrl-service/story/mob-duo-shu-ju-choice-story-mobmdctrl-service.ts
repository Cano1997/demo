import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_DuoShuJuChoice_StoryModel } from '@/app-core/ctrl-model/story/mob-duo-shu-ju-choice-story-mobmdctrl-model';


/**
 * MOB_DuoShuJuChoice_Story 部件服务对象
 *
 * @export
 * @class MOB_DuoShuJuChoice_StoryService
 * @extends {MdServiceBase}
 */
export class MOB_DuoShuJuChoice_StoryService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_DuoShuJuChoice_StoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_DuoShuJuChoice_StoryModel = new MOB_DuoShuJuChoice_StoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_DuoShuJuChoice_StoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_DuoShuJuChoice_StoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_DuoShuJuChoice_StoryService;