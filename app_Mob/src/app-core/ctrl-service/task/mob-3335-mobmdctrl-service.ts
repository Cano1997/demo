import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_3335Model } from '@/app-core/ctrl-model/task/mob-3335-mobmdctrl-model';


/**
 * Mob_3335 部件服务对象
 *
 * @export
 * @class Mob_3335Service
 * @extends {MdServiceBase}
 */
export class Mob_3335Service extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_3335Model}
     * @memberof ControlServiceBase
     */
    protected model: Mob_3335Model = new Mob_3335Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_3335Service
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_3335Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_3335Service;