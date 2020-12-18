import { Http,Util } from '@/ibiz-core/utils';
import {CaseServiceBase} from './case-service-base';


/**
 * 测试用例服务对象
 *
 * @export
 * @class CaseService
 * @extends {CaseServiceBase}
 */
export class CaseService extends CaseServiceBase {

    /**
     * Creates an instance of  CaseService.
     * 
     * @param {*} [opts={}]
     * @memberof  CaseService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


    /**
     * LinkCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async LinkCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/linkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/linkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            context.case = 0;
            data.id = 0;
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/linkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        context.case = 0;
        data.id = 0;
        let res:any = Http.getInstance().post(`/cases/${context.case}/linkcase`,data,isloading);
        return res;
    }


    /**
     * MobLinkCase接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof CaseServiceBase
     */
    public async MobLinkCase(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/cases/${context.case}/moblinkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        if(context.story && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            let res:any = await Http.getInstance().post(`/stories/${context.story}/cases/${context.case}/moblinkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        if(context.product && context.case){
            let masterData:any = {};
            let casestepsData:any = [];
            if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_casesteps'),'undefined')){
                casestepsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_casesteps') as any);
                if(casestepsData && casestepsData.length && casestepsData.length > 0){
                    casestepsData.forEach((item:any) => {
                        if(item.srffrontuf){
                            if(Object.is(item.srffrontuf,"0")){
                                item.id = null;
                                if(item.hasOwnProperty('id') && item.id) item.id = null;
                            }
                            delete item.srffrontuf;
                        }
                    });
                }
            }
            masterData.casesteps = casestepsData;
            Object.assign(data,masterData);
            context.case = 0;
            data.id = 0;
            let res:any = await Http.getInstance().post(`/products/${context.product}/cases/${context.case}/moblinkcase`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_casesteps',JSON.stringify(res.data.casesteps?res.data.casesteps:[]));

            return res;
        }
        context.case = 0;
        data.id = 0;
        let res:any = Http.getInstance().post(`/cases/${context.case}/moblinkcase`,data,isloading);
        return res;
    }
}
// 默认导出
export default CaseService;