import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobDashboardViewdashboard_container6Model } from '@/app-core/ctrl-model/ibz-my-territory/mob-dashboard-viewdashboard-container6-portlet-model';


/**
 * MobDashboardViewdashboard_container6 部件服务对象
 *
 * @export
 * @class MobDashboardViewdashboard_container6Service
 * @extends {PortletServiceBase}
 */
export class MobDashboardViewdashboard_container6Service extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobDashboardViewdashboard_container6Model}
     * @memberof ControlServiceBase
     */
    protected model: MobDashboardViewdashboard_container6Model = new MobDashboardViewdashboard_container6Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container6Service
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobDashboardViewdashboard_container6Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobDashboardViewdashboard_container6Service;