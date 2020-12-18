import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { WeeklyMyReceviedModel } from '@/app-core/ctrl-model/ibz-weekly/weekly-my-recevied-mobmdctrl-model';


/**
 * WeeklyMyRecevied 部件服务对象
 *
 * @export
 * @class WeeklyMyReceviedService
 * @extends {MdServiceBase}
 */
export class WeeklyMyReceviedService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {WeeklyMyReceviedModel}
     * @memberof ControlServiceBase
     */
    protected model: WeeklyMyReceviedModel = new WeeklyMyReceviedModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof WeeklyMyReceviedService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof WeeklyMyReceviedService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default WeeklyMyReceviedService;