import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel4Model } from '@/app-core/ctrl-model/product/mob-tab-exp-viewtabviewpanel4-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel4 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel4Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel4Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel4Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel4Model = new MobTabExpViewtabviewpanel4Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel4Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel4Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel4Service;