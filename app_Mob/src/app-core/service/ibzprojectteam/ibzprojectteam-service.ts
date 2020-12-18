import { Http,Util } from '@/ibiz-core/utils';
import {IBZPROJECTTEAMServiceBase} from './ibzprojectteam-service-base';


/**
 * 项目团队服务对象
 *
 * @export
 * @class IBZPROJECTTEAMService
 * @extends {IBZPROJECTTEAMServiceBase}
 */
export class IBZPROJECTTEAMService extends IBZPROJECTTEAMServiceBase {

    /**
     * Creates an instance of  IBZPROJECTTEAMService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZPROJECTTEAMService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IBZPROJECTTEAMService;