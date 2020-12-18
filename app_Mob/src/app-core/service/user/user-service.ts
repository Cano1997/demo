import { Http,Util } from '@/ibiz-core/utils';
import {UserServiceBase} from './user-service-base';


/**
 * 用户服务对象
 *
 * @export
 * @class UserService
 * @extends {UserServiceBase}
 */
export class UserService extends UserServiceBase {

    /**
     * Creates an instance of  UserService.
     * 
     * @param {*} [opts={}]
     * @memberof  UserService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default UserService;