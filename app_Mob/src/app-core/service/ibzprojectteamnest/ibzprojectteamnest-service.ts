import { Http,Util } from '@/ibiz-core/utils';
import {IbzprojectteamnestServiceBase} from './ibzprojectteamnest-service-base';


/**
 * 项目团队服务对象
 *
 * @export
 * @class IbzprojectteamnestService
 * @extends {IbzprojectteamnestServiceBase}
 */
export class IbzprojectteamnestService extends IbzprojectteamnestServiceBase {

    /**
     * Creates an instance of  IbzprojectteamnestService.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzprojectteamnestService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IbzprojectteamnestService;