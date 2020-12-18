import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel6Model } from '@/app-core/ctrl-model/project/mob-tab-exp-viewtabviewpanel6-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel6 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel6Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel6Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel6Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel6Model = new MobTabExpViewtabviewpanel6Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel6Service
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel6Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel6Service;