import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    createMan:  commonLogic.appcommonhandle("建立人",null),
    ibzDailyId:  commonLogic.appcommonhandle("日报标识",null),
    ibzDailyName:  commonLogic.appcommonhandle("日报名称",null),
    updateDate:  commonLogic.appcommonhandle("更新时间",null),
    createDate:  commonLogic.appcommonhandle("建立时间",null),
    updateMan:  commonLogic.appcommonhandle("更新人",null),
    date:  commonLogic.appcommonhandle("日期",null),
    account:  commonLogic.appcommonhandle("用户",null),
    worktoday:  commonLogic.appcommonhandle("今日工作",null),
    mailto:  commonLogic.appcommonhandle("抄送给",null),
    files:  commonLogic.appcommonhandle("附件",null),
    todaytask:  commonLogic.appcommonhandle("完成任务",null),
    issubmit:  commonLogic.appcommonhandle("是否提交",null),
    planstomorrow:  commonLogic.appcommonhandle("明日计划",null),
    tomorrowplanstask:  commonLogic.appcommonhandle("明日计划任务",null),
    reportto:  commonLogic.appcommonhandle("汇报给",null),
    comment:  commonLogic.appcommonhandle("其他事项",null),
    createManName:  commonLogic.appcommonhandle("建立人名称",null),
    updateManName:  commonLogic.appcommonhandle("更新人名称",null),
    reportstatus:  commonLogic.appcommonhandle("状态",null),
    submittime:  commonLogic.appcommonhandle("提交时间",null),
    reporttopk:  commonLogic.appcommonhandle("汇报给（选择）",null),
    mailtopk:  commonLogic.appcommonhandle("抄送给（选择）",null),
  },
	views: {
		myremobeditview: {
			caption: commonLogic.appcommonhandle("我收到的",null),
		},
		mymobmdview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailycreatemobeditview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		reportreceivedmobmdview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailymobtabexpview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailymobeditview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailyinfomobeditview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		mydailymobtabexpview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailyplanstomorrowtaskmobmdview: {
			caption: commonLogic.appcommonhandle("完成任务",null),
		},
		dailycompletetaskmobmdview: {
			caption: commonLogic.appcommonhandle("完成任务",null),
		},
		dailymobmdview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
		dailyreportsubmitmobmdview: {
			caption: commonLogic.appcommonhandle("日报",null),
		},
	},
	dailyinfomob_form: {
		details: {
			group1: commonLogic.appcommonhandle("日报基本信息",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("附件",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("操作记录",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("日报标识",null), 
			srfmajortext: commonLogic.appcommonhandle("日报名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			account: commonLogic.appcommonhandle("",null), 
			ibzdailyname: commonLogic.appcommonhandle("日报名称",null), 
			date: commonLogic.appcommonhandle("日期",null), 
			worktoday: commonLogic.appcommonhandle("今日工作",null), 
			planstomorrow: commonLogic.appcommonhandle("明日计划",null), 
			comment: commonLogic.appcommonhandle("其他事项",null), 
			reportto: commonLogic.appcommonhandle("汇报给",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			ibz_dailyid: commonLogic.appcommonhandle("日报标识",null), 
			todaytask: commonLogic.appcommonhandle("完成任务",null), 
			issubmit: commonLogic.appcommonhandle("是否提交",null), 
		},
		uiactions: {
		},
	},
	mobdailyedit_form: {
		details: {
			group1: commonLogic.appcommonhandle("日报基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("日报标识",null), 
			srfmajortext: commonLogic.appcommonhandle("日报名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			ibz_dailyname: commonLogic.appcommonhandle("日报名称",null), 
			date: commonLogic.appcommonhandle("日期",null), 
			todaytask: commonLogic.appcommonhandle("完成任务",null), 
			worktoday: commonLogic.appcommonhandle("今日工作",null), 
			tomorrowplanstask: commonLogic.appcommonhandle("明日计划任务",null), 
			planstomorrow: commonLogic.appcommonhandle("明日计划",null), 
			comment: commonLogic.appcommonhandle("其他事项",null), 
			files: commonLogic.appcommonhandle("附件",null), 
			reportto: commonLogic.appcommonhandle("汇报给",null), 
			reporttopk: commonLogic.appcommonhandle("汇报给",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			ibz_dailyid: commonLogic.appcommonhandle("日报标识",null), 
			account: commonLogic.appcommonhandle("用户",null), 
			issubmit: commonLogic.appcommonhandle("是否提交",null), 
		},
		uiactions: {
		},
	},
	dailyinfodingding_form: {
		details: {
			druipart3: commonLogic.appcommonhandle("",null), 
			grouppanel3: commonLogic.appcommonhandle("完成任务",null), 
			druipart4: commonLogic.appcommonhandle("",null), 
			grouppanel4: commonLogic.appcommonhandle("计划参与",null), 
			group1: commonLogic.appcommonhandle("日报基本信息",null), 
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("附件",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("操作记录",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("日报标识",null), 
			srfmajortext: commonLogic.appcommonhandle("日报名称",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			account: commonLogic.appcommonhandle("",null), 
			ibzdailyname: commonLogic.appcommonhandle("日报名称",null), 
			date: commonLogic.appcommonhandle("日期",null), 
			worktoday: commonLogic.appcommonhandle("今日工作",null), 
			planstomorrow: commonLogic.appcommonhandle("明日计划",null), 
			comment: commonLogic.appcommonhandle("其他事项",null), 
			reportto: commonLogic.appcommonhandle("汇报给",null), 
			mailto: commonLogic.appcommonhandle("抄送给",null), 
			ibz_dailyid: commonLogic.appcommonhandle("日报标识",null), 
			todaytask: commonLogic.appcommonhandle("完成任务",null), 
			tomorrowplanstask: commonLogic.appcommonhandle("明日计划任务",null), 
			issubmit: commonLogic.appcommonhandle("是否提交",null), 
		},
		uiactions: {
		},
	},
	dailycreatemobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
	mymobmdviewrighttoolbar_toolbar: {
		deuiaction1_mobcreate: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: 'deuiaction1_mobcreate',
		},
	},
	dailymobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("Save And Close",null),
			tip: 'tbitem1',
		},
	},
	dailyinfomobeditviewrighttoolbar_toolbar: {
		deuiaction1_mobedit: {
			caption: commonLogic.appcommonhandle("编辑",null),
			tip: 'deuiaction1_mobedit',
		},
		deuiaction1_submitmob: {
			caption: commonLogic.appcommonhandle("提交",null),
			tip: 'deuiaction1_submitmob',
		},
	},
	dailycompletetaskmobmdviewrighttoolbar_toolbar: {
	},
	mobeditviewrighttoolbar_toolbar: {
		deuiaction1_mobedit: {
			caption: commonLogic.appcommonhandle("编辑",null),
			tip: 'deuiaction1_mobedit',
		},
		deuiaction1_submitmob: {
			caption: commonLogic.appcommonhandle("提交",null),
			tip: 'deuiaction1_submitmob',
		},
	},
	dailyplanstomorrowtaskmobmdviewrighttoolbar_toolbar: {
	},
	dailymobtabexpviewrighttoolbar_toolbar: {
	},
	reportreceivedmobmdviewrighttoolbar_toolbar: {
	},
	mydailymobtabexpviewrighttoolbar_toolbar: {
	},
	dailyreportsubmitmobmdviewrighttoolbar_toolbar: {
	},
	dailymobmdviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("New",null),
			tip: 'tbitem1',
		},
	},
};