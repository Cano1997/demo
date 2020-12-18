import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReportlyModel } from '@/app-core/ctrl-model/ibz-reportly/my-reportly-mobmdctrl-model';


/**
 * MyReportly 部件服务对象
 *
 * @export
 * @class MyReportlyService
 * @extends {MdServiceBase}
 */
export class MyReportlyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReportlyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyReportlyModel = new MyReportlyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReportlyService
     */
    protected appDEName: string = 'ibzreportly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReportlyService
     */
    protected appDeKey: string = 'ibzreportlyid';
}
// 默认导出
export default MyReportlyService;