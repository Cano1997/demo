import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReceivedMobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * MyReceivedMobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class MyReceivedMobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class MyReceivedMobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReceivedMobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MyReceivedMobTabExpViewtabviewpanelModel = new MyReceivedMobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyReceivedMobTabExpViewtabviewpanelService;