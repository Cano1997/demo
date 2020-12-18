import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    pathname:  commonLogic.appcommonhandle("路径",null),
    objectID:  commonLogic.appcommonhandle("对象ID",null),
    deleted:  commonLogic.appcommonhandle("已删除",null),
    extension:  commonLogic.appcommonhandle("文件类型",null),
    objectType:  commonLogic.appcommonhandle("对象类型",null),
    addedBy:  commonLogic.appcommonhandle("由谁添加",null),
    title:  commonLogic.appcommonhandle("标题",null),
    addedDate:  commonLogic.appcommonhandle("添加时间",null),
    downloads:  commonLogic.appcommonhandle("下载次数",null),
    size:  commonLogic.appcommonhandle("大小",null),
    id:  commonLogic.appcommonhandle("id",null),
    extra:  commonLogic.appcommonhandle("备注",null),
    strsize:  commonLogic.appcommonhandle("显示大小",null),
    doclibtype:  commonLogic.appcommonhandle("文档类型",null),
  },
	views: {
		mobmdview9: {
			caption: commonLogic.appcommonhandle("附件",null),
		},
	},
};