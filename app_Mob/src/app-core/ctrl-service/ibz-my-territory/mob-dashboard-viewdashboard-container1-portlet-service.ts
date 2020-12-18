import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobDashboardViewdashboard_container1Model } from '@/app-core/ctrl-model/ibz-my-territory/mob-dashboard-viewdashboard-container1-portlet-model';


/**
 * MobDashboardViewdashboard_container1 部件服务对象
 *
 * @export
 * @class MobDashboardViewdashboard_container1Service
 * @extends {PortletServiceBase}
 */
export class MobDashboardViewdashboard_container1Service extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobDashboardViewdashboard_container1Model}
     * @memberof ControlServiceBase
     */
    protected model: MobDashboardViewdashboard_container1Model = new MobDashboardViewdashboard_container1Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container1Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container1Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobDashboardViewdashboard_container1Service;