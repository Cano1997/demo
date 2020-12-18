import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel3Model } from '@/app-core/ctrl-model/project/mob-tab-exp-viewtabviewpanel3-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel3 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel3Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel3Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel3Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel3Model = new MobTabExpViewtabviewpanel3Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel3Service
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel3Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel3Service;