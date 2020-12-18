import { Http,Util } from '@/ibiz-core/utils';
import {DocServiceBase} from './doc-service-base';


/**
 * 文档服务对象
 *
 * @export
 * @class DocService
 * @extends {DocServiceBase}
 */
export class DocService extends DocServiceBase {

    /**
     * Creates an instance of  DocService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default DocService;