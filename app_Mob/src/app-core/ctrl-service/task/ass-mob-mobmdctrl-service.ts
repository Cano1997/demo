import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssMobModel } from '@/app-core/ctrl-model/task/ass-mob-mobmdctrl-model';


/**
 * AssMob 部件服务对象
 *
 * @export
 * @class AssMobService
 * @extends {MdServiceBase}
 */
export class AssMobService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssMobModel}
     * @memberof ControlServiceBase
     */
    protected model: AssMobModel = new AssMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssMobService
     */
    protected appDEName: string = 'task';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssMobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default AssMobService;