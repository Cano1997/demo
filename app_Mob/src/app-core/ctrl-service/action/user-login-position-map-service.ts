import { MapServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { UserLoginPositionModel } from '@/app-core/ctrl-model/action/user-login-position-map-model';


/**
 * UserLoginPosition 部件服务对象
 *
 * @export
 * @class UserLoginPositionService
 * @extends {MapServiceBase}
 */
export class UserLoginPositionService extends MapServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {UserLoginPositionModel}
     * @memberof ControlServiceBase
     */
    protected model: UserLoginPositionModel = new UserLoginPositionModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserLoginPositionService
     */
    protected appDEName: string = 'action';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof UserLoginPositionService
     */
    protected appDeKey: string = 'id';
    /**
     * 地图项配置集合
     *
     * @protected
     * @type {any[]}
     * @memberof UserLoginPosition
     */
    protected mapItemConfig: any = {
        'test': {
            itemName : 'test',
            itemType : 'test',
        },
    };

    /**
     * 查询数据
     *
     * @param {string} itemType
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof UserLoginPositionService
     */
    public async search(itemType: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        let item: any = {};
        try {

            this.model.itemType = 'test';
            const _test_data = this.handleRequestData('', context, data);
            await this.onBeforeAction('', context, _test_data, isLoading);
            const _test = await this.loadDEDataSet('FetchProductTrends', context, _test_data, 'test');
            Object.assign(item, { test: _test });
        } catch (response) {
            return new HttpResponse(response.status);
        }
        return new HttpResponse(200, item);
    }

}
// 默认导出
export default UserLoginPositionService;