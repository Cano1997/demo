import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { FavoriteMOBModel } from '@/app-core/ctrl-model/story/favorite-mob-mobmdctrl-model';


/**
 * FavoriteMOB 部件服务对象
 *
 * @export
 * @class FavoriteMOBService
 * @extends {MdServiceBase}
 */
export class FavoriteMOBService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {FavoriteMOBModel}
     * @memberof ControlServiceBase
     */
    protected model: FavoriteMOBModel = new FavoriteMOBModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof FavoriteMOBService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof FavoriteMOBService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default FavoriteMOBService;