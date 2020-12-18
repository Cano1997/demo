/**
 * Mob_2622 部件模型
 *
 * @export
 * @class Mob_2622Model
 */
export class Mob_2622Model {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Mob_2622MdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'marker',
			},
			{
				name: 'date',
			},
			{
				name: 'buildname',
			},
			{
				name: 'status',
			},
			{
				name: 'name',
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
				name: 'build',
				prop: 'build',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'release',
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
export default Mob_2622Model;