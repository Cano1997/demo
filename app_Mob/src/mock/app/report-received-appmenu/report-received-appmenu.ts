import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'
const Random = Mock.Random;

// 获取应用数据
mock.onGet('v7/report-receivedappmenu').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, {
        name: 'db_appmenu3_appmenu',
        items:  [
            {
	id: '32249EEB-9F47-415F-8AFF-069245A41591',
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
	appfunctag: 'DailyReportReceived',
	resourcetag: '',
},
            {
	id: '9A9C545B-6238-4A80-B880-818DF0EB44C9',
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
	appfunctag: 'AppFunc10',
	resourcetag: '',
},
            {
	id: '91B79BE7-7D36-40B6-8742-DBB11D7DB970',
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
	appfunctag: 'MyReceivedMonthly',
	resourcetag: '',
},
        ],
    }];
});

