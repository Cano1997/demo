import { DashboardServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AppPortalView2_dbModel } from '@/app-core/ctrl-model/app/app-portal-view2-db-dashboard-model';


/**
 * AppPortalView2_db 部件服务对象
 *
 * @export
 * @class AppPortalView2_dbService
 * @extends {DashboardServiceBase}
 */
export class AppPortalView2_dbService extends DashboardServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AppPortalView2_dbModel}
     * @memberof ControlServiceBase
     */
    protected model: AppPortalView2_dbModel = new AppPortalView2_dbModel();
}
// 默认导出
export default AppPortalView2_dbService;