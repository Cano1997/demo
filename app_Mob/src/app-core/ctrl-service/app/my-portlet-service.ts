import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyModel } from '@/app-core/ctrl-model/app/my-portlet-model';


/**
 * My 部件服务对象
 *
 * @export
 * @class MyService
 * @extends {PortletServiceBase}
 */
export class MyService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyModel = new MyModel();
}
// 默认导出
export default MyService;