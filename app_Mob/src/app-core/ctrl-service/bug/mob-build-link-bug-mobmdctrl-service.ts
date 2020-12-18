import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_BuildLink_BugModel } from '@/app-core/ctrl-model/bug/mob-build-link-bug-mobmdctrl-model';


/**
 * MOB_BuildLink_Bug 部件服务对象
 *
 * @export
 * @class MOB_BuildLink_BugService
 * @extends {MdServiceBase}
 */
export class MOB_BuildLink_BugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_BuildLink_BugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_BuildLink_BugModel = new MOB_BuildLink_BugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_BuildLink_BugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_BuildLink_BugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_BuildLink_BugService;