/**
 * ReportSubmit 部件模型
 *
 * @export
 * @class ReportSubmitModel
 */
export class ReportSubmitModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ReportSubmitModel
     */
    private items: any[] = [
        {
	id: 'CEAC27A3-3546-49F3-87B6-51F70DCE0B0B',
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
	appfunctag: 'DailyReportSubmit',
	resourcetag: '',
	authtag:'Mob-reportSubmit-menuitem1',
},
        {
	id: 'A4DA2113-FBCE-4982-9F33-5699204BC413',
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
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-reportSubmit-menuitem2',
},
        {
	id: '40BC2108-4445-48BA-9A55-178C9F41B4BB',
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
	appfunctag: 'MySubmitMonthly',
	resourcetag: '',
	authtag:'Mob-reportSubmit-menuitem3',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ReportSubmitModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ReportSubmitModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ReportSubmitModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ReportSubmitModel;