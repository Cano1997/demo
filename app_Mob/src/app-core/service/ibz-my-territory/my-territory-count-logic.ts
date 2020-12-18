import { Http,Util } from '@/ibiz-core/utils';
import {MyTerritoryCountLogicBase} from './my-territory-count-logic-base';

/**
 * 我的地盘移动端计数器
 *
 * @export
 * @class MyTerritoryCountLogic
 */
export class MyTerritoryCountLogic extends MyTerritoryCountLogicBase{

    /**
     * Creates an instance of  MyTerritoryCountLogic
     * 
     * @param {*} [opts={}]
     * @memberof  MyTerritoryCountLogic
     */
    constructor(opts: any = {}) {
        super(opts);
    }

}

// 默认导出
export default MyTerritoryCountLogic;
