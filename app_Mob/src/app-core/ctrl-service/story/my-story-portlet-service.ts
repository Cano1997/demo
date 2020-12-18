import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyStoryModel } from '@/app-core/ctrl-model/story/my-story-portlet-model';


/**
 * MyStory 部件服务对象
 *
 * @export
 * @class MyStoryService
 * @extends {PortletServiceBase}
 */
export class MyStoryService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyStoryModel}
     * @memberof ControlServiceBase
     */
    protected model: MyStoryModel = new MyStoryModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyStoryService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyStoryService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyStoryService;