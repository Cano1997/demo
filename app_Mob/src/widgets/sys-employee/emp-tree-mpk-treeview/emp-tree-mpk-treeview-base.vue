<template>
    <div class="app-mob-treeview sysemployee-tree ">
        <div class="treeNav">
            <template v-for="(item,index) in treeNav">
            <ion-label  :key="item.id" class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="index+1 < treeNav.length? 'treeNav-active':'' " @click="nav_click(item)">{{item.text}}</ion-label>
            <span class="tree-span" :key="item.id+'span'" v-if="index+1 < treeNav.length">></span>
            </template>
        </div>
        <div class="tree-partition" v-if="valueNodes.length > 0" ></div>
        <ion-list>
        <template v-for="(item ,index) in rootNodes">
            <ion-item  :key="index" @click="click_node(item)">
                <ion-label>{{item.text}}</ion-label>
                <ion-icon class="tree-icon" slot="end" name="chevron-forward-outline"></ion-icon>
            </ion-item>
        </template>
       </ion-list>
        <div class="tree-partition tree-partition-bigger" v-if="rootNodes.length > 0"></div>
        <!-- 树视图 -->
        <ion-list v-if="viewType == 'DEMOBTREEVIEW'">
        <template v-for="item in valueNodes">
            <ion-item :key="item.srfkey">
                <ion-label>{{item.text}}</ion-label>
            </ion-item>
        </template>
       </ion-list>
       <!-- 树多选 -->
        <ion-list v-else-if="viewType == 'DEMOBPICKUPTREEVIEW' && !isSingleSelect">
        <template v-for="item in valueNodes">
            <ion-item :key="item.srfkey">
                <ion-checkbox color="secondary" v-if="viewType == 'DEMOBPICKUPTREEVIEW' && !isSingleSelect" :ref="item.srfkey+'checkbox'"  :checked="item.selected" :value="item.srfkey" slot="end" @ionChange="onChecked"></ion-checkbox>
                <ion-label class="tree_item_label">
                    <template v-if="item.strIcon != 'default_text'">
                        <img class="tree_item_img" v-if="item.strIcon" :src="item.strIcon" />
                        <div v-else class="tree_item_index_text">{{item.text.substring(0,1)}}</div>
                    </template>
                    {{item.text}}
                </ion-label>
            </ion-item>
        </template>
       </ion-list>
       <!-- 树单选 -->
        <ion-radio-group v-else-if="viewType == 'DEMOBPICKUPTREEVIEW' && isSingleSelect" :value="selectedValue" >
            <template v-for="item in valueNodes">
                <ion-item  :key="item.srfkey"   @click="onSimpleSelChange(item)">
                    <ion-label class="tree_item_label">
                        <template v-if="item.strIcon != 'default_text'">
                            <img class="tree_item_img" v-if="item.strIcon" :src="item.strIcon" />
                            <div v-else class="tree_item_index_text">{{item.text.substring(0,1)}}</div>
                        </template>
                        {{item.text}}
                    </ion-label>
                    <ion-radio slot="end" :checked="item.selected" :value="item.srfkey"></ion-radio>
                </ion-item>
            </template>
        </ion-radio-group>
        <app-mob-context-menu ref="contextmenu">
         <div slot="content" >
        </div>
        </app-mob-context-menu>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysEmployeeService from '@/app-core/service/sys-employee/sys-employee-service';
import EmpTreeMpkService from '@/app-core/ctrl-service/sys-employee/emp-tree-mpk-treeview-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';

import { Util } from '@ibiz-core/utils'


@Component({
    components: { }
})
export default class EmpTreeMpkBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof EmpTreeMpk
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof EmpTreeMpk
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof EmpTreeMpk
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof EmpTreeMpk
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof EmpTreeMpk
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof EmpTreeMpk
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof EmpTreeMpk
     */
    protected getControlType(): string {
        return 'TREEVIEW'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof EmpTreeMpk
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  EmpTreeMpkBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {EmpTreeMpkService}
     * @memberof EmpTreeMpk
     */
    protected service: EmpTreeMpkService = new EmpTreeMpkService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof EmpTreeMpk
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof EmpTreeMpkBase
     */  
    public deUIService:SysEmployeeUIService = new SysEmployeeUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof EmpTreeMpk
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 视图类型
     *
     * @type {string}
     * @memberof Testtree
     */
    @Prop() protected viewType!: string;
    
    /**
     * 树视图导航数组名称
     *
     * @type {string[]}
     * @memberof EmpTreeMpkBase
     */
    public treeNav :any= [{id:"#",text:"人员（多选）"}];

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof EmpTreeMpkBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof EmpTreeMpkBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof EmpTreeMpkBase
     */
    @Prop({ default: true }) public isSingleSelect!: boolean;

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof EmpTreeMpkBase
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 枝干节点是否可用（具有数据能力，可抛出）
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop({default:true}) public isBranchAvailable!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof EmpTreeMpkBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof EmpTreeMpkBase
     */
    public inited: boolean = false;

    /**
     * 已选中数据集合
     *
     * @type {*}
     * @memberof EmpTreeMpkBase
     */
    public selectedNodes: any = [];

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof EmpTreeMpkBase
     */
    public currentselectedNode: any = {};

    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public selectedData?: string;

    /**
     * 节点点击加载
     *
     * @memberof EmpTreeMpkBase
     */
    public click_node(data:any){
        if(this.treeNav[this.treeNav.length -1].id == data.id){
            return
        }
        this.treeNav.push(data);
        this.load({data:data});
    }

    /**
     * 选中值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof EmpTreeMpkBase
     */
    @Watch('selectedData')
    public onValueChange(newVal: any, oldVal: any) {
        this.echoselectedNodes = newVal ? this.isSingleSelect ? JSON.parse(newVal)[0] : JSON.parse(newVal) : [];
        this.selectedNodes = [];
        if(this.echoselectedNodes.length > 0){
            let AllnodesObj = (this.$refs.treeexpbar_tree as any).store.nodesMap;
            let AllnodesArray : any[] = [];
            for (const key in AllnodesObj) {
              if (AllnodesObj.hasOwnProperty(key)) {
                AllnodesArray.push(AllnodesObj[key].data);
              }
            }
            this.setDefaultSelection(AllnodesArray);
        }
    }

    /**
     * 备份树节点上下文菜单
     * 
     * @type any
     * @memberof MainTreeBase
     */
    public copyActionModel:any;

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof EmpTreeMpkBase
     */
     public actionModel: any = {
    }

    /**
     * 显示上下文菜单
     * 
     * @param data 节点数据
     * @param event 事件源
     * @memberof DocLibTreeProductMobBase
     */
    public showContext(data:any,event:any){
        let _this:any = this;
        this.copyActionModel = {};
        const tags: string[] = data.id.split(';');
        Object.values(this.actionModel).forEach((item:any) =>{
            if(Object.is(item.nodeOwner,tags[0])){
                this.copyActionModel[item.name] = item;
            }
        })
        if(Object.keys(this.copyActionModel).length === 0){
            return;
        }
        this.computeNodeState(data,data.nodeType,data.appEntityName).then((result:any) => {
            let flag:boolean = false;
            if(Object.values(result).length>0){
                flag =Object.values(result).some((item:any) =>{
                    return item.visabled === true;
                })
            }
            if(flag){
                (_this.$refs.contextmenu as any).openContextMenu();
            }
        });
    }

    /**
     * 计算节点右键权限
     *
     * @param {*} node 节点数据
     * @param {*} nodeType 节点类型
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof EmpTreeMpkBase
     */
    public async computeNodeState(node:any,nodeType:string,appEntityName:string) {
        if(Object.is(nodeType,"STATIC")){
            return this.copyActionModel;
        }
        let service:any = await this.appEntityService.getService(appEntityName);
        if(this.copyActionModel && Object.keys(this.copyActionModel).length > 0) {
            if(service['Get'] && service['Get'] instanceof Function){
                let tempContext:any = Util.deepCopy(this.context);
                tempContext[appEntityName] = node.srfkey;
                let targetData = await service.Get(tempContext,{}, false);
                let uiservice:any = await this.globaluiservice.getService(appEntityName+'_ui_action');
                this.$viewTool.calcActionItemAuthState(targetData.data,this.copyActionModel,uiservice);
                return this.copyActionModel;
            }else{
                console.warn("获取数据异常");
                return this.copyActionModel;
            }
        }
    }

    /**
     * 导航点击行为
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof EmpTreeMpkBase
     */
    public nav_click(item:any) {
        if(item.id == this.treeNav[this.treeNav.length-1].id){
            return
        }
        const count = this.treeNav.findIndex((i:any) => item.id === i.id) + 1;
        this.treeNav.splice(count,this.treeNav.length- count);
        this.load({data:item});
    }

    /**
     * 节点数组
     *
     * @memberof EmpTreeMpkBase
     */
    public rootNodes :any= [];

    /**
     * 节点值数组
     *
     * @memberof EmpTreeMpkBase
     */
    public valueNodes :any= [];

    /**
     * 解析节点数据
     *
     * @param {*} nodes
     * @memberof EmpTreeMpkBase
     */
    public parseNodes(nodes:any) {
        this.rootNodes = [];
        this.valueNodes = [];
        for (let index = 0; index < nodes.length; index++) {
            const item = nodes[index];
            if(!item.leaf){
                this.rootNodes.push(item);
            }else{
                this.backfill(item);
                this.valueNodes.push(item);
            }
        }
        this.$forceUpdate();
    }

    /**
     * 回填已选择树节点
     *
     * @param {*} nodes
     * @memberof EmpTreeMpkBase
     */
    public backfill(item:any){
        let ele :any= this.$refs[item.srfkey+'checkbox'];
        if(this.selectedNodes.findIndex((temp:any)=>{return temp.srfkey == item.srfkey}) > -1){
            item.selected = true;
            if(ele && ele[0]){
                ele[0].ariaChecked = true;
            }
        }else{
            item.selected = false;
            if(ele && ele[0]){
                ele[0].ariaChecked = false;
            }
        }
    }

    /**
     * 回显选中数据集合
     *
     * @type {*}
     * @memberof EmpTreeMpkBase
     */
    public echoselectedNodes:any[] = this.selectedData ? ( this.isSingleSelect ? [JSON.parse(this.selectedData)[0]] : JSON.parse(this.selectedData)) : [];

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof EmpTreeMpkBase
     */
    public srfnodefilter: string = '';

    /**
     * 默认输出图标
     *
     * @type {boolean}
     * @memberof EmpTreeMpkBase
     */
    public isOutputIconDefault: boolean = true;

    /**
     * 树数据
     *
     * @type {any[]}
     * @memberof EmpTreeMpkBase
     */
    @Provide()
    public nodes: any[] = [];  

    /**
     * 数据展开主键
     *
     * @type {string[]}
     * @memberof EmpTreeMpkBase
     */
    @Provide()
    public expandedKeys: string[] = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof EmpTreeMpkBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 选中数据变更事件
     *
     * @public
     * @param {*} data
     * @param {*} data 当前节点对应传入对象
     * @param {*} checkedState 树目前选中状态对象
     * @memberof EmpTreeMpkBase
     */
    public onCheck(data: any, checkedState: any) {
        // 处理多选数据
        if(!this.isSingleSelect){
            let leafNodes = checkedState.checkedNodes.filter((item:any) => item.leaf);
            this.selectedNodes = JSON.parse(JSON.stringify(leafNodes));
            this.$emit('selectionchange', this.selectedNodes);
        }
    }

    /**
     * 选中数据变更事件
     *
     * @public
     * @param {*} data 节点对应传入对象
     * @param {*} node 节点对应node对象
     * @memberof EmpTreeMpkBase
     */
    public selectionChange(data: any, node: any) {
        // 禁用项处理
        if (data.disabled){
            node.isCurrent = false;
            return;
        }
        // 只处理最底层子节点
        if(this.isBranchAvailable || data.leaf){
            this.currentselectedNode = JSON.parse(JSON.stringify(data));
            // 单选直接替换
            if(this.isSingleSelect){
                this.selectedNodes = [this.currentselectedNode];
                this.$emit('selectionchange', this.selectedNodes);
            }
            // 多选用check方法
        }
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof EmpTreeMpkBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof EmpTreeMpkBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.inited = false;
                    this.$nextTick(() => {
                        this.inited = true;
                    });
                    this.load();
                }
                if (Object.is('filter', action)) {
                    this.srfnodefilter  = data.srfnodefilter;
                    this.refresh_all();
                }
                if (Object.is('refresh_parent', action)) {
                    this.refresh_parent();
                }
                if (Object.is('quicksearch', action)) {
                    this.webLoad(data);
                }
                if (Object.is('refresh', action)) {
                    this.selectedNodes = data;
                    this.parseNodes(this.nodes);
                    this.parseNodes(this.nodes);
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"SysEmployee")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * 对树节点进行筛选操作
     * @memberof OrderTree
     */
    public filterNode(value:any, data:any) {
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
    }


    /**
     * vue 生命周期
     *
     * @memberof EmpTreeMpkBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof EmpTreeMpkBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新数据
     *
     * @memberof EmpTreeMpkBase
     */
    public refresh_all(): void {
        this.inited = false;
        this.$nextTick(() => {
            this.inited = true;
        });
    }

    /**
     * 刷新父节点
     *
     * @memberof EmpTreeMpkBase
     */
    public refresh_parent(): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const tree: any = this.$refs.tree;
        const node: any = tree.getNode(this.currentselectedNode.id);
        if (!node || !node.parent) {
            return;
        }
        let curNode:any = {}; 
        const { parent: _parent } = node;
        curNode = Util.deepObjectMerge(curNode,_parent);
        let tempContext:any = {};
        if(curNode.data && curNode.data.srfappctx){
            Object.assign(tempContext,curNode.data.srfappctx);
        }else{
            Object.assign(tempContext,this.context);
        }
        const id: string = _parent.key ? _parent.key : '#';
        const param: any = { srfnodeid: id };
        this.refresh_node(tempContext,param, true);
    }

    /**
     * 数据加载
     *
     * @param {*} node
     * @memberof EmpTreeMpkBase
     */
    public load(node: any = {}) {
        if (node.data && node.data.children) {
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        if(tempViewParams.selectedData){
            delete tempViewParams.selectedData;
        }
        let curNode:any = {}; 
        curNode = Util.deepObjectMerge(curNode,node);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode.data && curNode.data.srfparentdename){
            Object.assign(tempContext,{srfparentdename:curNode.data.srfparentdename});
            Object.assign(tempViewParams,{srfparentdename:curNode.data.srfparentdename});
        }
        if(curNode.data && curNode.data.srfparentkey){
            Object.assign(tempContext,{srfparentkey:curNode.data.srfparentkey});
            Object.assign(tempViewParams,{srfparentkey:curNode.data.srfparentkey});
        }
        Object.assign(params,{viewparams:tempViewParams});
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$notice.error(response.info);
                return;
            }
            const _items = response.data;
            this.formatExpanded(_items);
            this.nodes = [..._items];
            this.parseNodes(this.nodes);
            let isRoot = Object.is(node.level,0);
            let isSelectedAll = node.checked;
            this.setDefaultSelection(_items, isRoot, isSelectedAll);
            this.$emit("load", _items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.info);
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof EmpTreeMpkBase
     */
    public computecurNodeContext(curNode:any){
        let tempContext:any = {};
        if(curNode && curNode.data && curNode.data.srfappctx){
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        }else{
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof EmpTreeMpkBase
     */
    public refresh(args: any[]): void {
        this.refresh_all();
    }

    /**
     * 刷新节点
     *
     * @public
     * @param {*} [curContext] 当前节点上下文
     * @param {*} [arg={}] 当前节点附加参数
     * @param {boolean} parentnode 是否是刷新父节点
     * @memberof EmpTreeMpkBase
     */
    public refresh_node(curContext:any,arg: any = {}, parentnode: boolean): void {
        const { srfnodeid: id } = arg;
        Object.assign(arg,{viewparams:this.viewparams});
        const get: Promise<any> = this.service.getNodes(JSON.parse(JSON.stringify(this.context)),arg);
        get.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$notice.error(response.info);
                return;
            }
            const _items = [...response.data];
            this.formatExpanded(_items);
            const tree: any = this.$refs.tree;
            tree.updateKeyChildren(id, _items);
            if (parentnode) {
                this.currentselectedNode = {};
            }
            this.setDefaultSelection(_items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.info);
        });
    }

    /**
     * 默认展开节点
     *
     * @public
     * @param {any[]} items
     * @returns {any[]}
     * @memberof EmpTreeMpkBase
     */
    public formatExpanded(items: any[]): any[] {
        const data: any[] = [];
        items.forEach((item) => {
            if (item.expanded || (item.children && item.children.length > 0)) {
                this.expandedKeys.push(item.id);
            }
        });
        return data;
    }

    /**
     * 设置默认选中,回显数项，选中所有子节点
     *
     * @param {any[]} items 当前节点所有子节点集合
     * @param {boolean} isRoot 是否是加载根节点
     * @param {boolean} isSelectedAll 是否选中所有子节点
     * @memberof EmpTreeMpkBase
     */
    public setDefaultSelection(items: any[], isRoot: boolean = false, isSelectedAll: boolean = false): void {
        if(items.length == 0){
            return;
        }
        let defaultData: any;
        // 导航中选中第一条配置的默认选中,没有选中第一条
        if(this.isSelectFirstDefault){
            if(this.isSingleSelect){
                let index = items.findIndex((item: any) => item.selected);
                if(index === -1) {
                    if(isRoot){
                        index = 0;
                    }else{
                        return;
                    }
                }
                defaultData = items[index];
                this.setTreeNodeHighLight(defaultData);
                this.currentselectedNode = JSON.parse(JSON.stringify(defaultData));
                if(this.isBranchAvailable || defaultData.leaf){
                    this.selectedNodes = [this.currentselectedNode];
                    this.$emit('selectionchange', this.selectedNodes);
                } 
            }
        }
        // 已选数据的回显
        if(this.echoselectedNodes && this.echoselectedNodes.length > 0){
            let checkedNodes = items.filter((item:any)=>{
                return this.echoselectedNodes.some((val:any)=> {
                    if(Object.is(item.srfkey,val.srfkey) && Object.is(item.srfmajortext,val.srfmajortext)){
                        val.used = true;
                        return true;
                    }
                });
            });
            if(checkedNodes.length > 0){
                this.echoselectedNodes = this.echoselectedNodes.filter((item:any)=> !item.used);
                // 父节点选中时，不需要执行这段，会选中所有子节点
                if(!isSelectedAll){
                    if(this.isSingleSelect){
                        this.setTreeNodeHighLight(checkedNodes[0]);
                        this.currentselectedNode = JSON.parse(JSON.stringify(checkedNodes[0]));
                        this.selectedNodes = [this.currentselectedNode];
                    }else{
                        this.selectedNodes = this.selectedNodes.concat(checkedNodes);
                        const tree: any = this.$refs.treeexpbar_tree;
                        tree.setCheckedNodes(this.selectedNodes);
                    }
                }
            }
        }
        // 父节点选中时，选中所有子节点
        if(isSelectedAll){
            let leafNodes = items.filter((item:any) => item.leaf);
            this.selectedNodes = this.selectedNodes.concat(leafNodes);
            this.$emit('selectionchange', this.selectedNodes);
        }
    }   

    /**
     * 设置选中高亮
     *
     * @param {*} data
     * @memberof EmpTreeMpkBase
     */
    public setTreeNodeHighLight(data: any): void {
        const tree: any = this.$refs.tree;
        tree.setCurrentKey(data.id);
    }

    /**
     * 执行默认界面行为
     *
     * @param {*} node
     * @memberof EmpTreeMpkBase
     */
    public doDefaultAction(node: any) {
        if (node && node.data) {
            const data: any = node.data;
            const tags: string[] = data.id.split(';');
        }
        this.$emit('nodedblclick', this.selectedNodes);
    }
    
    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof EmpTreeMpk
    */
    public selectedValue:string = ""; 

    /**
     * 单选点击行为
     *
     * @param {*} item
     * @memberof EmpTreeMpkBase
     */
    public onSimpleSelChange(item:any){
        this.$emit('selectchange', [item]);
        this.selectedValue = item.srfkey;
    }

    /**
     * 多选点击行为
     *
     * @param {*} data
     * @memberof EmpTreeMpkBase
     */
    public onChecked(data:any){
        let { detail } = data;
        if (!detail) {
            return;
        }
        let { value } = detail;
        for (let index = 0; index < this.valueNodes.length; index++) {
            const item = this.valueNodes[index];
            if (Object.is(item.srfkey, value)) {
                if (detail.checked) {
                    this.selectedNodes.push(this.valueNodes[index]);
                } else {
                    let i = this.selectedNodes.findIndex((i: any) => i.srfkey === item.srfkey)
                    if(i>-1){
                        this.selectedNodes.splice(i, 1)
                    }
                }
            }
        }
        this.$emit('selectchange', this.selectedNodes);
    }

    /**
     * 激活节点
     *
     * @memberof EmpTreeMpkBase
     */
    public activeNode = "";

    /**
     * 节点长按
     *
     * @memberof EmpTreeMpkBase
     */
    public node_touch(item:any){
        this.activeNode  = item.id.split(';')[0];
        this.currentselectedNode = Object.assign(JSON.parse(JSON.stringify(item.curData)),item);
        this.showContext(item,{})
    }

    /**
     * 树前端搜索
     *
     * @memberof EmpTreeMpkBase
     */
    public webLoad(query:string){
        let reNodes:any = [];
        for (let index = 0; index < this.nodes.length; index++) {
            const node = this.nodes[index];
            if(node.srfmajortext.indexOf(query) != -1){
                reNodes.push(node);
            }
        }
        this.parseNodes(reNodes);
    }

    /**
     * 上下文菜单点击
     */
    public context_menu_click() {
        (this.$refs.contextmenu as any).closeContextMenu();
    }

    /**
     * 生命周期
     *
     * @memberof EmpTreeMpkBase
     */
    public mounted() {
        if(this.viewparams.selectedData){
            this.selectedNodes = this.viewparams.selectedData;
        }
    }
}
</script>

<style lang='less'>
@import './emp-tree-mpk-treeview.less';
</style>