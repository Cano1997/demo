import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr3MobMPickupLeftViewpickupviewpanelModel } from '@/app-core/ctrl-model/bug/usr3-mob-mpickup-left-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr3MobMPickupLeftViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr3MobMPickupLeftViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr3MobMPickupLeftViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr3MobMPickupLeftViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr3MobMPickupLeftViewpickupviewpanelModel = new Usr3MobMPickupLeftViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupLeftViewpickupviewpanelService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr3MobMPickupLeftViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Usr3MobMPickupLeftViewpickupviewpanelService;