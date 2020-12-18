import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { UserTreeMobMPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/sys-employee/user-tree-mob-mpickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * UserTreeMobMPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class UserTreeMobMPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class UserTreeMobMPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {UserTreeMobMPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: UserTreeMobMPickupViewpickupviewpanelModel = new UserTreeMobMPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserTreeMobMPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'sysemployee';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof UserTreeMobMPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'userid';
}
// 默认导出
export default UserTreeMobMPickupViewpickupviewpanelService;