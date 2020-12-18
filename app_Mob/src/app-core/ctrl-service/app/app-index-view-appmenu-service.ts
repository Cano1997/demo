import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AppIndexViewModel } from '@/app-core/ctrl-model/app/app-index-view-appmenu-model';


/**
 * AppIndexView 部件服务对象
 *
 * @export
 * @class AppIndexViewService
 * @extends {AppMenuServiceBase}
 */
export class AppIndexViewService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AppIndexViewModel}
     * @memberof ControlServiceBase
     */
    protected model: AppIndexViewModel = new AppIndexViewModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof AppIndexView
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/app-index-viewappmenu', params);
    }

}
// 默认导出
export default AppIndexViewService;