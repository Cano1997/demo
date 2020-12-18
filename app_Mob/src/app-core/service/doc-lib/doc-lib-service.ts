import { Http,Util } from '@/ibiz-core/utils';
import {DocLibServiceBase} from './doc-lib-service-base';


/**
 * 文档库服务对象
 *
 * @export
 * @class DocLibService
 * @extends {DocLibServiceBase}
 */
export class DocLibService extends DocLibServiceBase {

    /**
     * Creates an instance of  DocLibService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocLibService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default DocLibService;