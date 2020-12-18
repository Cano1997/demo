import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_ProjectLinkStoryModel } from '@/app-core/ctrl-model/story/mob-project-link-story-mobmdctrl-model';


/**
 * MOB_ProjectLinkStory 部件服务对象
 *
 * @export
 * @class MOB_ProjectLinkStoryService
 * @extends {MdServiceBase}
 */
export class MOB_ProjectLinkStoryService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_ProjectLinkStoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_ProjectLinkStoryModel = new MOB_ProjectLinkStoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_ProjectLinkStoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_ProjectLinkStoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_ProjectLinkStoryService;