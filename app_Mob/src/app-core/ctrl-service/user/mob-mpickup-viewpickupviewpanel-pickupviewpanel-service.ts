import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobMPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/user/mob-mpickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * MobMPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class MobMPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class MobMPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobMPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MobMPickupViewpickupviewpanelModel = new MobMPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobMPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'user';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobMPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobMPickupViewpickupviewpanelService;