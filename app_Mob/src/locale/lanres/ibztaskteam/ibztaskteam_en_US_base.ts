import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    role:  commonLogic.appcommonhandle("角色",null),
    root:  commonLogic.appcommonhandle("编号",null),
    limited:  commonLogic.appcommonhandle("受限用户",null),
    total:  commonLogic.appcommonhandle("总计可用",null),
    username:  commonLogic.appcommonhandle("用户",null),
    order:  commonLogic.appcommonhandle("排序",null),
    days:  commonLogic.appcommonhandle("可用工日",null),
    type:  commonLogic.appcommonhandle("团队类型",null),
    estimate:  commonLogic.appcommonhandle("最初预计",null),
    account:  commonLogic.appcommonhandle("用户",null),
    consumed:  commonLogic.appcommonhandle("总计消耗",null),
    id:  commonLogic.appcommonhandle("编号",null),
    join:  commonLogic.appcommonhandle("加盟日",null),
    hours:  commonLogic.appcommonhandle("可用工时/天",null),
    left:  commonLogic.appcommonhandle("预计剩余",null),
  },
	views: {
		mobeditview9: {
			caption: commonLogic.appcommonhandle("任务团队",null),
		},
		mobmeditview9: {
			caption: commonLogic.appcommonhandle("任务团队",null),
		},
	},
	mobmain_form: {
		details: {
			group1: commonLogic.appcommonhandle("任务团队基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用户",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			root: commonLogic.appcommonhandle("编号",null), 
			type: commonLogic.appcommonhandle("团队类型",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			estimate: commonLogic.appcommonhandle("最初预计",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
	mobeditview9righttoolbar_toolbar: {
	},
};