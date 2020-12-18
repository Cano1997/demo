/**
 * MOB_ProjectLinkStory 部件模型
 *
 * @export
 * @class MOB_ProjectLinkStoryModel
 */
export class MOB_ProjectLinkStoryModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MOB_ProjectLinkStoryMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'bugcnt',
			},
			{
				name: 'title',
			},
			{
				name: 'begin',
			},
			{
				name: 'end',
			},
			{
				name: 'storycnt',
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
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'productplan',
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
export default MOB_ProjectLinkStoryModel;