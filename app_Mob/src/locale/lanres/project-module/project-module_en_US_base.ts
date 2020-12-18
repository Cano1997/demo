import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type:  commonLogic.appcommonhandle("类型（task）",null),
    collector:  commonLogic.appcommonhandle("collector",null),
    id:  commonLogic.appcommonhandle("id",null),
    deleted:  commonLogic.appcommonhandle("逻辑删除标志",null),
    isLeaf:  commonLogic.appcommonhandle("叶子模块",null),
    path:  commonLogic.appcommonhandle("path",null),
    owner:  commonLogic.appcommonhandle("owner",null),
    iBizShort:  commonLogic.appcommonhandle("简称",null),
    name:  commonLogic.appcommonhandle("名称",null),
    grade:  commonLogic.appcommonhandle("grade",null),
    order:  commonLogic.appcommonhandle("排序值",null),
    branch:  commonLogic.appcommonhandle("branch",null),
    parent:  commonLogic.appcommonhandle("id",null),
    root:  commonLogic.appcommonhandle("项目",null),
    rootName:  commonLogic.appcommonhandle("所属项目",null),
    parentName:  commonLogic.appcommonhandle("上级模块",null),
    orderpk:  commonLogic.appcommonhandle("数据选择排序",null),
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