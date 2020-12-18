/**
 * Mob_Plan 部件模型
 *
 * @export
 * @class Mob_PlanModel
 */
export class Mob_PlanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Mob_PlanMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'resolution',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'pri',
			},
			{
				name: 'status',
			},
			{
				name: 'title',
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
				name: 'tostory',
				prop: 'tostory',
				dataType: 'PICKUP',
			},
			{
				name: 'entry',
				prop: 'entry',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'totask',
				prop: 'totask',
				dataType: 'PICKUP',
			},
			{
				name: 'plan',
				prop: 'plan',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'duplicatebug',
				prop: 'duplicatebug',
				dataType: 'PICKUP',
			},
			{
				name: 'repo',
				prop: 'repo',
				dataType: 'PICKUP',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'case',
				prop: 'ibizcase',
				dataType: 'PICKUP',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'task',
				prop: 'task',
				dataType: 'PICKUP',
			},
			{
				name: 'testtask',
				prop: 'testtask',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'bug',
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
export default Mob_PlanModel;