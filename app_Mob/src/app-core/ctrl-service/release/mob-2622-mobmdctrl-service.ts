import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_2622Model } from '@/app-core/ctrl-model/release/mob-2622-mobmdctrl-model';


/**
 * Mob_2622 部件服务对象
 *
 * @export
 * @class Mob_2622Service
 * @extends {MdServiceBase}
 */
export class Mob_2622Service extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_2622Model}
     * @memberof ControlServiceBase
     */
    protected model: Mob_2622Model = new Mob_2622Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_2622Service
     */
    protected appDEName: string = 'release';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_2622Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_2622Service;