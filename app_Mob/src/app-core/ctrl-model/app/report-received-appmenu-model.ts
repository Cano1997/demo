/**
 * ReportReceived 部件模型
 *
 * @export
 * @class ReportReceivedModel
 */
export class ReportReceivedModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ReportReceivedModel
     */
    private items: any[] = [
        {
	id: '32249EEB-9F47-415F-8AFF-069245A41591',
	name: 'menuitem1',
	text: '日报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '日报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'DailyReportReceived',
	resourcetag: '',
	authtag:'Mob-reportReceived-menuitem1',
},
        {
	id: '9A9C545B-6238-4A80-B880-818DF0EB44C9',
	name: 'menuitem2',
	text: '周报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '周报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc10',
	resourcetag: '',
	authtag:'Mob-reportReceived-menuitem2',
},
        {
	id: '91B79BE7-7D36-40B6-8742-DBB11D7DB970',
	name: 'menuitem3',
	text: '月报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '月报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'MyReceivedMonthly',
	resourcetag: '',
	authtag:'Mob-reportReceived-menuitem3',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ReportReceivedModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ReportReceivedModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ReportReceivedModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ReportReceivedModel;