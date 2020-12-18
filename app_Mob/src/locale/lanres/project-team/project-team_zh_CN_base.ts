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
		projectteammobeditview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("项目团队",null),
		},
	},
	projectteammob_form: {
		details: {
			group1: commonLogic.appcommonhandle("项目团队基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用户",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			role: commonLogic.appcommonhandle("角色",null), 
			join: commonLogic.appcommonhandle("加盟日",null), 
			days: commonLogic.appcommonhandle("可用工日",null), 
			hours: commonLogic.appcommonhandle("可用工时/天",null), 
			total: commonLogic.appcommonhandle("总计可用",null), 
			limited: commonLogic.appcommonhandle("受限用户",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	projectteammobeditviewrighttoolbar_toolbar: {
	},
	mobmdviewrighttoolbar_toolbar: {
	},
};