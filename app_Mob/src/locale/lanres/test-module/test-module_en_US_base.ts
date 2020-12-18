import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    path:  commonLogic.appcommonhandle("path",null),
    deleted:  commonLogic.appcommonhandle("逻辑删除标志",null),
    name:  commonLogic.appcommonhandle("名称",null),
    order:  commonLogic.appcommonhandle("排序值",null),
    branch:  commonLogic.appcommonhandle("branch",null),
    iBizShort:  commonLogic.appcommonhandle("简称",null),
    grade:  commonLogic.appcommonhandle("grade",null),
    type:  commonLogic.appcommonhandle("类型（story）",null),
    owner:  commonLogic.appcommonhandle("owner",null),
    id:  commonLogic.appcommonhandle("id",null),
    isLeaf:  commonLogic.appcommonhandle("叶子模块",null),
    collector:  commonLogic.appcommonhandle("collector",null),
    parent:  commonLogic.appcommonhandle("id",null),
    parentName:  commonLogic.appcommonhandle("上级模块",null),
    root:  commonLogic.appcommonhandle("编号",null),
    rootName:  commonLogic.appcommonhandle("测试",null),
  },
};