import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    join:  commonLogic.appcommonhandle("加盟日",null),
    account:  commonLogic.appcommonhandle("用户",null),
    hours:  commonLogic.appcommonhandle("可用工时/天",null),
    left:  commonLogic.appcommonhandle("预计剩余",null),
    days:  commonLogic.appcommonhandle("可用工日",null),
    id:  commonLogic.appcommonhandle("编号",null),
    consumed:  commonLogic.appcommonhandle("总计消耗",null),
    order:  commonLogic.appcommonhandle("排序",null),
    estimate:  commonLogic.appcommonhandle("最初预计",null),
    limited:  commonLogic.appcommonhandle("受限用户",null),
    role:  commonLogic.appcommonhandle("角色",null),
    type:  commonLogic.appcommonhandle("团队类型",null),
    total:  commonLogic.appcommonhandle("总计可用",null),
    root:  commonLogic.appcommonhandle("项目编号",null),
    username:  commonLogic.appcommonhandle("用户",null),
    taskCnt:  commonLogic.appcommonhandle("任务数",null),
  },
	views: {
		projectteammobmeditview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
	},
};