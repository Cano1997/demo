import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyWorkMobModel } from '@/app-core/ctrl-model/ibz-my-territory/my-work-mob-panel-model';


/**
 * MyWorkMob 部件服务对象
 *
 * @export
 * @class MyWorkMobService
 * @extends {ListServiceBase}
 */
export class MyWorkMobService extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyWorkMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyWorkMobModel = new MyWorkMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWorkMobService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyWorkMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyWorkMobService;