<template>
<div class="app-mob-meditviewpanel ibzprojectteamnest-meditviewpanel ">
<div class="app-medit-view-panel">
    <div v-for="item in items" :key="item.id" class="app-medit-view-panel-card">
        <ion-card>
          <div class="meditviewpanel_delete_icon_container" ><ion-icon @click="deleteItem(item)" class="meditviewpanel_delete_icon" name="close-circle-outline"></ion-icon></div>
          <ion-card-content>
            <project-team-project-team-mob-edit-view 
              class="viewcontainer2"
              viewDefaultUsage="includedView"
              :_context="toString(item.viewdata)"
              :_viewparam="toString(item.viewparam)"
              :panelState="panelState"
              :showTitle="false"
              :isChildView="true"
              @viewdataschange="viewDataChange"
              @viewload="viewload"
              @viewdirty="viewdirty(item,$event)"
            ></project-team-project-team-mob-edit-view >
          </ion-card-content>
        </ion-card>
    </div>
    <div @click="handleAdd" class="meditviewpanel_add_btn"><ion-icon name="add"></ion-icon></div>
</div>
</div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzprojectteamnestService from '@/app-core/service/ibzprojectteamnest/ibzprojectteamnest-service';
import ProjectTeamMobService from '@/app-core/ctrl-service/ibzprojectteamnest/project-team-mob-multieditviewpanel-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzprojectteamnestUIService from '@/ui-service/ibzprojectteamnest/ibzprojectteamnest-ui-action';



@Component({
    components: { }
})
export default class ProjectTeamMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ProjectTeamMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProjectTeamMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProjectTeamMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ProjectTeamMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ProjectTeamMob
     */
    protected getControlType(): string {
        return 'MULTIEDITVIEWPANEL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ProjectTeamMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ProjectTeamMobBase
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
     * @type {ProjectTeamMobService}
     * @memberof ProjectTeamMob
     */
    protected service: ProjectTeamMobService = new ProjectTeamMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzprojectteamnestService}
     * @memberof ProjectTeamMob
     */
    protected appEntityService: IbzprojectteamnestService = new IbzprojectteamnestService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzprojectteamnestUIService}
     * @memberof ProjectTeamMobBase
     */  
    public deUIService:IbzprojectteamnestUIService = new IbzprojectteamnestUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProjectTeamMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProjectTeamMob
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProjectTeamMob
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof ProjectTeamMob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    @Prop() protected createAction!: string;

    /**
     * 刷新数据
     *
     * @type {number}
     * @memberof ProjectTeamMob
     */
    @Prop() protected saveRefView?: number;

    /**
     * 刷新数据
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProjectTeamMob
     */
    @Watch('saveRefView')
    onSaveRefView(newVal: any, oldVal: any) {
        console.log('保存多项数据!');
        if (newVal > 0) {
            this.$emit('drdatasaved', false);
        }

    }
    
    /**
     * 对象转字符串
     *
     * @type {*}
     * @memberof ProjectTeamMob
     */
    protected toString(item:any): string{
        return JSON.stringify(item);
    }

     /**
     * 面板状态订阅对象
     *
     * @private
     * @type {Subject<{action: string, data: any}>}
     * @memberof Meditviewpanel
     */
    protected panelState: Subject<ViewState> = new Subject();

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    protected viewname: string = 'project-team-project-team-mob-edit-view';

    /**
     * 获取数据对象
     *
     * @type {any[]}
     * @memberof ProjectTeamMob
     */
    protected items: any[] = [];

    /**
     * 计数器
     *
     * @type number
     * @memberof ProjectTeamMob
     */
    protected count: number = 0;


    /**
     * 关系实体参数对象
     *
     * @private
     * @type {any[]}
     * @memberof ProjectTeamMob
     */
    private deResParameters: any[] = [
        { pathName: 'projects', parameterName: 'project' },
    ];

    /**
     * 当前应用视图参数对象
     *
     * @private
     * @type {any[]}
     * @memberof ProjectTeamMob
     */
    private parameters: any[] = [
        { pathName: 'projectteams', parameterName: 'projectteam' },
    ];

    /**
     * vue 声明周期
     *
     * @memberof ProjectTeamMob
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProjectTeamMob
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is(action, 'load')) {
                    this.load(data);
                }
                if (Object.is(action, 'save')) {
                    this.saveData(data);
                }
            });
        }
    }   

     /**
      * 保存数据
      *
      * @memberof Meditviewpanel
      */
    protected saveData(data?: any) {
        this.count = 0;
        if(this.items.length >0){
            Object.assign(data,{showResultInfo:false,saveEmit:false});
            this.panelState.next({ tag: 'meditviewpanel', action: 'save', data: data });
        }else{
            this.$emit("drdatasaved",{action:'drdatasaved'});
        }
    }

    /**
     * 处理数据
     *
     * @private
     * @param {any[]} datas
     * @memberof ProjectTeamMob
     */
    private doItems(datas: any[]): void {
        const [{ pathName, parameterName }] = this.parameters;
        datas.forEach((arg: any) => {
            let id: string = arg[parameterName] ? arg[parameterName] : this.$util.createUUID();
            let title :string = arg.ibzprojectteamnestname ?  arg.ibzprojectteamnestname :'';
            let item: any = { id: id,title:title, viewdata: {}, viewparam: {} };
            Object.assign(item.viewdata, this.$viewTool.getIndexViewParam());
            Object.assign(item.viewdata, this.context);

            // 关系应用实体参数
            this.deResParameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
                if (this.context[parameterName] && !Object.is(this.context[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: this.context[parameterName] });
                } else if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: arg[parameterName] });
                }
            });

            // 当前视图参数（应用实体视图）
            this.parameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
                if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: arg[parameterName] });
                }
            });

            //合并视图参数
            Object.assign(item.viewparam, this.viewparams);
            this.items.push(item);
        });
    }
    /**
     * 数据加载
     *
     * @private
     * @param {*} data
     * @memberof ProjectTeamMob
     */
    private load(data: any): void {
        if(!this.fetchAction){
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.multieditviewpanel')+'loaddraftAction'+ this.$t('app.notConfig'));
            return;
        }
        let arg: any = {};
        Object.assign(arg, data,{viewparams:this.viewparams});
        this.items = [];
        const promice: Promise<any> = this.service.get(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        promice.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$notice.error(response.error.message);
                }
                return;
            }
            const data: any = response.data;
           if (data.length > 0) {
                const items = JSON.parse(JSON.stringify(data));
                this.doItems(items);
            }
            this.$emit('load', this.items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.error.message);
        });
    }

    /**
     * 增加数据
     * 
     * @memberof ProjectTeamMob
     */
    protected handleAdd(){
        if(!this.loaddraftAction){
            this.$notice.error(this.viewName+this.$t('app.view')+this.$t('app.ctrl.multieditviewpanel')+'loaddraftAction'+ this.$t('app.notConfig'));
            return;
        }
        const promice: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:this.viewparams}, this.showBusyIndicator);
        promice.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$notice.error(response.error.message);
                }
                return;
            }
            const data: any = response.data;
            this.doItems([data]);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.error.message);
        });
    }

    /**
     * 删除方法
     *
     * @type {string}
     * @memberof ProjectTeamMob
     */
    public deleteItem(item:any) {
        let index = this.items.findIndex((i)=>{return Object.is(item.id,i.id)});
        this.items.splice(index,1);
    }

    /**
     * 设置视图脏值变化
     *
     * @param {*} item
     * @param {boolean} $event
     * @memberof ProjectTeamMob
     */
    protected setViewDirty(item: any, $event: boolean) {
        let index: number = this.items.findIndex((_item: any) => Object.is(_item.id, item.id));
        if (index === -1) {
            return;
        }
        Object.assign(this.items[index], { viewdirty: $event });
        let state: boolean = this.items.some((item: any) => {
            if (item.viewdirty) {
                return true;
            }
            return false;
        });
        this.$emit('viewdatadirty', state);
    }

     /**
     * 部件抛出事件
     * @memberof ProjectTeamMob
     */
    protected viewDataChange($event:any){
        if($event){
            try{
                $event = JSON.parse($event);
            }catch(error){
                return;
            }
            if(Object.is($event.action,'load')){
                console.log('加载----');
            }
            if(Object.is($event.action,'save')){
                this.count++;
                if (this.items.length === this.count) {
                    this.$emit('drdatasaved',{action:'save'});
                }
            }
            if(Object.is($event.action,'remove')){
                if ($event.data) {
                    let resultIndex = this.items.findIndex((value:any, index:any, arr:any) => {
                        return value['viewdata']['orderdetailtestid'] === $event.data['orderdetailtestid'];
                    });
                    if (resultIndex !== -1) {
                        this.items.splice(resultIndex, 1);
                    }
                }
            }            
        }
    }

    /**
     * 视图加载完成
     *
     * @returns
     * @memberof ProjectTeamMob
     */
    protected viewload($event:any){
        console.log('视图加载完成');
    }

    /**
     * editview9 视图数据变化
     *
     * @returns
     * @memberof ProjectTeamMob
     */
    protected viewdirty(item:any,$event:any){
        // editview9 视图数据变化;
        this.setViewDirty(item, $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectTeamMob
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProjectTeamMob
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './project-team-mob-multieditviewpanel.less';
</style>
