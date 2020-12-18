/**
 * ReportNew 部件模型
 *
 * @export
 * @class ReportNewModel
 */
export class ReportNewModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ReportNewModel
     */
    private items: any[] = [
        {
	id: '311884FF-ED77-42DC-9430-C1E698834615',
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
	icon: 'assets/images/daily.svg',
	textcls: '',
	appfunctag: 'AppFunc5',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem1',
},
        {
	id: '9EF7DBEB-4E94-497C-B8B0-19D5DF0520C7',
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
	icon: 'assets/images/weekly.svg',
	textcls: '',
	appfunctag: 'AppFunc9',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem2',
},
        {
	id: '512BD29A-1017-431E-9B02-09AB05F6B61A',
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
	icon: 'assets/images/monthly.svg',
	textcls: '',
	appfunctag: 'Monthly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem3',
},
        {
	id: '66946C22-1C17-4850-882C-32D2FAF47FD2',
	name: 'menuitem6',
	text: '汇报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '汇报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/report.svg',
	textcls: '',
	appfunctag: 'Reportly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem6',
},
        {
	id: '94A2705A-0A30-46AA-BFFB-1FBBEF99CC3A',
	name: 'menuitem4',
	text: '我收到的',
	type: 'MENUITEM',
	counterid: 'myunreadreportcnt',
	tooltip: '我收到的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/myreview.svg',
	textcls: '',
	appfunctag: 'AppFunc12',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem4',
},
        {
	id: 'E85CA8D0-F12A-4F35-BB0D-3491CEF8434B',
	name: 'menuitem5',
	text: '我提交的',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我提交的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/submit.svg',
	textcls: '',
	appfunctag: 'AppFunc11',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem5',
},
        {
	id: '167AFDA3-3CB5-480E-9DAB-D02B57266009',
	name: 'menuitem7',
	text: '月报（待阅）',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '月报（待阅）',
	expanded: false,
	separator: false,
	hidden: true,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'NeedLookMonthly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem7',
},
        {
	id: '61EC81D6-9972-4083-85B9-C6F75CBF9773',
	name: 'menuitem8',
	text: '周报(待阅)',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '周报(待阅)',
	expanded: false,
	separator: false,
	hidden: true,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc13',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem8',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ReportNewModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ReportNewModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ReportNewModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ReportNewModel;