import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_ReleaseLink_LeftBugModel } from '@/app-core/ctrl-model/bug/mob-release-link-left-bug-mobmdctrl-model';


/**
 * MOB_ReleaseLink_LeftBug 部件服务对象
 *
 * @export
 * @class MOB_ReleaseLink_LeftBugService
 * @extends {MdServiceBase}
 */
export class MOB_ReleaseLink_LeftBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_ReleaseLink_LeftBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_ReleaseLink_LeftBugModel = new MOB_ReleaseLink_LeftBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_LeftBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_LeftBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_ReleaseLink_LeftBugService;