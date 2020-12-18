import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    createMan:  commonLogic.appcommonhandle("建立人",null),
    ibzFavoritesId:  commonLogic.appcommonhandle("收藏标识",null),
    createDate:  commonLogic.appcommonhandle("建立时间",null),
    ibzFavoritesName:  commonLogic.appcommonhandle("收藏名称",null),
    updateMan:  commonLogic.appcommonhandle("更新人",null),
    updateDate:  commonLogic.appcommonhandle("更新时间",null),
    objectID:  commonLogic.appcommonhandle("数据对象标识",null),
    account:  commonLogic.appcommonhandle("收藏用户",null),
    type:  commonLogic.appcommonhandle("类型",null),
  },
	views: {
		mobtabexpview: {
			caption: commonLogic.appcommonhandle("收藏",null),
		},
	},
};