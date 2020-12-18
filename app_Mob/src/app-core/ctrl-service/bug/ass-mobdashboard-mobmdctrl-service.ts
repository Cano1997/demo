import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssMOBDASHBOARDModel } from '@/app-core/ctrl-model/bug/ass-mobdashboard-mobmdctrl-model';


/**
 * AssMOBDASHBOARD 部件服务对象
 *
 * @export
 * @class AssMOBDASHBOARDService
 * @extends {MdServiceBase}
 */
export class AssMOBDASHBOARDService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssMOBDASHBOARDModel}
     * @memberof ControlServiceBase
     */
    protected model: AssMOBDASHBOARDModel = new AssMOBDASHBOARDModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssMOBDASHBOARDService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssMOBDASHBOARDService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default AssMOBDASHBOARDService;