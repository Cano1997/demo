/**
 * 实体逻辑处理基类
 *
 * @export
 * @class EntityLogicBase
 */
export class EntityLogicBase {

    /**
     * 获取其他实体服务
     *
     * @protected
     * @param {string} name 实体名称
     * @returns {Promise<any>}
     * @memberof EntityLogicBase
     */
    protected getService(name: string): Promise<any> {
        return window.appEntityServiceConstructor.getService(name);
    }

}