/**
 * UserLoginPosition 部件模型
 *
 * @export
 * @class UserLoginPositionModel
 */
export class UserLoginPositionModel {

	/**
	 * 地图项类型
	 *
	 * @returns {any[]}
	 * @memberof UserLoginPositionMapMode
	 */
	public itemType: string = "";

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof UserLoginPositionMapMode
	 */
	public getDataItems(): any[] {
        let dataItems: any = [
            {
                name: 'itemType',
            },
        ];
        switch (this.itemType) {
            case "test":
                dataItems = 
                    [
                        ...dataItems,
                        {
                            name: 'longitude',
                            prop: 'objectid'
                        },
                        {
                            name: 'latitude',
                            prop: 'actionmanner'
                        },
                        {
                            name: 'color',
                            prop: ''
                        },
                        {
                            name: 'content',
                            prop: ''
                        },
                        {
                            name: 'group',
                            prop: ''
                        },
                        {
                            name: 'icon',
                            prop: ''
                        },
                    ];
                break;
        }
        return dataItems;
	}

}
// 默认导出
export default UserLoginPositionModel;