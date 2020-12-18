/**
 * MOBY 部件模型
 *
 * @export
 * @class MOBYModel
 */
export class MOBYModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MOBYMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'upfeatures',
			},
			{
				name: 'type',
			},
			{
				name: 'featuresdesc',
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
export default MOBYModel;