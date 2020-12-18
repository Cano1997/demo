import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_Build_ResolvedBugModel } from '@/app-core/ctrl-model/bug/mob-build-resolved-bug-mobmdctrl-model';


/**
 * MOB_Build_ResolvedBug 部件服务对象
 *
 * @export
 * @class MOB_Build_ResolvedBugService
 * @extends {MdServiceBase}
 */
export class MOB_Build_ResolvedBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_Build_ResolvedBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_Build_ResolvedBugModel = new MOB_Build_ResolvedBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_Build_ResolvedBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_Build_ResolvedBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_Build_ResolvedBugService;