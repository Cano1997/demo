/**
 * MOB_ReleaseLink_LeftBug 部件模型
 *
 * @export
 * @class MOB_ReleaseLink_LeftBugModel
 */
export class MOB_ReleaseLink_LeftBugModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MOB_ReleaseLink_LeftBugMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'resolution',
			},
			{
				name: 'title',
			},
			{
				name: 'pri1',
				prop: 'pri',
				dataType: 'NSCODELIST',
			},
			{
				name: 'status',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'severity',
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
                name: 'n_title_like',
                prop: 'n_title_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_status_eq',
                prop: 'n_status_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_type_eq',
                prop: 'n_type_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_openedby_eq',
                prop: 'n_openedby_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_severity_eq',
                prop: 'n_severity_eq', 
                dataType: 'NSCODELIST',
            },
            {
                name: 'n_modulename_like',
                prop: 'n_modulename_like', 
                dataType: 'PICKUPTEXT',
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
export default MOB_ReleaseLink_LeftBugModel;