// import mqtt, { MqttClient } from 'mqtt';
import { Util } from '../../utils';
import { AccCentralMessage } from './message/acc-central-message';
import { AccSystemMessage } from './message/acc-system-message';
import { AccCurrentMessage } from './message/acc-current-message';
import { AppMessage } from './interface';
import { AccSendUtil } from './acc-send-util';

/**
 * App通讯中心
 *
 * @export
 * @class CommunicationsCenter
 */
export class AppCommunicationsCenter {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {AppCommunicationsCenter}
     * @memberof AppCommunicationsCenter
     */
    private static readonly appCC: AppCommunicationsCenter = new AppCommunicationsCenter;
    /**
     * 应用中心消息
     *
     * @private
     * @type {AccCentralMessage}
     * @memberof AppCommunicationsCenter
     */
    private $accCentralMessage: AccCentralMessage = new AccCentralMessage();
    /**
     * 发送消息工具
     *
     * @type {AccSendUtil}
     * @memberof AppCommunicationsCenter
     */
    public send: AccSendUtil = new AccSendUtil(this);
    /**
     * 应用中心级
     *
     * @readonly
     * @type {AccCentralMessage}
     * @memberof AppCommunicationsCenter
     */
    public get central(): AccCentralMessage {
        return this.$accCentralMessage;
    }
    /**
     * 系统消息
     *
     * @private
     * @type {AccSystemMessage}
     * @memberof AppCommunicationsCenter
     */
    private $accSystemMessage: AccSystemMessage = new AccSystemMessage();
    /**
     * 系统级
     *
     * @readonly
     * @type {AccSystemMessage}
     * @memberof AppCommunicationsCenter
     */
    public get system(): AccSystemMessage {
        return this.$accSystemMessage;
    }
    /**
     * 当前页面消息
     *
     * @private
     * @type {AccCurrentMessage}
     * @memberof AppCommunicationsCenter
     */
    private $accCurrentMessage: AccCurrentMessage = new AccCurrentMessage();
    /**
     * 页面级
     *
     * @readonly
     * @type {AccCurrentMessage}
     * @memberof AppCommunicationsCenter
     */
    public get current(): AccCurrentMessage {
        return this.$accCurrentMessage;
    }
    /**
     * 订阅缓存
     *
     * @protected
     * @type {Map<string, string[]>}
     * @memberof AppCommunicationsCenter
     */
    protected unsubscribeCache: Map<string, string[]> = new Map();
    /**
     * 连接选项
     *
     * @protected
     * @memberof AppCommunicationsCenter
     */
    protected options = {
        // 超时时间
        connectTimeout: 4000,
        // 认证信息
        clientId: 'ws-' + new Date().getTime(),
        // username: 'emqx',
        // password: 'emqx',
        // 心跳时间
        keepalive: 60,
        clean: true,
    }
    /**
     * 链接实例
     *
     * @protected
     * @type {MqttClient}
     * @memberof AppCommunicationsCenter
     */
    // protected ws!: MqttClient;
    /**
     * 连接地址
     *
     * @protected
     * @type {string}
     * @memberof AppCommunicationsCenter
     */
    protected url?: string;
    /**
     * 中心主题标识
     *
     * @protected
     * @type {string}
     * @memberof AppCommunicationsCenter
     */
    protected psdcconsoleid?: string;
    /**
     * 系统主题标识
     *
     * @protected
     * @type {string}
     * @memberof AppCommunicationsCenter
     */
    protected psdevslnsysid?: string;
    /**
     * 当前studio标识
     *
     * @protected
     * @type {string}
     * @memberof AppCommunicationsCenter
     */
    protected psdsconsoleid?: string;
    /**
     * Creates an instance of AppCommunicationsCenter.
     * @param {{ psdsconsoleurl: string, psdcconsoleid?: string, psdevslnsysid?: string, psdsconsoleid?: string }} [params]
     * @param {*} [opt={}]
     * @memberof AppCommunicationsCenter
     */
    constructor(params?: { psdsconsoleurl?: string, psdcconsoleid?: string, psdevslnsysid?: string, psdsconsoleid?: string }, opt: any = {}) {
        let me: any = this;
        if (AppCommunicationsCenter.appCC) {
            me = AppCommunicationsCenter.appCC;
        }
        // if (params) {
        //     me.url = params.psdsconsoleurl;
        //     me.psdcconsoleid = params.psdcconsoleid;
        //     me.psdevslnsysid = params.psdevslnsysid;
        //     me.psdsconsoleid = params.psdsconsoleid;
        //     if (me.psdsconsoleid) {
        //         me.options.clientId = me.psdsconsoleid;
        //     }
        //     Object.assign(me.options, opt);
        //     if (me.url) {
        //         if (me.ws) {
        //             me.ws.disconnecting()
        //             me.ws.disconnected();
        //         }
        //         me.ws = mqtt.connect(me.url, this.options);
        //         me.registerEvent();
        //     }
        // }
        return me;
    }

    /**
     * 注册事件
     *
     * @protected
     * @memberof AppCommunicationsCenter
     */
    // protected registerEvent(): void {
    //     this.ws.on('connect', () => {
    //         // 订阅中心级
    //         if (this.psdcconsoleid) {
    //             this.ws.subscribe(this.psdcconsoleid, { qos: 1 }, (error: any) => {
    //                 if (error) {
    //                     console.error('Central 订阅失败', error);
    //                     return;
    //                 }
    //             });
    //         }
    //         // 订阅系统级
    //         if (this.psdevslnsysid) {
    //             this.ws.subscribe(this.psdevslnsysid, { qos: 1 }, (error: any) => {
    //                 if (error) {
    //                     console.error('System 订阅失败', error);
    //                     return;
    //                 }
    //             });
    //         }
    //         // 订阅当前级
    //         if (this.psdsconsoleid) {
    //             this.ws.subscribe(this.psdsconsoleid, { qos: 1 }, (error: any) => {
    //                 if (error) {
    //                     console.error('Current 订阅失败', error);
    //                     return;
    //                 }
    //             });
    //         }
    //     })
    //     this.ws.on('reconnect', (error: any) => {
    //         if (!error) {
    //             console.log('正在重连...');
    //         } else {
    //             console.warn('重连失败:', error);
    //         }
    //     })
    //     this.ws.on('error', (error: any) => {
    //         console.log('连接失败:', error)
    //     })
    //     this.ws.on('message', (topic: any, message: any) => {
    //         let ms: string = '';
    //         try {
    //             ms = message.toString('utf-8');
    //             const data: any = JSON.parse(ms);
    //             switch (topic) {
    //                 case this.psdcconsoleid:
    //                     this.next('Central', data);
    //                     break;
    //                 case this.psdevslnsysid:
    //                     this.next('System', data);
    //                     break;
    //                 case this.psdsconsoleid:
    //                     this.next('Current', data);
    //                     break;
    //             }
    //         } catch (error) {
    //             console.warn('消息中心：websocket消息解析失败!');
    //             console.warn('消息内容：', ms);
    //             console.error(error);
    //         }
    //     });
    // }

    /**
     * 取消订阅
     *
     * @param {string} key
     * @memberof AccMessage
     */
    public unsubscribe(key: string): void {
        if (this.unsubscribeCache.has(key)) {
            const arr: any = this.unsubscribeCache.get(key);
            arr.forEach((str: string) => {
                this.unsubscribe(str);
            });
        } else {
            this.$accCentralMessage.unsubscribe(key);
            this.$accSystemMessage.unsubscribe(key);
            this.$accCurrentMessage.unsubscribe(key);
        }
    }

    /**
     * 取消本地模式订阅
     *
     * @param {string} key
     * @memberof AccMessage
     */
    public unsubscribeLocal(key: string): void {
        if (this.unsubscribeCache.has(key)) {
            const arr: any = this.unsubscribeCache.get(key);
            arr.forEach((str: string) => {
                this.unsubscribeLocal(str);
            });
        } else {
            this.$accCentralMessage.unsubscribeLocal(key);
            this.$accSystemMessage.unsubscribeLocal(key);
            this.$accCurrentMessage.unsubscribeLocal(key);
        }
    }

    /**
     * 发送消息
     *
     * @param {('Central' | 'System' | 'Current')} type
     * @param {AppMessage} data
     * @memberof AppCommunicationsCenter
     */
    public next(type: 'Central' | 'System' | 'Current', data: AppMessage) {
        switch (type) {
            case 'Central':
                this.$accCentralMessage.next(data);
                break;
            case 'System':
                this.$accSystemMessage.next(data);
                break;
            case 'Current':
                this.$accCurrentMessage.next(data);
                break;
        }
    }

    /**
     * 发送当前页面级消息
     *
     * @param {AppMessage} param
     * @memberof AppCommunicationsCenter
     */
    public sendMessage(param: AppMessage) {
        const params: any = Util.deepCopy(param);
        const data: any = params.content;
        if ((!data.srfdename || Object.is(data.srfdename, '')) && data.srfdeid) {
            data.srfdename = data.srfdeid;
        }
        this.$accCurrentMessage.nextLocal(params);
    }

    /**
     * 订阅command
     *
     * @param {(content: any) => void} observer 回调函数
     * @param {('update' | 'remove' | 'create')} [subtype] 更新类型
     * @param {string} [deName] 实体名称
     * @returns {string}
     * @memberof AppCommunicationsCenter
     */
    public command(observer: (content: any) => void, subtype?: 'update' | 'remove' | 'create' | 'all', deName?: string): string {
        const arr: any[] = [];
        if (Object.is(subtype, 'update')) {
            arr.push(this.central.command.update.subscribe(observer, deName));
            arr.push(this.system.command.update.subscribe(observer, deName));
            arr.push(this.current.command.update.subscribe(observer, deName));
        } else if (Object.is(subtype, 'remove')) {
            arr.push(this.central.command.remove.subscribe(observer, deName));
            arr.push(this.system.command.remove.subscribe(observer, deName));
            arr.push(this.current.command.remove.subscribe(observer, deName));
        } else if (Object.is(subtype, 'create')) {
            arr.push(this.central.command.create.subscribe(observer, deName));
            arr.push(this.system.command.create.subscribe(observer, deName));
            arr.push(this.current.command.create.subscribe(observer, deName));
        } else {
            arr.push(this.central.command.subscribe(observer, deName));
            arr.push(this.system.command.subscribe(observer, deName));
            arr.push(this.current.command.subscribe(observer, deName));
        }
        const key: string = this.createUUID();
        this.unsubscribeCache.set(key, arr);
        return key;
    }

    /**
     * 订阅command
     *
     * @param {(content: any) => void} observer 回调函数
     * @param {('update' | 'remove' | 'create')} [subtype] 更新类型
     * @param {string} [deName] 实体名称
     * @returns {string}
     * @memberof AppCommunicationsCenter
     */
    public commandLocal(observer: (content: any) => void, subtype?: 'update' | 'remove' | 'create' | 'all', deName?: string): string {
        const arr: any[] = [];
        if (Object.is(subtype, 'update')) {
            arr.push(this.current.command.update.subscribeLocal(observer, deName));
        } else if (Object.is(subtype, 'remove')) {
            arr.push(this.current.command.remove.subscribeLocal(observer, deName));
        } else if (Object.is(subtype, 'create')) {
            arr.push(this.current.command.create.subscribeLocal(observer, deName));
        } else {
            arr.push(this.current.command.subscribeLocal(observer, deName));
        }
        const key: string = this.createUUID();
        this.unsubscribeCache.set(key, arr);
        return key;
    }

    /**
     * 订阅console
     *
     * @param {(content: any) => void} observer
     * @returns {string}
     * @memberof AppCommunicationsCenter
     */
    public console(observer: (content: any) => void): string {
        const arr: any[] = [];
        arr.push(this.central.console.subscribe(observer));
        arr.push(this.system.console.subscribe(observer));
        arr.push(this.current.console.subscribe(observer));
        const key: string = this.createUUID();
        this.unsubscribeCache.set(key, arr);
        return key;
    }

    /**
     * 订阅console本地消息
     *
     * @param {(content: any) => void} observer
     * @returns {string}
     * @memberof AppCommunicationsCenter
     */
    public consoleLocal(observer: (content: any) => void): string {
        const key: string = this.createUUID();
        this.unsubscribeCache.set(key, [this.current.console.subscribeLocal(observer)]);
        return key;
    }

    /**
     * 获取实例
     *
     * @static
     * @returns
     * @memberof AppCommunicationsCenter
     */
    public static getInstance() {
        return AppCommunicationsCenter.appCC;
    }

    /**
     * 创建 UUID
     *
     * @returns {string}
     * @memberof Util
     */
    protected createUUID(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

}