import CommonLogicBase from './common-logic-base';
import store from '@/store';
const data: any = { project: '项目',product: '产品' ,sprint: '冲刺',iteration: '迭代'  };
let srfmstatus:any = "";
let replaceAll: Function = (str: string,s1: string,s2: string)=>{
    return str.replace(new RegExp(s1, "gm"), s2);
}
const CommonLogicOwnData = {
    appcommonhandle: (param1: any, param2: any) =>{
        if(!srfmstatus){
            const { settings } = store.getters.getAppData();
            if (!settings || !settings.srfmstatus) {
                return param1;
            }
            srfmstatus = settings.srfmstatus.split('_');
        }
        if(param1.indexOf('产品') !== -1){
            param1 = replaceAll(param1,'产品', data[srfmstatus[0]]);
        }else if(param1.indexOf('项目') !== -1 ){
            param1 = replaceAll(param1,'项目', data[srfmstatus[1]]);
        }
        return param1
    }
};
const targetData = Object.assign(CommonLogicBase, CommonLogicOwnData);
export default targetData;