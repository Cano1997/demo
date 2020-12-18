/**
 * WeeklyMyRecevied 部件模型
 *
 * @export
 * @class WeeklyMyReceviedModel
 */
export class WeeklyMyReceviedModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof WeeklyMyReceviedMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'ibz_weeklyname',
			},
			{
				name: 'reportto',
			},
			{
				name: 'workthisweek',
			},
			{
				name: 'plannextweek',
			},
			{
				name: 'date',
			},
			{
				name: 'ibz_weeklyid',
			},
			{
				name: 'mailto',
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
export default WeeklyMyReceviedModel;