/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export class MobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MobMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'estimate',
			},
			{
				name: 'account',
			},
			{
				name: 'type',
			},
			{
				name: 'total',
			},
			{
				name: 'role',
			},
			{
				name: 'consumed',
			},
			{
				name: 'hours',
			},
			{
				name: 'id',
			},
			{
				name: 'days',
			},
			{
				name: 'left',
			},
			{
				name: 'join',
			},
			{
				name: 'root',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'account',
				dataType: 'TEXT',
			},
			{
				name: 'projectteam',
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
export default MobModel;