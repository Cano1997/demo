import { AppMenuServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyModel } from '@/app-core/ctrl-model/app/my-appmenu-model';


/**
 * My 部件服务对象
 *
 * @export
 * @class MyService
 * @extends {AppMenuServiceBase}
 */
export class MyService extends AppMenuServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyModel}
     * @memberof ControlServiceBase
     */
    protected model: MyModel = new MyModel();

    /**
     * 获取数据
     *
     * @returns {Promise<any>}
     * @memberof My
     */
    public get(params: any = {}): Promise<any> {
        return this.http.get('v7/myappmenu', params);
    }

}
// 默认导出
export default MyService;