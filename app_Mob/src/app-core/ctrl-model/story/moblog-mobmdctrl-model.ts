/**
 * MOBLog 部件模型
 *
 * @export
 * @class MOBLogModel
 */
export class MOBLogModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MOBLogMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'stage',
			},
			{
				name: 'pri',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'status',
			},
			{
				name: 'title',
			},
			{
				name: 'spec',
			},
			{
				name: 'isfavorites',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'duplicatestory',
				prop: 'duplicatestory',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'tobug',
				prop: 'tobug',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'story',
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
export default MOBLogModel;