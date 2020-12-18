import qs from 'qs';
import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

// 模拟数据
const mockDatas: Array<any> = [
];


//getwflink
mock.onGet(new RegExp(/^\/wfcore\/pms-app-mob\/subtasks\/[a-zA-Z0-9\-\;]+\/usertasks\/[a-zA-Z0-9\-\;]+\/ways$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: getwflink");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status,[
        {"sequenceFlowId":"dfdsfdsfdsfdsfds","sequenceFlowName":"同意",
         "taskId":"aaaaddddccccddddd","processDefinitionKey":"support-workorders-approve-v1",
         "processInstanceId":"ddlfldldfldsfds","refViewKey":""},
        {"sequenceFlowId":"ddssdfdfdfdfsfdf","sequenceFlowName":"不同意",
         "taskId":"aaaaddddccccddddd","processDefinitionKey":"support-workorders-approve-v1",
         "processInstanceId":"ddfdsldlfdlldsf","refViewKey":"workorder_ltform_editview"}
        ]];
});

// getwfstep
mock.onGet(new RegExp(/^\/wfcore\/pms-app-mob\/subtasks\/process-definitions-nodes$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: getwfstep");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, [
        {"userTaskId":"sddfddfd-dfdf-fdfd-fdf-dfdfd",
        "userTaskName":"待审",
        "cnt":0,
        "processDefinitionKey":"support-workorders-approve-v1",
        "processDefinitionName":"工单审批流程v1"
        },
        {"userTaskId":"sddfddfd-dfdf-fdfd-fdf-87927",
        "userTaskName":"待分配",
        "cnt":3,
        "processDefinitionKey":"support-workorders-approve-v1",
        "processDefinitionName":"工单审批流程v1"}
        ]];
});

// createBatch
mock.onPost(new RegExp(/^\/subtasks\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: createBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// updateBatch
mock.onPut(new RegExp(/^\/subtasks\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: updateBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// removeBatch
mock.onDelete(new RegExp(/^\/subtasks\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: removeBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});


// Select
mock.onGet(new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/select$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Select");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/select$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items);
    console.groupEnd();
    console.groupEnd();
    return [status, _items];
});
        
// Create
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Create");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas[0]);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas[0]];
});
        
// Update
mock.onPut(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Update");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

// GetDraft
mock.onGet(new RegExp(/^\/subtasks\/getdraft$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: GetDraft");
    console.table({url:config.url, method: config.method, data:config.data});
    // GetDraft
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// Activate
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/activate$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Activate");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/activate$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// AssignTo
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/assignto$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: AssignTo");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Cancel
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/cancel$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Cancel");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/cancel$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// CheckKey
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/checkkey$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: CheckKey");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Close
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/close$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Close");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/close$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// ConfirmStoryChange
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/confirmstorychange$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: ConfirmStoryChange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// DeleteEstimate
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/deleteestimate$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: DeleteEstimate");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/deleteestimate$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// EditEstimate
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/editestimate$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: EditEstimate");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/editestimate$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Finish
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/finish$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Finish");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/finish$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Pause
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/pause$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Pause");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/pause$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// RecordEstimate
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/recordestimate$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: RecordEstimate");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/recordestimate$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Restart
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/restart$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Restart");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/restart$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Save
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/save$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Save");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/save$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// SendMessage
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/sendmessage$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: SendMessage");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/sendmessage$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// SendMsgPreProcess
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/sendmsgpreprocess$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: SendMsgPreProcess");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/sendmsgpreprocess$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// Start
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/start$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Start");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/start$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// TaskFavorites
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/taskfavorites$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: TaskFavorites");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/taskfavorites$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
        
// TaskNFavorites
mock.onPost(new RegExp(/^\/subtasks\/?([a-zA-Z0-9\-\;]{0,35})\/tasknfavorites$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: TaskNFavorites");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})\/tasknfavorites$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});
    
// FetchAssignedToMyTask
mock.onGet(new RegExp(/^\/subtasks\/fetchassignedtomytask$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchAssignedToMyTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchAssignedToMyTask
mock.onGet(new RegExp(/^\/subtasks\/fetchassignedtomytask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchAssignedToMyTask");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchByModule
mock.onGet(new RegExp(/^\/subtasks\/fetchbymodule$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchByModule");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchByModule
mock.onGet(new RegExp(/^\/subtasks\/fetchbymodule(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchByModule");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchChildTask
mock.onGet(new RegExp(/^\/subtasks\/fetchchildtask$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchChildTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchChildTask
mock.onGet(new RegExp(/^\/subtasks\/fetchchildtask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchChildTask");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchDefault
mock.onGet(new RegExp(/^\/subtasks\/fetchdefault$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchDefault
mock.onGet(new RegExp(/^\/subtasks\/fetchdefault(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchDefaultRow
mock.onGet(new RegExp(/^\/subtasks\/fetchdefaultrow$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchDefaultRow");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchDefaultRow
mock.onGet(new RegExp(/^\/subtasks\/fetchdefaultrow(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchDefaultRow");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchMyFavorites
mock.onGet(new RegExp(/^\/subtasks\/fetchmyfavorites$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchMyFavorites");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchMyFavorites
mock.onGet(new RegExp(/^\/subtasks\/fetchmyfavorites(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchMyFavorites");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchProjectTASK
mock.onGet(new RegExp(/^\/subtasks\/fetchprojecttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchProjectTASK");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchProjectTASK
mock.onGet(new RegExp(/^\/subtasks\/fetchprojecttask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchProjectTASK");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchRootTask
mock.onGet(new RegExp(/^\/subtasks\/fetchroottask$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchRootTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchRootTask
mock.onGet(new RegExp(/^\/subtasks\/fetchroottask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchRootTask");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
    
// FetchTypeGroup
mock.onGet(new RegExp(/^\/subtasks\/fetchtypegroup$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchTypeGroup");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchTypeGroup
mock.onGet(new RegExp(/^\/subtasks\/fetchtypegroup(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: FetchTypeGroup");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现
// URI参数传递情况未实现


// Remove
mock.onDelete(new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Remove");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Get
mock.onGet(new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:subtask 方法: Get");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/subtasks\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});
