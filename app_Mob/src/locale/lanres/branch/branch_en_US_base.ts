import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    name:  commonLogic.appcommonhandle("名称",null),
    deleted:  commonLogic.appcommonhandle("已删除",null),
    id:  commonLogic.appcommonhandle("编号",null),
    order:  commonLogic.appcommonhandle("排序",null),
    product:  commonLogic.appcommonhandle("所属产品",null),
  },
};