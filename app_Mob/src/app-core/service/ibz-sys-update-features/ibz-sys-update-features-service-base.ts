import { Http,Util,HttpResponse } from '@/ibiz-core/utils';
import  { EntityService }  from '@/ibiz-core';



/**
 * 系统更新功能服务对象基类
 *
 * @export
 * @class IbzSysUpdateFeaturesServiceBase
 * @extends {EntityServie}
 */
export class IbzSysUpdateFeaturesServiceBase extends EntityService {

    /**
     * Creates an instance of  IbzSysUpdateFeaturesServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IbzSysUpdateFeaturesServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IbzSysUpdateFeaturesServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibzsysupdatefeatures';
        this.APPDEKEY = 'sysupdatefeaturesid';
        this.APPDENAME = 'ibzsysupdatefeatures';
        this.APPDETEXT = 'sysupdatefeaturesname';
        this.APPNAME = 'mob';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IbzSysUpdateFeaturesServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        // FetchDefault ---FETCH
    }
}