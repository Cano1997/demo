import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_3817Model } from '@/app-core/ctrl-model/story/mob-3817-mobmdctrl-model';


/**
 * Mob_3817 部件服务对象
 *
 * @export
 * @class Mob_3817Service
 * @extends {MdServiceBase}
 */
export class Mob_3817Service extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_3817Model}
     * @memberof ControlServiceBase
     */
    protected model: Mob_3817Model = new Mob_3817Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_3817Service
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_3817Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_3817Service;