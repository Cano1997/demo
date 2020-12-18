import { PortletServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyFavoriteTaskModel } from '@/app-core/ctrl-model/task/my-favorite-task-portlet-model';


/**
 * MyFavoriteTask 部件服务对象
 *
 * @export
 * @class MyFavoriteTaskService
 * @extends {PortletServiceBase}
 */
export class MyFavoriteTaskService extends PortletServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyFavoriteTaskModel}
     * @memberof ControlServiceBase
     */
    protected model: MyFavoriteTaskModel = new MyFavoriteTaskModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteTaskService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyFavoriteTaskService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MyFavoriteTaskService;