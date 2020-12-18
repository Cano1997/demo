import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ImgswipeStyleMenuModel } from '@/app-core/ctrl-model/app/imgswipe-style-menu-portlet-model';


/**
 * ImgswipeStyleMenu 部件服务对象
 *
 * @export
 * @class ImgswipeStyleMenuService
 * @extends {PortletServiceBase}
 */
export class ImgswipeStyleMenuService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ImgswipeStyleMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: ImgswipeStyleMenuModel = new ImgswipeStyleMenuModel();
}
// 默认导出
export default ImgswipeStyleMenuService;