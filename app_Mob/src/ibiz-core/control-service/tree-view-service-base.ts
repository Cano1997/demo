import { ControlServiceBase } from './control-service-base';

/**
 * 树部件服务基类
 *
 * @export
 * @class TreeViewServiceBase
 * @extends {ControlServiceBase}
 */
export class TreeViewServiceBase extends ControlServiceBase {

    /**
     * 默认节点分隔符
     *
     * @protected
     * @type {string}
     * @memberof TreeViewServiceBase
     */
    protected TREENODE_SEPARATOR: string = ';';
}