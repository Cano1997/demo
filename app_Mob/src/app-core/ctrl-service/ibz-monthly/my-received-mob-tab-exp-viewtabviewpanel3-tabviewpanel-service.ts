import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReceivedMobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * MyReceivedMobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class MyReceivedMobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class MyReceivedMobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReceivedMobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: MyReceivedMobTabExpViewtabviewpanel3Model = new MyReceivedMobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyReceivedMobTabExpViewtabviewpanel3Service;