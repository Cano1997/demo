import { MultiEditViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MainModel } from '@/app-core/ctrl-model/ibztaskteam/main-multieditviewpanel-model';


/**
 * Main 部件服务对象
 *
 * @export
 * @class MainService
 * @extends {MultiEditViewPanelServiceBase}
 */
export class MainService extends MultiEditViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MainModel}
     * @memberof ControlServiceBase
     */
    protected model: MainModel = new MainModel();

    /**
     * 是否为从数据临时模式
     *
     * @protected
     * @type {boolean}
     * @memberof MainService
     */
    protected isTempMode: boolean = true;

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainService
     */
    protected appDEName: string = 'ibztaskteam';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MainService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MainService;