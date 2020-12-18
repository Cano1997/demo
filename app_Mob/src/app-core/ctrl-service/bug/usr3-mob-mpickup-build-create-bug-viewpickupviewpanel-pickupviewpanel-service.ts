import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr3MobMPickupBuildCreateBugViewpickupviewpanelModel } from '@/app-core/ctrl-model/bug/usr3-mob-mpickup-build-create-bug-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr3MobMPickupBuildCreateBugViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr3MobMPickupBuildCreateBugViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr3MobMPickupBuildCreateBugViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr3MobMPickupBuildCreateBugViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr3MobMPickupBuildCreateBugViewpickupviewpanelModel = new Usr3MobMPickupBuildCreateBugViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupBuildCreateBugViewpickupviewpanelService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupBuildCreateBugViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Usr3MobMPickupBuildCreateBugViewpickupviewpanelService;