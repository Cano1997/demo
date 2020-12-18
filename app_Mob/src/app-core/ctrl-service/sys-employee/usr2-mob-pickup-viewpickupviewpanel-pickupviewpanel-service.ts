import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/sys-employee/usr2-mob-pickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * Usr2MobPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class Usr2MobPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class Usr2MobPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobPickupViewpickupviewpanelModel = new Usr2MobPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'sysemployee';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'userid';
}
// 默认导出
export default Usr2MobPickupViewpickupviewpanelService;