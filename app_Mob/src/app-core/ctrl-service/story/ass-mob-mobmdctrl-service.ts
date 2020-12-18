import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssMOBModel } from '@/app-core/ctrl-model/story/ass-mob-mobmdctrl-model';


/**
 * AssMOB 部件服务对象
 *
 * @export
 * @class AssMOBService
 * @extends {MdServiceBase}
 */
export class AssMOBService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssMOBModel}
     * @memberof ControlServiceBase
     */
    protected model: AssMOBModel = new AssMOBModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssMOBService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssMOBService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default AssMOBService;