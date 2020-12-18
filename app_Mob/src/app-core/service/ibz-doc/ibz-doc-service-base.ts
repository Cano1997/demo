import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 文档服务对象基类
 *
 * @export
 * @class IBzDocServiceBase
 * @extends {EntityServie}
 */
export class IBzDocServiceBase extends EntityService {

    /**
     * Creates an instance of  IBzDocServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBzDocServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBzDocServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzdoc';
        this.APPDEKEY = 'ibzdocid';
        this.APPDENAME = 'ibzdocs';
        this.APPDETEXT = 'ibzdocname';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBzDocServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibzdocs/${context.ibzdoc}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBzDocServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}