import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyBugMobModel } from '@/app-core/ctrl-model/bug/my-bug-mob-portlet-model';


/**
 * MyBugMob 部件服务对象
 *
 * @export
 * @class MyBugMobService
 * @extends {PortletServiceBase}
 */
export class MyBugMobService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyBugMobModel}
     * @memberof ControlServiceBase
     */
    protected model: MyBugMobModel = new MyBugMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyBugMobService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyBugMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyBugMobService;