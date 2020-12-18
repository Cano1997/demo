/**
 * MySubmit 部件模型
 *
 * @export
 * @class MySubmitModel
 */
export class MySubmitModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MySubmitMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'workthismonth',
			},
			{
				name: 'account',
			},
			{
				name: 'plansnextmonth',
			},
			{
				name: 'reportto',
			},
			{
				name: 'ibz_monthlyname',
			},
			{
				name: 'date',
			},
			{
				name: 'srfkey',
				prop: 'ibzmonthlyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzmonthlyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzmonthly',
				prop: 'ibzmonthlyid',
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
export default MySubmitModel;