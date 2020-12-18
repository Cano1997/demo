import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTestTaskLinkCaseModel } from '@/app-core/ctrl-model/test-task/mob-test-task-link-case-mobmdctrl-model';


/**
 * MobTestTaskLinkCase 部件服务对象
 *
 * @export
 * @class MobTestTaskLinkCaseService
 * @extends {MdServiceBase}
 */
export class MobTestTaskLinkCaseService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTestTaskLinkCaseModel}
     * @memberof ControlServiceBase
     */
    protected model: MobTestTaskLinkCaseModel = new MobTestTaskLinkCaseModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTestTaskLinkCaseService
     */
    protected appDEName: string = 'testtask';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTestTaskLinkCaseService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTestTaskLinkCaseService;