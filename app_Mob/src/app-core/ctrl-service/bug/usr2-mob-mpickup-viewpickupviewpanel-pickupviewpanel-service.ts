import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobMPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/bug/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr2MobMPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobMPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr2MobMPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobMPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobMPickupViewpickupviewpanelModel = new Usr2MobMPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobMPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobMPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Usr2MobMPickupViewpickupviewpanelService;