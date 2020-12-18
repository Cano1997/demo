import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Mob_MyModel } from '@/app-core/ctrl-model/bug/mob-my-mobmdctrl-model';


/**
 * Mob_My 部件服务对象
 *
 * @export
 * @class Mob_MyService
 * @extends {MdServiceBase}
 */
export class Mob_MyService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Mob_MyModel}
     * @memberof ControlServiceBase
     */
    protected model: Mob_MyModel = new Mob_MyModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Mob_MyService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Mob_MyService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default Mob_MyService;