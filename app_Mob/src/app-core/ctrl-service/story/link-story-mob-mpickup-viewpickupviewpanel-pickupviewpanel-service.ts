import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { LinkStoryMobMPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/story/link-story-mob-mpickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * LinkStoryMobMPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class LinkStoryMobMPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class LinkStoryMobMPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {LinkStoryMobMPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: LinkStoryMobMPickupViewpickupviewpanelModel = new LinkStoryMobMPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof LinkStoryMobMPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof LinkStoryMobMPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default LinkStoryMobMPickupViewpickupviewpanelService;