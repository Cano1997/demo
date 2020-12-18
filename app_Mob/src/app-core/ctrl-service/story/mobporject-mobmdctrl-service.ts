import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MOBPorjectModel } from '@/app-core/ctrl-model/story/mobporject-mobmdctrl-model';


/**
 * MOBPorject 部件服务对象
 *
 * @export
 * @class MOBPorjectService
 * @extends {MdServiceBase}
 */
export class MOBPorjectService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MOBPorjectModel}
     * @memberof ControlServiceBase
     */
    protected model: MOBPorjectModel = new MOBPorjectModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MOBPorjectService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MOBPorjectService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MOBPorjectService;