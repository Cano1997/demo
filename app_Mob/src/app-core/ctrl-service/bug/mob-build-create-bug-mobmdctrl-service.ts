import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOB_Build_CreateBugModel } from '@/app-core/ctrl-model/bug/mob-build-create-bug-mobmdctrl-model';


/**
 * MOB_Build_CreateBug 部件服务对象
 *
 * @export
 * @class MOB_Build_CreateBugService
 * @extends {MdServiceBase}
 */
export class MOB_Build_CreateBugService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOB_Build_CreateBugModel}
     * @memberof ControlServiceBase
     */
    protected model: MOB_Build_CreateBugModel = new MOB_Build_CreateBugModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOB_Build_CreateBugService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOB_Build_CreateBugService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOB_Build_CreateBugService;