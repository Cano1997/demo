import { Http } from '@/ibiz-core/utils';
import { Store } from 'vuex';

/**
 * LoadAppData net 对象
 * 调用 getInstance() 获取实例
 *
 * @export
 * @class AuthGuard
 */
export class AuthGuard {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {AuthGuard}
     * @memberof AuthGuard
     */
    private static readonly instance: AuthGuard = new AuthGuard();

    /**
     * 获取 Auth 单例对象
     *
     * @static
     * @returns {Auth}
     * @memberof Auth
     */
    public static getInstance(): AuthGuard {
        return this.instance;
    }

    /**
     * 应用数据状态
     *
     * @private
     * @type {boolean}
     * @memberof AuthGuard
     */
    private appDataState: boolean = false;

    /**
     * 数据字典状态
     *
     * @private
     * @type {boolean}
     * @memberof AuthGuard
     */
    private dictionaryDatasState: boolean = false;

    /**
     * Creates an instance of AuthGuard.
     * 私有构造，拒绝通过 new 创建对象
     * 
     * @memberof AuthGuard
     */
    private constructor() {
        if (AuthGuard.instance) {
            return AuthGuard.instance;
        }
    }

    /**
     * 权限认证
     *
     * @param {string} url
     * @param {*} [params={}]
     * @param {Store<any>} store
     * @returns {Promise<any>}
     * @memberof AuthGuard
     */
    public async authGuard(url: string, params: any = {}, store: Store<any>): Promise<any> {
        const response: any = await Http.getInstance().get(url);
        if (response && response.status === 200) {
            let { data }: { data: any } = response;
            if (data) {
                // token认证把用户信息放入应用级数据
                if (localStorage.getItem('user')) {
                    let user: any = JSON.parse(localStorage.getItem('user') as string);
                    let localAppData: any = {};
                    if (user.sessionParams) {
                        localAppData = { context: user.sessionParams };
                        Object.assign(localAppData, data);
                    }
                    data = JSON.parse(JSON.stringify(localAppData));
                }
                store.commit('addAppData', data);
                // 提交统一资源数据
                store.dispatch('authresource/commitAuthData', data);
            }
        }
        return await this.loadDictionaryDatas(store);
    }

    /**
     * 加载数据字典
     *
     * @private
     * @param {Store<any>} store
     * @returns {Promise<any>}
     * @memberof AuthGuard
     */
    private async loadDictionaryDatas(store: Store<any>): Promise<any> {
        if (this.dictionaryDatasState) {
            return Promise.resolve(true);
        }
        const url = `./assets/json/data-dictionary.json`;
        let response: any = await Http.getInstance().get(url)
        if (response && response.status === 200 && response.data && Array.isArray(response.data)) {
            const datas: any[] = [...response.data];
            datas.forEach((item: any) => {
                if (item && !item.items) {
                    item.items = [];
                }
            });
            store.commit('addCodeLists', datas);
            this.dictionaryDatasState = true;
        }
        return Promise.resolve(true);
    }

}
