import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { FavoriteMOBDasModel } from '@/app-core/ctrl-model/story/favorite-mobdas-mobmdctrl-model';


/**
 * FavoriteMOBDas 部件服务对象
 *
 * @export
 * @class FavoriteMOBDasService
 * @extends {MdServiceBase}
 */
export class FavoriteMOBDasService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {FavoriteMOBDasModel}
     * @memberof ControlServiceBase
     */
    protected model: FavoriteMOBDasModel = new FavoriteMOBDasModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof FavoriteMOBDasService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof FavoriteMOBDasService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default FavoriteMOBDasService;