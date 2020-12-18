import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    account: "用户",
    left: "预计剩余",
    consumed: "总计消耗",
    id: "编号",
    date: "日期",
    work: "work",
    task: "任务",
    dates: "日期",
  },
	views: {
		mobeditview9: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
		mobmeditview9: {
			caption: commonLogic.appcommonhandle("任务预计",null),
		},
	},
	newform_form: {
		details: {
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("编号",null), 
			srfmajortext: commonLogic.appcommonhandle("编号",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			dates: commonLogic.appcommonhandle("日期",null), 
			consumed: commonLogic.appcommonhandle("工时",null), 
			left: commonLogic.appcommonhandle("剩余",null), 
			work: commonLogic.appcommonhandle("备注",null), 
			id: commonLogic.appcommonhandle("编号",null), 
		},
		uiactions: {
		},
	},
};