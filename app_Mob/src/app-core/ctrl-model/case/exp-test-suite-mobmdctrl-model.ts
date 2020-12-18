/**
 * Exp_TestSuite 部件模型
 *
 * @export
 * @class Exp_TestSuiteModel
 */
export class Exp_TestSuiteModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Exp_TestSuiteMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'type',
			},
			{
				name: 'pri',
			},
			{
				name: 'status1',
			},
			{
				name: 'title',
			},
			{
				name: 'lastrunresult',
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
				name: 'fromcaseid',
				prop: 'fromcaseid',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'lib',
				prop: 'lib',
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
				name: 'case',
				prop: 'id',
				dataType: 'FONTKEY',
			},
            {
                name: 'n_title_like',
                prop: 'n_title_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_type_eq',
                prop: 'n_type_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_status_eq',
                prop: 'n_status_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_modulename_eq',
                prop: 'n_modulename_eq', 
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
export default Exp_TestSuiteModel;