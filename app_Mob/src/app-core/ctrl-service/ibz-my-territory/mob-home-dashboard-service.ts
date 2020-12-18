import { DashboardServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobHomeModel } from '@/app-core/ctrl-model/ibz-my-territory/mob-home-dashboard-model';


/**
 * MobHome 部件服务对象
 *
 * @export
 * @class MobHomeService
 * @extends {DashboardServiceBase}
 */
export class MobHomeService extends DashboardServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobHomeModel}
     * @memberof ControlServiceBase
     */
    protected model: MobHomeModel = new MobHomeModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobHomeService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobHomeService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobHomeService;