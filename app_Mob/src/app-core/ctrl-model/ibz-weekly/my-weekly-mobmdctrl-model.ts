/**
 * MyWeekly 部件模型
 *
 * @export
 * @class MyWeeklyModel
 */
export class MyWeeklyModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWeeklyMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'date',
			},
			{
				name: 'mailto',
			},
			{
				name: 'reportto',
			},
			{
				name: 'issubmit',
			},
			{
				name: 'ibz_weeklyid',
			},
			{
				name: 'planstomorrow',
				prop: 'plannextweek',
				dataType: 'HTMLTEXT',
			},
			{
				name: 'ibz_weeklyname',
			},
			{
				name: 'submittime',
			},
			{
				name: 'worktoday',
				prop: 'workthisweek',
				dataType: 'HTMLTEXT',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'account',
			},
			{
				name: 'srfkey',
				prop: 'ibzweeklyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzweeklyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzweekly',
				prop: 'ibzweeklyid',
				dataType: 'FONTKEY',
			},
			{
				name: 'size',
				prop: 'size'
			},
			{
				name: 'query',
				prop: 'query'
			},
			{
				name: 'page',
				prop: 'page'
			},
			{
				name: 'sort',
				prop: 'sort'
			},
			{
				name: 'srfparentdata',
				prop: 'srfparentdata'
			},
            // 工作流使用
			{
				name: 'processDefinitionKey',
				prop: 'processDefinitionKey',
			},
			{
				name: 'userTaskId',
				prop: 'userTaskId',
			},
		];
	}

}
// 默认导出
export default MyWeeklyModel;