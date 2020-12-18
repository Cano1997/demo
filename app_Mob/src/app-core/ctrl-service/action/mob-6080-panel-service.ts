import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_6080Model } from '@/app-core/ctrl-model/action/mob-6080-panel-model';


/**
 * Mob_6080 部件服务对象
 *
 * @export
 * @class Mob_6080Service
 * @extends {ListServiceBase}
 */
export class Mob_6080Service extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_6080Model}
     * @memberof ControlServiceBase
     */
    protected model: Mob_6080Model = new Mob_6080Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_6080Service
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_6080Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_6080Service;