/**
 * DailyReportSubmitMob 部件模型
 *
 * @export
 * @class DailyReportSubmitMobModel
 */
export class DailyReportSubmitMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof DailyReportSubmitMobMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'date',
			},
			{
				name: 'account',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'issubmit',
			},
			{
				name: 'ibz_dailyname',
			},
			{
				name: 'ibz_dailyid',
			},
			{
				name: 'reportto',
			},
			{
				name: 'srfkey',
				prop: 'ibzdailyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzdailyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzdaily',
				prop: 'ibzdailyid',
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
export default DailyReportSubmitMobModel;