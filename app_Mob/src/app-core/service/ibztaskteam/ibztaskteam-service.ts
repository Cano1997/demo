import { Http,Util } from '@/ibiz-core/utils';
import {IbztaskteamServiceBase} from './ibztaskteam-service-base';


/**
 * 任务团队服务对象
 *
 * @export
 * @class IbztaskteamService
 * @extends {IbztaskteamServiceBase}
 */
export class IbztaskteamService extends IbztaskteamServiceBase {

    /**
     * Creates an instance of  IbztaskteamService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbztaskteamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbztaskteamService;