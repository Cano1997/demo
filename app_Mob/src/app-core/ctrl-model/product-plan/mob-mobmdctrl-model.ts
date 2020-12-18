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
				name: 'end',
			},
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
                name: 'n_title_like',
                prop: 'n_title_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_begin_gtandeq',
                prop: 'n_begin_gtandeq', 
                dataType: 'DATE',
            },
            {
                name: 'n_end_ltandeq',
                prop: 'n_end_ltandeq', 
                dataType: 'DATE',
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