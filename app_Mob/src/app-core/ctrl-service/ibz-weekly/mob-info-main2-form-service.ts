import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobInfoMain2Model } from '@/app-core/ctrl-model/ibz-weekly/mob-info-main2-form-model';


/**
 * MobInfoMain2 部件服务对象
 *
 * @export
 * @class MobInfoMain2Service
 * @extends {FormServiceBase}
 */
export class MobInfoMain2Service extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobInfoMain2Model}
     * @memberof ControlServiceBase
     */
    protected model: MobInfoMain2Model = new MobInfoMain2Model();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobInfoMain2Service
     */
    protected appDEName: string = 'ibzweekly';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobInfoMain2Service
     */
    protected appDeKey: string = 'ibzweeklyid';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobInfoMain2Service
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobInfoMain2Service
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobInfoMain2Service;