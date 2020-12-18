import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    type: "用例步骤类型",
    id: "编号",
    desc: "步骤",
    expect: "预期",
    version: "用例版本",
    ibizcase: "用例",
    parent: "分组用例步骤的组编号",
    reals: "实际情况",
    steps: "测试结果",
    files: "附件",
    runid: "执行编号",
    casestepid: "用例步骤编号",
  },
	views: {
		mobmdview9: {
			caption: commonLogic.appcommonhandle("用例步骤",null),
		},
	},
};