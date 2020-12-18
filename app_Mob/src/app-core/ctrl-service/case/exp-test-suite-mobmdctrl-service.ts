import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Exp_TestSuiteModel } from '@/app-core/ctrl-model/case/exp-test-suite-mobmdctrl-model';


/**
 * Exp_TestSuite 部件服务对象
 *
 * @export
 * @class Exp_TestSuiteService
 * @extends {MdServiceBase}
 */
export class Exp_TestSuiteService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Exp_TestSuiteModel}
     * @memberof ControlServiceBase
     */
    protected model: Exp_TestSuiteModel = new Exp_TestSuiteModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Exp_TestSuiteService
     */
    protected appDEName: string = 'case';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Exp_TestSuiteService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Exp_TestSuiteService;