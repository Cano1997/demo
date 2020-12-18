import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * Usr2MobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewtabviewpanel2Model = new Usr2MobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewtabviewpanel2Service;