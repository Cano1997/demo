import { Http,Util } from '@/ibiz-core/utils';
import {FileServiceBase} from './file-service-base';


/**
 * 附件服务对象
 *
 * @export
 * @class FileService
 * @extends {FileServiceBase}
 */
export class FileService extends FileServiceBase {

    /**
     * Creates an instance of  FileService.
     * 
     * @param {*} [opts={}]
     * @memberof  FileService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default FileService;