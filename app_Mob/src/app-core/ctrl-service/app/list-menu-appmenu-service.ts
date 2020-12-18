import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ListMenuModel } from '@/app-core/ctrl-model/app/list-menu-appmenu-model';


/**
 * ListMenu 部件服务对象
 *
 * @export
 * @class ListMenuService
 * @extends {AppMenuServiceBase}
 */
export class ListMenuService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ListMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: ListMenuModel = new ListMenuModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof ListMenu
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/list-menuappmenu', params);
    }

}
// 默认导出
export default ListMenuService;