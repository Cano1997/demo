import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_ReleaseLink_ResolvedBugModel } from '@/app-core/ctrl-model/bug/mob-release-link-resolved-bug-mobmdctrl-model';


/**
 * MOB_ReleaseLink_ResolvedBug 部件服务对象
 *
 * @export
 * @class MOB_ReleaseLink_ResolvedBugService
 * @extends {MdServiceBase}
 */
export class MOB_ReleaseLink_ResolvedBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_ReleaseLink_ResolvedBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_ReleaseLink_ResolvedBugModel = new MOB_ReleaseLink_ResolvedBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_ResolvedBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_ResolvedBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_ReleaseLink_ResolvedBugService;