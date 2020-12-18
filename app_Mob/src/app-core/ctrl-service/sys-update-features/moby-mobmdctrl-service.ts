import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOBYModel } from '@/app-core/ctrl-model/sys-update-features/moby-mobmdctrl-model';


/**
 * MOBY 部件服务对象
 *
 * @export
 * @class MOBYService
 * @extends {MdServiceBase}
 */
export class MOBYService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOBYModel}
     * @memberof ControlServiceBase
     */
    protected model: MOBYModel = new MOBYModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOBYService
     */
    protected appDEName: string = 'sysupdatefeatures';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOBYService
     */
    protected appDeKey: string = 'sysupdatefeaturesid';
}
// 默认导出
export default MOBYService;