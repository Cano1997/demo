import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_Release_ResovledBugModel } from '@/app-core/ctrl-model/bug/mob-release-resovled-bug-mobmdctrl-model';


/**
 * MOB_Release_ResovledBug 部件服务对象
 *
 * @export
 * @class MOB_Release_ResovledBugService
 * @extends {MdServiceBase}
 */
export class MOB_Release_ResovledBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_Release_ResovledBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_Release_ResovledBugModel = new MOB_Release_ResovledBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_ResovledBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_Release_ResovledBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_Release_ResovledBugService;