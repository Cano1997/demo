import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel7Model } from '@/app-core/ctrl-model/project/mob-tab-exp-viewtabviewpanel7-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel7 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel7Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel7Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel7Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel7Model = new MobTabExpViewtabviewpanel7Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel7Service
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel7Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel7Service;