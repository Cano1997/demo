import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { Usr2MobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-weekly/usr2-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * Usr2MobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class Usr2MobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class Usr2MobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {Usr2MobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: Usr2MobTabExpViewtabviewpanel3Model = new Usr2MobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof Usr2MobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzweeklyid';
}
// 默认导出
export default Usr2MobTabExpViewtabviewpanel3Service;