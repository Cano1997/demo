// 导出实体服务类
export { DBService } from './service/db-service';
export { EntityLogicBase } from './service/entity-logic-base';
export { EntityService } from './service/entity-service-base';
export { IndexedDBService } from './service/indexeddb-service';
// 导出部件服务
export { ControlServiceBase } from './control-service/control-service-base';
export { FormServiceBase } from './control-service/form-service-base';
export { GridServiceBase } from './control-service/grid-service-base';
export { MdServiceBase } from './control-service/md-service-base';
export { SearchFormServiceBase } from './control-service/search-form-service-base';
export { AppMenuServiceBase } from './control-service/app-menu-service-base';
export { TabExpServiceBase } from './control-service/tab-exp-service-base';
export { DashboardServiceBase } from './control-service/dashboard-service-base';
export { MultiEditViewPanelServiceBase } from './control-service/multi-edit-view-panel-service-base';
export { TabViewPanelServiceBase } from './control-service/tab-view-panel-service-base';
export { ListServiceBase } from './control-service/list-service-base';
export { ListExpBarServiceBase } from './control-service/list-exp-bar-service-base';
export { DataViewExpBarServiceBase } from './control-service/data-view-exp-bar-service-base';
export { WFExpBarServiceBase } from './control-service/wf-exp-bar-service-base';
export { PortletServiceBase } from './control-service/portlef-service-base';
export { DrBarServiceBase } from './control-service/dr-bar-service-base';
export { DrTabServiceBase } from './control-service/dr-tab-service-base';
export { TreeExpBarServiceBase } from './control-service/tree-exp-bar-service-base';
export { TreeViewServiceBase } from './control-service/tree-view-service-base';
export { DataViewServiceBase } from './control-service/data-view-service-base';
export { PickupViewPanelServiceBase } from './control-service/pickup-view-panel-service-base';
export { WizardPanelServiceBase } from './control-service/wizard-panel-service-base';
export { CalendarServiceBase } from './control-service/calendar-service-base';
export { ChartServiceBase } from './control-service/chart-service-base';
export { MapServiceBase } from './control-service/map-service-base';
export { ControlBase } from './widgets/ControlBase';
export { MOBMDCTRLBase } from './widgets/MOBMDCTRLBase';
export { FORMBase } from './widgets/FORMBase';
// 导出界面行为服务类
export { UILogicBase } from './ui-service/ui-logic-base';
export { WFUIActionBase } from './wf-ui-service/wf-ui-action-base';
// 导出代码表服务基类
export { CodeListService } from './service/code-list-base';
// 导出计数器服务基类
export { CounterService } from './counter/counter-service-base';
// 导出权限服务基类
export { AuthService } from './auth-service/auth-service-base';
// 导出第三方服务
export { ThirdPartyService } from './third-party-service/ThirdPartyService';
// 导入服务
import { appEntityServiceConstructor } from '@/app-core/service/app-entity-service-constructor';
import { counterServiceConstructor } from '@/app-core/counter/counter-service-constructor';
import { AppCommunicationsCenter } from './app-service/message-center/app-communications-center';
import { authServiceConstructor } from '@/app-core/auth-service/auth-service-constructor'
import { codeListServiceConstructor } from '@/app-core/code-list/code-list-service-constructor';
import { utilServiceConstructor } from '@/app-core/util-service/util-service-constructor';
// 全局挂载应用实体服务构造器
window['appEntityServiceConstructor'] = appEntityServiceConstructor;
// 全局挂载计数器服务构造器
window['counterServiceConstructor'] = counterServiceConstructor;
// 全局挂载权限服务构造器
window['authServiceConstructor'] = authServiceConstructor;
// 全局挂载代码表服务构造器
window['codeListServiceConstructor'] = codeListServiceConstructor;
// 全局挂载应用通讯中心
window['acc'] = AppCommunicationsCenter.getInstance();
// 全局挂载工具服务中心 
window['utilServiceConstructor'] = utilServiceConstructor;
/**
 * 注册组件
 */
export const iBizCore = {
    install(v: any, opt: any) {

    }
};