import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { TrendsMobMoreModel } from '@/app-core/ctrl-model/action/trends-mob-more-mobmdctrl-model';


/**
 * TrendsMobMore 部件服务对象
 *
 * @export
 * @class TrendsMobMoreService
 * @extends {MdServiceBase}
 */
export class TrendsMobMoreService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {TrendsMobMoreModel}
     * @memberof ControlServiceBase
     */
    protected model: TrendsMobMoreModel = new TrendsMobMoreModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TrendsMobMoreService
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof TrendsMobMoreService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default TrendsMobMoreService;