import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssMobDASHBOARDModel } from '@/app-core/ctrl-model/task/ass-mob-dashboard-mobmdctrl-model';


/**
 * AssMobDASHBOARD 部件服务对象
 *
 * @export
 * @class AssMobDASHBOARDService
 * @extends {MdServiceBase}
 */
export class AssMobDASHBOARDService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssMobDASHBOARDModel}
     * @memberof ControlServiceBase
     */
    protected model: AssMobDASHBOARDModel = new AssMobDASHBOARDModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssMobDASHBOARDService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssMobDASHBOARDService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default AssMobDASHBOARDService;