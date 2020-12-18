import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReceivedMobTabExpViewtabviewpanel2Model } from '@/app-core/ctrl-model/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel2-tabviewpanel-model';


/**
 * MyReceivedMobTabExpViewtabviewpanel2 部件服务对象
 *
 * @export
 * @class MyReceivedMobTabExpViewtabviewpanel2Service
 * @extends {TabViewPanelServiceBase}
 */
export class MyReceivedMobTabExpViewtabviewpanel2Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReceivedMobTabExpViewtabviewpanel2Model}
     * @memberof ControlServiceBase
     */
    protected model: MyReceivedMobTabExpViewtabviewpanel2Model = new MyReceivedMobTabExpViewtabviewpanel2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanel2Service
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanel2Service
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyReceivedMobTabExpViewtabviewpanel2Service;