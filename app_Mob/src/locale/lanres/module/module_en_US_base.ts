import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    root:  commonLogic.appcommonhandle("所属根",null),
    grade:  commonLogic.appcommonhandle("级别",null),
    type:  commonLogic.appcommonhandle("类型",null),
    name:  commonLogic.appcommonhandle("模块名称",null),
    order:  commonLogic.appcommonhandle("排序",null),
    owner:  commonLogic.appcommonhandle("负责人",null),
    id:  commonLogic.appcommonhandle("id",null),
    collector:  commonLogic.appcommonhandle("收藏者",null),
    iBizShort:  commonLogic.appcommonhandle("简称",null),
    path:  commonLogic.appcommonhandle("路径",null),
    deleted:  commonLogic.appcommonhandle("已删除",null),
    parentName:  commonLogic.appcommonhandle("上级模块",null),
    branch:  commonLogic.appcommonhandle("平台/分支",null),
    parent:  commonLogic.appcommonhandle("上级模块",null),
    mdeptId:  commonLogic.appcommonhandle("部门标识",null),
    orgId:  commonLogic.appcommonhandle("组织标识",null),
    orderpk:  commonLogic.appcommonhandle("数据选择排序",null),
  },
	views: {
		mobpickupview: {
			caption: commonLogic.appcommonhandle("模块",null),
		},
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("模块",null),
		},
	},
};