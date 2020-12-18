import { Http,Util } from '@/ibiz-core/utils';
import {IBzDocServiceBase} from './ibz-doc-service-base';


/**
 * 文档服务对象
 *
 * @export
 * @class IBzDocService
 * @extends {IBzDocServiceBase}
 */
export class IBzDocService extends IBzDocServiceBase {

    /**
     * Creates an instance of  IBzDocService.
     * 
     * @param {*} [opts={}]
     * @memberof  IBzDocService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default IBzDocService;