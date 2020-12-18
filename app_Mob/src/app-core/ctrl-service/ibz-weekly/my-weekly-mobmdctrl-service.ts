import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyWeeklyModel } from '@/app-core/ctrl-model/ibz-weekly/my-weekly-mobmdctrl-model';


/**
 * MyWeekly 部件服务对象
 *
 * @export
 * @class MyWeeklyService
 * @extends {MdServiceBase}
 */
export class MyWeeklyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyWeeklyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyWeeklyModel = new MyWeeklyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWeeklyService
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyWeeklyService
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default MyWeeklyService;