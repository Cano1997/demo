import { Http,Util } from '@/ibiz-core/utils';
import {DocContentServiceBase} from './doc-content-service-base';


/**
 * 文档内容服务对象
 *
 * @export
 * @class DocContentService
 * @extends {DocContentServiceBase}
 */
export class DocContentService extends DocContentServiceBase {

    /**
     * Creates an instance of  DocContentService.
     * 
     * @param {*} [opts={}]
     * @memberof  DocContentService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default DocContentService;