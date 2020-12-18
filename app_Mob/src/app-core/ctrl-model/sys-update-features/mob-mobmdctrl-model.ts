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
				name: 'type',
			},
			{
				name: 'featuresdesc',
			},
			{
				name: 'upfeatures',
			},
			{
				name: 'srfkey',
				prop: 'sysupdatefeaturesid',
				dataType: 'GUID',
			},
			{
				name: 'srfmajortext',
				prop: 'sysupdatefeaturesname',
				dataType: 'TEXT',
			},
			{
				name: 'sys_update_logid',
				prop: 'sysupdatelogid',
				dataType: 'PICKUP',
			},
			{
				name: 'sysupdatefeatures',
				prop: 'sysupdatefeaturesid',
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