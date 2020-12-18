/**
 * ProductStatusPieMob 部件模型
 *
 * @export
 * @class ProductStatusPieMobModel
 */
export class ProductStatusPieMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductStatusPieMobChartMode
	 */
	public getDataItems(): any[] {
		return [
      {
        name:'query',
        prop:'query'
      },
		]
	}

}
// 默认导出
export default ProductStatusPieMobModel;