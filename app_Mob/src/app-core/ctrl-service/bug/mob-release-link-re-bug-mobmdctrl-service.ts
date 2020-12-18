import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_ReleaseLink_reBugModel } from '@/app-core/ctrl-model/bug/mob-release-link-re-bug-mobmdctrl-model';


/**
 * MOB_ReleaseLink_reBug 部件服务对象
 *
 * @export
 * @class MOB_ReleaseLink_reBugService
 * @extends {MdServiceBase}
 */
export class MOB_ReleaseLink_reBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_ReleaseLink_reBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_ReleaseLink_reBugModel = new MOB_ReleaseLink_reBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_reBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_ReleaseLink_reBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_ReleaseLink_reBugService;