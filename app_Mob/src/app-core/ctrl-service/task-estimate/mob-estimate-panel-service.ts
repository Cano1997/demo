import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobEstimateModel } from '@/app-core/ctrl-model/task-estimate/mob-estimate-panel-model';


/**
 * MobEstimate 部件服务对象
 *
 * @export
 * @class MobEstimateService
 * @extends {ListServiceBase}
 */
export class MobEstimateService extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobEstimateModel}
     * @memberof ControlServiceBase
     */
    protected model: MobEstimateModel = new MobEstimateModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobEstimateService
     */
    protected appDEName: string = 'taskestimate';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobEstimateService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobEstimateService;