import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_Release_StoryModel } from '@/app-core/ctrl-model/story/mob-release-story-mobmdctrl-model';


/**
 * MOB_Release_Story 部件服务对象
 *
 * @export
 * @class MOB_Release_StoryService
 * @extends {MdServiceBase}
 */
export class MOB_Release_StoryService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_Release_StoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_Release_StoryModel = new MOB_Release_StoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_StoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_StoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_Release_StoryService;