import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type: "类型（task）",
    collector: "collector",
    id: "id",
    deleted: "逻辑删除标志",
    isleaf: "叶子模块",
    path: "path",
    owner: "owner",
    ibizshort: "简称",
    name: "名称",
    grade: "grade",
    order: "排序值",
    branch: "branch",
    parent: "id",
    root: "项目",
    rootname: "所属项目",
    parentname: "上级模块",
    orderpk: "数据选择排序",
  },
	views: {
		mobpickupmdview: {
			caption: commonLogic.appcommonhandle("任务模块",null),
		},
		mobpickupview: {
			caption: commonLogic.appcommonhandle("任务模块",null),
		},
	},
};