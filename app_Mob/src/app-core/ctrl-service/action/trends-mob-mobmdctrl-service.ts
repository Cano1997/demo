import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { TrendsMobModel } from '@/app-core/ctrl-model/action/trends-mob-mobmdctrl-model';


/**
 * TrendsMob 部件服务对象
 *
 * @export
 * @class TrendsMobService
 * @extends {MdServiceBase}
 */
export class TrendsMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {TrendsMobModel}
     * @memberof ControlServiceBase
     */
    protected model: TrendsMobModel = new TrendsMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TrendsMobService
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof TrendsMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default TrendsMobService;