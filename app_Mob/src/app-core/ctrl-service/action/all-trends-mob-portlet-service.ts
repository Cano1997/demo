import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AllTrendsMobModel } from '@/app-core/ctrl-model/action/all-trends-mob-portlet-model';


/**
 * AllTrendsMob 部件服务对象
 *
 * @export
 * @class AllTrendsMobService
 * @extends {PortletServiceBase}
 */
export class AllTrendsMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AllTrendsMobModel}
     * @memberof ControlServiceBase
     */
    protected model: AllTrendsMobModel = new AllTrendsMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AllTrendsMobService
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AllTrendsMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default AllTrendsMobService;