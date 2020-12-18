import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { IconStyleMenuModel } from '@/app-core/ctrl-model/app/icon-style-menu-appmenu-model';


/**
 * IconStyleMenu 部件服务对象
 *
 * @export
 * @class IconStyleMenuService
 * @extends {AppMenuServiceBase}
 */
export class IconStyleMenuService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {IconStyleMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: IconStyleMenuModel = new IconStyleMenuModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof IconStyleMenu
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/icon-style-menuappmenu', params);
    }

}
// 默认导出
export default IconStyleMenuService;