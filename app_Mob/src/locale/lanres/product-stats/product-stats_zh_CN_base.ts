import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    id: "产品编号",
    deleted: "已删除",
    storycnt: "需求总数",
    productplancnt: "计划总数",
    releasecnt: "发布总数",
    waitstorycnt: "未开始需求数",
    plannedstorycnt: "已计划需求数",
    developingstorycnt: "开发中需求数",
    testingstorycnt: "测试中需求数",
    releasedstorycnt: "已发布需求数",
    unendproductplancnt: "未过期计划数",
    resprojectcnt: "关联项目数",
    undoneresprojectcnt: "未完成关联项目数",
    normalreleasecnt: "维护中发布数",
    activestorycnt: "激活需求数",
    activebugcnt: "未解决Bug数",
    name: "产品名称",
    assigntomebugcnt: "指派给我的Bug数",
    notclosedbugcnt: "未关闭Bug数",
    bugcnt: "所有Bug数",
    unconfirmbugcnt: "未确认Bug数",
    yesterdayclosedbugcnt: "昨天关闭Bug数",
    yesterdayconfirmbugcnt: "昨天确认Bug数",
    yesterdayresolvedbugcnt: "昨天解决Bug数",
    postponedprojectcnt: "已延期",
    currproject: "当前项目",
    status: "状态",
    code: "产品代号",
    type: "产品类型",
    order1: "产品排序",
    istop: "是否置顶",
  },
	views: {
		mobmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("产品详情",null),
		},
		testmobmdview: {
			caption: commonLogic.appcommonhandle("产品",null),
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: '新建',
		},
	},
	testmobmdviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("新建",null),
			tip: '新建',
		},
	},
};