/**
 * TrendsMob 部件模型
 *
 * @export
 * @class TrendsMobModel
 */
export class TrendsMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TrendsMobMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'objecttype',
			},
			{
				name: 'read',
			},
			{
				name: 'project',
			},
			{
				name: 'actionmanner',
			},
			{
				name: 'actor',
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
				name: 'date',
			},
			{
				name: 'date1',
			},
			{
				name: 'objectid',
			},
			{
				name: 'product',
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
export default TrendsMobModel;