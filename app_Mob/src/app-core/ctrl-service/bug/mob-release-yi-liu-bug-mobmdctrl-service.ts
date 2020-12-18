import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_Release_YiLiuBugModel } from '@/app-core/ctrl-model/bug/mob-release-yi-liu-bug-mobmdctrl-model';


/**
 * MOB_Release_YiLiuBug 部件服务对象
 *
 * @export
 * @class MOB_Release_YiLiuBugService
 * @extends {MdServiceBase}
 */
export class MOB_Release_YiLiuBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_Release_YiLiuBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_Release_YiLiuBugModel = new MOB_Release_YiLiuBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_YiLiuBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_YiLiuBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_Release_YiLiuBugService;