import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ReportNewModel } from '@/app-core/ctrl-model/app/report-new-appmenu-model';


/**
 * ReportNew 部件服务对象
 *
 * @export
 * @class ReportNewService
 * @extends {AppMenuServiceBase}
 */
export class ReportNewService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ReportNewModel}
     * @memberof ControlServiceBase
     */
    protected model: ReportNewModel = new ReportNewModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof ReportNew
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/report-newappmenu', params);
    }

}
// 默认导出
export default ReportNewService;