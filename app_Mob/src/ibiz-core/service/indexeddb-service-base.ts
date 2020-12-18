/**
 * IndexedDB数据库服务基类
 *
 * @export
 * @class IndexedDBServiceBase
 */
export class IndexedDBServiceBase {

    /**
     * indexedDB实例
     *
     * @protected
     * @memberof IndexedDBServiceBase
     */
    protected iDB!: IDBOpenDBRequest;

    /**
     * 数据库实例
     *
     * @protected
     * @type {IDBDatabase}
     * @memberof IndexedDBServiceBase
     */
    protected db!: IDBDatabase;

    /**
     * 数据库名称
     *
     * @protected
     * @type {string}
     * @memberof IndexedDBServiceBase
     */
    protected dbName: string = 'AppDatabase';

    /**
     * 实体配置
     *
     * @protected
     * @type {{ name: string, keyPath: string, indexNames: string[] }[]}
     * @memberof IndexedDBServiceBase
     */
    protected entityConfigs: { name: string, keyPath: string, indexNames?: string[] }[] = [];

    /**
     * Creates an instance of IndexedDBServiceBase.
     * @memberof IndexedDBServiceBase
     */
    protected constructor(version: string) {
        this.entityConfigInit();
        if (new RegExp(/-[1-9]{1}-/).test(version)) {
            version = version.substring(0, 5) + '0' + version.substring(5, version.length);
        }
        const data = new Date(version);
        this.iDB = window.indexedDB.open(this.dbName, data.getTime());
        this.iDB.onsuccess = () => this.openSuccess();
        this.iDB.onerror = (e: any) => this.openError(e);
        this.iDB.onupgradeneeded = (e: any) => {
            this.upgradeneeded(e);
        }
    }

    /**
     * 实体配置初始化
     *
     * @protected
     * @memberof IndexedDBServiceBase
     */
    protected entityConfigInit(): void { }

    /**
     * 数据库打开成功
     *
     * @protected
     * @param {Event} e
     * @memberof IndexedDBServiceBase
     */
    protected openSuccess(): void {
        this.db = this.iDB.result;
    }

    /**
     * 数据库打开失败
     *
     * @protected
     * @param {Event} e
     * @memberof IndexedDBServiceBase
     */
    protected openError(e: Event): void {
        console.error('indexedDB打开失败', e);
    }

    /**
     * 数据库升级成功
     *
     * @protected
     * @param {Event} e
     * @memberof IndexedDBServiceBase
     */
    protected upgradeneeded(e: any): void {
        const db: IDBDatabase = e.target.result;
        this.createObjectStore(db);
    }

    /**
     * 创建表
     *
     * @protected
     * @param {IDBDatabase} db
     * @memberof IndexedDBServiceBase
     */
    protected createObjectStore(db: IDBDatabase): void {
        this.entityConfigs.forEach((item) => {
            if (!db.objectStoreNames.contains(item.name)) {
                const store = db.createObjectStore(item.name, { keyPath: item.keyPath });
                this.createIndex(store);
            }
        });
    }

    /**
     * 建立索引
     *
     * @protected
     * @param {IDBObjectStore} store
     * @memberof IndexedDBServiceBase
     */
    protected createIndex(store: IDBObjectStore): void { }

    /**
     * 删除数据库
     *
     * @memberof IndexedDBServiceBase
     */
    public deleteDB(): void {
        indexedDB.deleteDatabase(this.dbName);
    }

    /**
     * 关闭数据库
     *
     * @memberof IndexedDBServiceBase
     */
    public closeDB(): void {
        this.db.close();
    }

    /**
     * 获取数据库实例
     *
     * @returns {IDBDatabase}
     * @memberof IndexedDBServiceBase
     */
    public getDB(): IDBDatabase {
        return this.db;
    }

}