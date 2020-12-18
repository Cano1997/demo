import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobDashboardViewdashboard_container4Model } from '@/app-core/ctrl-model/ibz-my-territory/mob-dashboard-viewdashboard-container4-portlet-model';


/**
 * MobDashboardViewdashboard_container4 部件服务对象
 *
 * @export
 * @class MobDashboardViewdashboard_container4Service
 * @extends {PortletServiceBase}
 */
export class MobDashboardViewdashboard_container4Service extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobDashboardViewdashboard_container4Model}
     * @memberof ControlServiceBase
     */
    protected model: MobDashboardViewdashboard_container4Model = new MobDashboardViewdashboard_container4Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container4Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container4Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobDashboardViewdashboard_container4Service;