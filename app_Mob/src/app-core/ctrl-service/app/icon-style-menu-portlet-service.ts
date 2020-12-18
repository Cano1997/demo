import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { IconStyleMenuModel } from '@/app-core/ctrl-model/app/icon-style-menu-portlet-model';


/**
 * IconStyleMenu 部件服务对象
 *
 * @export
 * @class IconStyleMenuService
 * @extends {PortletServiceBase}
 */
export class IconStyleMenuService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {IconStyleMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: IconStyleMenuModel = new IconStyleMenuModel();
}
// 默认导出
export default IconStyleMenuService;