import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobLogModel } from '@/app-core/ctrl-model/bug/mob-log-mobmdctrl-model';


/**
 * MobLog 部件服务对象
 *
 * @export
 * @class MobLogService
 * @extends {MdServiceBase}
 */
export class MobLogService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobLogModel}
     * @memberof ControlServiceBase
     */
    protected model: MobLogModel = new MobLogModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobLogService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobLogService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobLogService;