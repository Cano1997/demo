import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/product/mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel2Model = new MobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'product';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel2Service;