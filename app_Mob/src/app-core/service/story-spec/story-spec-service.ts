import { Http,Util } from '@/ibiz-core/utils';
import {StorySpecServiceBase} from './story-spec-service-base';


/**
 * 需求描述服务对象
 *
 * @export
 * @class StorySpecService
 * @extends {StorySpecServiceBase}
 */
export class StorySpecService extends StorySpecServiceBase {

    /**
     * Creates an instance of  StorySpecService.
     * 
     * @param {*} [opts={}]
     * @memberof  StorySpecService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}
// 默认导出
export default StorySpecService;