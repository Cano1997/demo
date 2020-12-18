import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { ProdMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/product/prod-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * ProdMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class ProdMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class ProdMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {ProdMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: ProdMobTabExpViewtabexppanelModel = new ProdMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof ProdMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default ProdMobTabExpViewtabexppanelService;