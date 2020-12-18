/**
 * 应用实体服务
 *
 * @export
 * @class ServiceConstructorBase
 */
export class ServiceConstructorBase {

    /**
     * 所有实体服务
     *
     * @protected
     * @type {*}
     * @memberof ServiceConstructorBase
     */
    protected allService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载服务缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof ServiceConstructorBase
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of ServiceConstructorBase.
     * @memberof ServiceConstructorBase
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof ServiceConstructorBase
     */
    protected init(): void { }

    /**
     * 加载服务实体
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof ServiceConstructorBase
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allService.get(serviceName);
        if (service) {
            return await service();
        }
    }

    /**
     * 获取应用实体服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof ServiceConstructorBase
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const entityService: any = await this.loadService(name);
        if (entityService && entityService.default) {
            const instance: any = new entityService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

    /**
     * 销毁已激活的服务
     *
     * @param {string} name 服务存储名称
     * @memberof ServiceConstructorBase
     */
    public destroyService(name: string): void {
        if (name && this.allService.has(name)) {
            const item: any = this.allService.get(name);
            if (item && item.destroy) {
                item.destroy();
            }
            this.allService.delete(name);
        }
    }

}