/**
 * ImgswipeStyleMenu 部件模型
 *
 * @export
 * @class ImgswipeStyleMenuModel
 */
export class ImgswipeStyleMenuModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    private items: any[] = [
        {
	id: '6FE05C96-0FCF-4BC5-BA8B-7F3B69FFC3E8',
	name: 'menuitem1',
	text: '京东',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '京东',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'http://img.itmop.com/upload/2016-1/2016116172054.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem1',
},
        {
	id: '0BBD0F57-698A-4E5A-892D-4A7D9902533B',
	name: 'menuitem2',
	text: '天猫',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '天猫',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'https://consumer.gucheng.com/UploadFiles_6578/201711/2017112810575805.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem2',
},
        {
	id: '2ECD49D6-8C64-4A11-B4E9-6B17ABD4D1B1',
	name: 'menuitem3',
	text: '亚马逊',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '亚马逊',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3696020296,2643788514&fm=26&gp=0.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem3',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ImgswipeStyleMenuModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ImgswipeStyleMenuModel;