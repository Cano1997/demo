import { MdServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MySubmitModel } from '@/app-core/ctrl-model/ibz-monthly/my-submit-mobmdctrl-model';


/**
 * MySubmit 部件服务对象
 *
 * @export
 * @class MySubmitService
 * @extends {MdServiceBase}
 */
export class MySubmitService extends MdServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MySubmitModel}
     * @memberof ControlServiceBase
     */
    protected model: MySubmitModel = new MySubmitModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MySubmitService
     */
    protected appDEName: string = 'ibzmonthly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MySubmitService
     */
    protected appDeKey: string = 'ibzmonthlyid';
}
// 默认导出
export default MySubmitService;