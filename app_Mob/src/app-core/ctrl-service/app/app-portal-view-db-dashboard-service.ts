import { DashboardServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AppPortalView_dbModel } from '@/app-core/ctrl-model/app/app-portal-view-db-dashboard-model';


/**
 * AppPortalView_db 部件服务对象
 *
 * @export
 * @class AppPortalView_dbService
 * @extends {DashboardServiceBase}
 */
export class AppPortalView_dbService extends DashboardServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AppPortalView_dbModel}
     * @memberof ControlServiceBase
     */
    protected model: AppPortalView_dbModel = new AppPortalView_dbModel();
}
// 默认导出
export default AppPortalView_dbService;