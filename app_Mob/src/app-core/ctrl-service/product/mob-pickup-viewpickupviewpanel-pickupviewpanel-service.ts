import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/product/mob-pickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * MobPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class MobPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class MobPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MobPickupViewpickupviewpanelModel = new MobPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobPickupViewpickupviewpanelService;