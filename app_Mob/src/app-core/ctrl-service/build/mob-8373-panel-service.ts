import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_8373Model } from '@/app-core/ctrl-model/build/mob-8373-panel-model';


/**
 * Mob_8373 部件服务对象
 *
 * @export
 * @class Mob_8373Service
 * @extends {ListServiceBase}
 */
export class Mob_8373Service extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_8373Model}
     * @memberof ControlServiceBase
     */
    protected model: Mob_8373Model = new Mob_8373Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_8373Service
     */
    protected appDEName: string = 'build';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_8373Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_8373Service;