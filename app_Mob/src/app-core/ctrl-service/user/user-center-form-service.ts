import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { UserCenterModel } from '@/app-core/ctrl-model/user/user-center-form-model';


/**
 * UserCenter 部件服务对象
 *
 * @export
 * @class UserCenterService
 * @extends {FormServiceBase}
 */
export class UserCenterService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {UserCenterModel}
     * @memberof ControlServiceBase
     */
    protected model: UserCenterModel = new UserCenterModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserCenterService
     */
    protected appDEName: string = 'user';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof UserCenterService
     */
    protected appDeKey: string = 'id';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  UserCenterService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof UserCenterService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default UserCenterService;