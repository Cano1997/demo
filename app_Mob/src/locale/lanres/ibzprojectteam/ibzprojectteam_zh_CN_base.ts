import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    join: "加盟日",
    account: "用户",
    hours: "可用工时/天",
    left: "预计剩余",
    days: "可用工日",
    id: "编号",
    consumed: "总计消耗",
    order: "排序",
    estimate: "最初预计",
    limited: "受限用户",
    role: "角色",
    type: "团队类型",
    total: "总计可用",
    root: "项目编号",
    username: "用户",
    taskcnt: "任务数",
  },
	views: {
		projectteammobmeditview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
	},
};