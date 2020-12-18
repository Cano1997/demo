import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobMPickupBuildViewpickupviewpanelModel } from '@/app-core/ctrl-model/story/usr2-mob-mpickup-build-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr2MobMPickupBuildViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobMPickupBuildViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr2MobMPickupBuildViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobMPickupBuildViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobMPickupBuildViewpickupviewpanelModel = new Usr2MobMPickupBuildViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobMPickupBuildViewpickupviewpanelService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobMPickupBuildViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Usr2MobMPickupBuildViewpickupviewpanelService;