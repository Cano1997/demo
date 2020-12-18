/**
 * MyReportly 部件模型
 *
 * @export
 * @class MyReportlyModel
 */
export class MyReportlyModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyReportlyMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'submittime',
			},
			{
				name: 'account',
			},
			{
				name: 'reportto',
			},
			{
				name: 'planstomorrow',
				prop: 'content',
				dataType: 'HTMLTEXT',
			},
			{
				name: 'ibz_reportlyname',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'date',
			},
			{
				name: 'srfkey',
				prop: 'ibzreportlyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzreportlyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzreportly',
				prop: 'ibzreportlyid',
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
export default MyReportlyModel;