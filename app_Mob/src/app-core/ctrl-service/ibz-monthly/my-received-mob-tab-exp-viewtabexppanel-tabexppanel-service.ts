import { TabExpServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReceivedMobTabExpViewtabexppanelModel } from '@/app-core/ctrl-model/ibz-monthly/my-received-mob-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MyReceivedMobTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MyReceivedMobTabExpViewtabexppanelService
 * @extends {TabExpServiceBase}
 */
export class MyReceivedMobTabExpViewtabexppanelService extends TabExpServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReceivedMobTabExpViewtabexppanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MyReceivedMobTabExpViewtabexppanelModel = new MyReceivedMobTabExpViewtabexppanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabexppanelService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedMobTabExpViewtabexppanelService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyReceivedMobTabExpViewtabexppanelService;