import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOBLogModel } from '@/app-core/ctrl-model/story/moblog-mobmdctrl-model';


/**
 * MOBLog 部件服务对象
 *
 * @export
 * @class MOBLogService
 * @extends {MdServiceBase}
 */
export class MOBLogService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOBLogModel}
     * @memberof ControlServiceBase
     */
    protected model: MOBLogModel = new MOBLogModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOBLogService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOBLogService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOBLogService;