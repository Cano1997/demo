/**
 * MobTestTaskLinkCase 部件模型
 *
 * @export
 * @class MobTestTaskLinkCaseModel
 */
export class MobTestTaskLinkCaseModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MobTestTaskLinkCaseMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'name',
			},
			{
				name: 'begin',
			},
			{
				name: 'end',
			},
			{
				name: 'pri',
			},
			{
				name: 'status',
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
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'testtask',
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
export default MobTestTaskLinkCaseModel;