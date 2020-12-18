import { IndexedDBService } from './indexeddb-service';

/**
 * 数据对象基类 前端应用实体存储主键，统一为srfSessionKey
 *
 * @export
 * @class DBService
 */
export class DBService {
    /**
     * 数据库实例
     *
     * @protected
     * @type {IDBDatabase}
     * @memberof DBService
     */
    protected db!: IDBDatabase;

    /**
     * 实体名称
     *
     * @protected
     * @type {string}
     * @memberof DBService
     */
    protected entityName: string = '';

    /**
     * 主键标识
     *
     * @protected
     * @type {string}
     * @memberof DBService
     */
    protected primaryKey: string = 'srfsessionkey';

    /**
     * Creates an instance of DBService.
     * @param {string} entityName
     * @memberof DBService
     */
    constructor(entityName: string) {
        this.entityName = entityName;
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof DBService
     */
    protected init(): void {
        if (IndexedDBService.getInstance().getDB()) {
            this.db = IndexedDBService.getInstance().getDB();
        } else {
            setTimeout(() => this.init(), 10);
        }
    }

    /**
     * 新增数据
     *
     * @param {*} params
     * @returns {Promise<boolean>}
     * @memberof DBService
     */
    public create(params: any): Promise<boolean> {
        return new Promise((resolve) => {
            try {
                const t = this.getTransaction();
                const store = this.getStore(t);
                store.add(params);
                t.oncomplete = (e) => resolve(params);
                t.onerror = () => resolve(false);
            } catch (error) {
                console.error(error);
            }
        });
    }

    /**
     * 更新数据
     *
     * @param {*} data
     * @returns {Promise<boolean>}
     * @memberof DBService
     */
    public update(data: any): Promise<boolean> {
        return new Promise(async (resolve) => {
            try {
                const t = this.getTransaction();
                const store = this.getStore(t);
                const item: any = await this.get(data[this.primaryKey], t, store);
                if (item) {
                    Object.assign(item, data);
                }
                store.put(item);
                t.oncomplete = () => resolve(true);
                t.onerror = () => resolve(false);
            } catch (error) {
                console.error(error);
            }
        });
    }

    /**
     * 获取数据
     *
     * @param {string} val
     * @returns {Promise<any>}
     * @memberof DBService
     */
    public get(val: string, t: IDBTransaction = this.getTransaction(), store: IDBObjectStore = this.getStore(t)): Promise<any> {
        return new Promise((resolve) => {
            try {
                // const index = store.index(this.primaryKey);
                // request = index.get(val);
                const request = store.get(val);
                request.onsuccess = (e: any) => resolve(e.target.result);
                request.onerror = (e: any) => resolve(e.target.result);
            } catch (error) {
                console.error(error);
            }
        });
    }

    /**
     * 根据索引查询数据
     *
     * @param {string} val 索引属性值
     * @param {string} indexName 索引属性
     * @param {IDBTransaction} [t=this.getTransaction()]
     * @param {IDBObjectStore} [store=this.getStore(t)]
     * @returns {Promise<any>}
     * @memberof DBService
     */
    public getByIndex(val: string, indexName: string, t: IDBTransaction = this.getTransaction(), store: IDBObjectStore = this.getStore(t)): Promise<any> {
        return new Promise((resolve) => {
            try {
                const index = store.index(indexName);
                const request = index.get(val);
                request.onsuccess = (e: any) => {
                    const item: any = e.target.result;
                    resolve(item.data);
                }
                request.onerror = (e: any) => resolve(e.target.result);
            } catch (error) {
                console.error(error);
            }
        });
    }

    /**
     * 删除数据
     *
     * @param {string} val
     * @param {IDBTransaction} [t=this.getTransaction()]
     * @param {IDBObjectStore} [store=this.getStore(t)]
     * @returns {Promise<boolean>}
     * @memberof DBService
     */
    public remove(val: string, t: IDBTransaction = this.getTransaction(), store: IDBObjectStore = this.getStore(t)): Promise<boolean> {
        return new Promise((resolve) => {
            try {
                store.delete(val);
                t.oncomplete = () => resolve(true);
                t.onerror = () => resolve(false);
            } catch (error) {
                console.error(error);
            }
        });
    }

    /**
     * 设置数据
     *
     * @param {*} params
     * @returns {Promise<boolean>}
     * @memberof DBService
     */
    public async set(data: any): Promise<boolean> {
        try {
            const t = this.getTransaction();
            const store = this.getStore(t);
            const result: any = await this.get(data[this.primaryKey], t, store);
            if (result) {
                await this.remove(data[this.primaryKey], t, store);
                return this.create(data);
            }
            return this.create(data);
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    /**
     * 获取对应事务存储对象
     *
     * @protected
     * @param {IDBTransaction} transaction
     * @returns {IDBObjectStore}
     * @memberof DBService
     */
    protected getStore(transaction: IDBTransaction): IDBObjectStore {
        return transaction.objectStore(this.entityName);
    }

    /**
     * 获取事务
     *
     * @protected
     * @returns {IDBTransaction}
     * @memberof DBService
     */
    protected getTransaction(): IDBTransaction {
        return this.db.transaction(this.entityName, 'readwrite');
    }

}