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
				name: 'latestupdate',
			},
			{
				name: 'sys_update_logname',
			},
			{
				name: 'update',
			},
			{
				name: 'srfkey',
				prop: 'sysupdatelogid',
				dataType: 'GUID',
			},
			{
				name: 'srfmajortext',
				prop: 'sysupdatelogname',
				dataType: 'TEXT',
			},
			{
				name: 'sysupdatelog',
				prop: 'sysupdatelogid',
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