import { Http,Util } from '@/ibiz-core/utils';
import {IbzFavoritesServiceBase} from './ibz-favorites-service-base';


/**
 * 收藏服务对象
 *
 * @export
 * @class IbzFavoritesService
 * @extends {IbzFavoritesServiceBase}
 */
export class IbzFavoritesService extends IbzFavoritesServiceBase {

    /**
     * Creates an instance of  IbzFavoritesService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzFavoritesService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzFavoritesService;