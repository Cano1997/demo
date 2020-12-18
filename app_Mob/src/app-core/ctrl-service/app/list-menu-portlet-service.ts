import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ListMenuModel } from '@/app-core/ctrl-model/app/list-menu-portlet-model';


/**
 * ListMenu 部件服务对象
 *
 * @export
 * @class ListMenuService
 * @extends {PortletServiceBase}
 */
export class ListMenuService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ListMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: ListMenuModel = new ListMenuModel();
}
// 默认导出
export default ListMenuService;