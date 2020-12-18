import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    root: "所属根",
    grade: "级别",
    type: "类型",
    name: "模块名称",
    order: "排序",
    owner: "负责人",
    id: "id",
    collector: "收藏者",
    ibizshort: "简称",
    path: "路径",
    deleted: "已删除",
    parentname: "上级模块",
    branch: "平台/分支",
    parent: "上级模块",
    mdeptid: "部门标识",
    orgid: "组织标识",
    orderpk: "数据选择排序",
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