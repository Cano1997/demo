import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr3MobMPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/bug/usr3-mob-mpickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr3MobMPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr3MobMPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr3MobMPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr3MobMPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr3MobMPickupViewpickupviewpanelModel = new Usr3MobMPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Usr3MobMPickupViewpickupviewpanelService;