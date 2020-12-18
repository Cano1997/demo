/**
 * MyCompleteTaskMob 部件模型
 *
 * @export
 * @class MyCompleteTaskMobModel
 */
export class MyCompleteTaskMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyCompleteTaskMobMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'estimate',
			},
			{
				name: 'id',
			},
			{
				name: 'productname',
			},
			{
				name: 'consumed',
			},
			{
				name: 'finishedby',
			},
			{
				name: 'deadline',
			},
			{
				name: 'pri',
			},
			{
				name: 'projectname',
			},
			{
				name: 'name',
			},
			{
				name: 'left',
			},
			{
				name: 'status',
			},
			{
				name: 'assignedto',
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
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'task',
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
export default MyCompleteTaskMobModel;