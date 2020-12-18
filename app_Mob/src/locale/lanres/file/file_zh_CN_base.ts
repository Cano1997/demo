import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    pathname: "路径",
    objectid: "对象ID",
    deleted: "已删除",
    extension: "文件类型",
    objecttype: "对象类型",
    addedby: "由谁添加",
    title: "标题",
    addeddate: "添加时间",
    downloads: "下载次数",
    size: "大小",
    id: "id",
    extra: "备注",
    strsize: "显示大小",
    doclibtype: "文档类型",
  },
	views: {
		mobmdview9: {
			caption: commonLogic.appcommonhandle("附件",null),
		},
	},
};