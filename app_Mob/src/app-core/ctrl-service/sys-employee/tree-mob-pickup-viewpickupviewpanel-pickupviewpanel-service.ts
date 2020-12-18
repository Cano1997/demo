import { PickupViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { TreeMobPickupViewpickupviewpanelModel } from '@/app-core/ctrl-model/sys-employee/tree-mob-pickup-viewpickupviewpanel-pickupviewpanel-model';


/**
 * TreeMobPickupViewpickupviewpanel 部件服务对象
 *
 * @export
 * @class TreeMobPickupViewpickupviewpanelService
 * @extends {PickupViewPanelServiceBase}
 */
export class TreeMobPickupViewpickupviewpanelService extends PickupViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {TreeMobPickupViewpickupviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: TreeMobPickupViewpickupviewpanelModel = new TreeMobPickupViewpickupviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TreeMobPickupViewpickupviewpanelService
     */
    protected appDEName: string = 'sysemployee';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof TreeMobPickupViewpickupviewpanelService
     */
    protected appDeKey: string = 'userid';
}
// 默认导出
export default TreeMobPickupViewpickupviewpanelService;