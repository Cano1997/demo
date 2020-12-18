import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobListModel } from '@/app-core/ctrl-model/file/mob-list-mobmdctrl-model';


/**
 * MobList 部件服务对象
 *
 * @export
 * @class MobListService
 * @extends {MdServiceBase}
 */
export class MobListService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobListModel}
     * @memberof ControlServiceBase
     */
    protected model: MobListModel = new MobListModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobListService
     */
    protected appDEName: string = 'file';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobListService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobListService;