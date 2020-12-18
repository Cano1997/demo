import { Http,Util } from '@/ibiz-core/utils';
import {ProjectTaskQCntLogicBase} from './project-task-qcnt-logic-base';

/**
 * 项目任务快速分组计数器
 *
 * @export
 * @class ProjectTaskQCntLogic
 */
export class ProjectTaskQCntLogic extends ProjectTaskQCntLogicBase{

    /**
     * Creates an instance of  ProjectTaskQCntLogic
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTaskQCntLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default ProjectTaskQCntLogic;
