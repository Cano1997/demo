import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ImgswipeStyleMenuModel } from '@/app-core/ctrl-model/app/imgswipe-style-menu-appmenu-model';


/**
 * ImgswipeStyleMenu 部件服务对象
 *
 * @export
 * @class ImgswipeStyleMenuService
 * @extends {AppMenuServiceBase}
 */
export class ImgswipeStyleMenuService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ImgswipeStyleMenuModel}
     * @memberof ControlServiceBase
     */
    protected model: ImgswipeStyleMenuModel = new ImgswipeStyleMenuModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof ImgswipeStyleMenu
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/imgswipe-style-menuappmenu', params);
    }

}
// 默认导出
export default ImgswipeStyleMenuService;