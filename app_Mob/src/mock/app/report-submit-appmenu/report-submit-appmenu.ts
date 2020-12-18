import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'
const Random = Mock.Random;

// 获取应用数据
mock.onGet('v7/report-submitappmenu').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, {
        name: 'db_appmenu4_appmenu',
        items:  [
            {
	id: 'CEAC27A3-3546-49F3-87B6-51F70DCE0B0B',
	name: 'menuitem1',
	text: '日报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '日报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'DailyReportSubmit',
	resourcetag: '',
},
            {
	id: 'A4DA2113-FBCE-4982-9F33-5699204BC413',
	name: 'menuitem2',
	text: '周报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '周报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
            {
	id: '40BC2108-4445-48BA-9A55-178C9F41B4BB',
	name: 'menuitem3',
	text: '月报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '月报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'MySubmitMonthly',
	resourcetag: '',
},
        ],
    }];
});

