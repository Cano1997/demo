import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanel5Model } from '@/app-core/ctrl-model/project/mob-tab-exp-viewtabviewpanel5-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel5 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanel5Service
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanel5Service extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanel5Model}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanel5Model = new MobTabExpViewtabviewpanel5Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel5Service
     */
    protected appDEName: string = 'project';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanel5Service
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobTabExpViewtabviewpanel5Service;