/**
 * MobLog 部件模型
 *
 * @export
 * @class MobLogModel
 */
export class MobLogModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MobLogMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'builder',
			},
			{
				name: 'productname',
			},
			{
				name: 'name',
			},
			{
				name: 'date',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'build',
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
export default MobLogModel;