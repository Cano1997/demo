/**
 * ListMenu 部件模型
 *
 * @export
 * @class ListMenuModel
 */
export class ListMenuModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ListMenuModel
     */
    private items: any[] = [
        {
	id: '18BA8F65-9D27-4947-B69E-E0F346370CD6',
	name: 'menuitem1',
	text: '电脑',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '电脑',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'desktop',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem1',
},
        {
	id: '933E2C45-8EE3-4158-B6B7-BCB2A95C23BD',
	name: 'menuitem8',
	text: '个人信息',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '个人信息',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem8',
},
        {
	id: '99D582CB-D6C7-4F49-9B33-BE270A6DE7FF',
	name: 'menuitem2',
	text: '手机',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '手机',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'phone-portrait',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem2',
},
        {
	id: '5626FC78-27A9-447A-B655-ECEC2BFB9E1E',
	name: 'menuitem3',
	text: '杯子',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '杯子',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'cafe',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem3',
},
        {
	id: 'E0BF1869-5153-4FE1-A02B-2431F6A77D1F',
	name: 'menuitem4',
	text: '用户',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '用户',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'people',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem4',
},
        {
	id: '6B5F6879-1BE5-4209-8C59-D006235AACB1',
	name: 'menuitem5',
	text: '相机',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '相机',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'camera',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem5',
},
        {
	id: '7AC9BC29-2BD1-4A5F-87FC-899848021667',
	name: 'menuitem6',
	text: '望远镜',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '望远镜',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'flask',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem6',
},
        {
	id: '2FBFE5E1-24DC-49F2-BDF1-24D4251E36A9',
	name: 'menuitem7',
	text: '更多',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '更多',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'pagelines',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem7',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ListMenuModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ListMenuModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ListMenuModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ListMenuModel;