import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportSubmitModel } from '@/app-core/ctrl-model/app/report-submit-appmenu-model';


/**
 * ReportSubmit 部件服务对象
 *
 * @export
 * @class ReportSubmitService
 * @extends {AppMenuServiceBase}
 */
export class ReportSubmitService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportSubmitModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportSubmitModel = new ReportSubmitModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof ReportSubmit
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/report-submitappmenu', params);
    }

}
// 默认导出
export default ReportSubmitService;