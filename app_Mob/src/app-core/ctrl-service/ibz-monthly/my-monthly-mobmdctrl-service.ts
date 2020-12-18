import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyMonthlyModel } from '@/app-core/ctrl-model/ibz-monthly/my-monthly-mobmdctrl-model';


/**
 * MyMonthly 部件服务对象
 *
 * @export
 * @class MyMonthlyService
 * @extends {MdServiceBase}
 */
export class MyMonthlyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyMonthlyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyMonthlyModel = new MyMonthlyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyMonthlyService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyMonthlyService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyMonthlyService;