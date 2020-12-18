import { Http,Util } from '@/ibiz-core/utils';
import {IbzMyTerritoryServiceBase} from './ibz-my-territory-service-base';


/**
 * 我的地盘服务对象
 *
 * @export
 * @class IbzMyTerritoryService
 * @extends {IbzMyTerritoryServiceBase}
 */
export class IbzMyTerritoryService extends IbzMyTerritoryServiceBase {

    /**
     * Creates an instance of  IbzMyTerritoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzMyTerritoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzMyTerritoryService;