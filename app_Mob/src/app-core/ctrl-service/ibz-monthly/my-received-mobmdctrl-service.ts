import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyReceivedModel } from '@/app-core/ctrl-model/ibz-monthly/my-received-mobmdctrl-model';


/**
 * MyReceived 部件服务对象
 *
 * @export
 * @class MyReceivedService
 * @extends {MdServiceBase}
 */
export class MyReceivedService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyReceivedModel}
     * @memberof ControlServiceBase
     */
    protected model: MyReceivedModel = new MyReceivedModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyReceivedService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MyReceivedService;