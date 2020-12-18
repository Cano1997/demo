/**
 * TrendsMobMore 部件模型
 *
 * @export
 * @class TrendsMobMoreModel
 */
export class TrendsMobMoreModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TrendsMobMoreMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'product',
			},
			{
				name: 'actionmanner',
			},
			{
				name: 'objecttype',
			},
			{
				name: 'objectid',
			},
			{
				name: 'date',
			},
			{
				name: 'date1',
			},
			{
				name: 'actor',
			},
			{
				name: 'read',
			},
			{
				name: 'project',
			},
			{
				name: 'id',
			},
			{
				name: 'actions',
				prop: 'action',
				dataType: 'SSCODELIST',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'comment',
				dataType: 'LONGTEXT',
			},
			{
				name: 'action',
				prop: 'id',
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
export default TrendsMobMoreModel;