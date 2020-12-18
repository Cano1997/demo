import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReModel } from '@/app-core/ctrl-model/ibz-report/my-re-mobmdctrl-model';


/**
 * MyRe 部件服务对象
 *
 * @export
 * @class MyReService
 * @extends {MdServiceBase}
 */
export class MyReService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReModel}
     * @memberof ControlServiceBase
     */
    protected model: MyReModel = new MyReModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReService
     */
    protected appDEName: string = 'ibzreport';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReService
     */
    protected appDeKey: string = 'ibzdailyid';
}
// 默认导出
export default MyReService;