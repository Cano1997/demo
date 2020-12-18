<template>
  <ion-page :className="{ 'view-container': true, 'default-mode-view': true }">
    <ion-header v-if="titleStatus">
      <ion-toolbar class="ionoc-view-header">
        <ion-buttons slot="start">
          <ion-button @click="closeView">
            <ion-icon name="chevron-back"></ion-icon>
            {{$t('app.button.back')}}
          </ion-button>
        </ion-buttons>
        <ion-title class="view-title">
          <label class="title-label">自定义仪表盘</label>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="drag-list">
        <div class="drag-list-item added">
          <div class="header">已经添加的卡片</div>
          <draggable v-model="selectedData" handle=".end" :animation="200" @end="dragEnd">
            <div class="content" v-for="item in selectedData" :key="item.componentName">
              <div class="start" @click="delteItem(item.id)">
                <ion-icon name="remove-circle-outline"></ion-icon>
              </div>
              <div class="drag-list-pic"><img  :src="item.detailImage?item.detailImage:'assets/images/add-task-list-card.jpg'" alt=""></div>
              <div class="drag-list-text">
                <div><span v-if="item.customizeTitle">{{item.customizeTitle}}</span><span v-else>{{$t( `app.portlets.${item.portletCodeName.toLowerCase()}.caption`)}}</span></div>
                <div v-if="item.detailText">{{item.detailText}}</div>
                <div v-else>暂无描述</div>
              </div>
              <div class="end">
                <ion-icon name="drag-point"></ion-icon>
              </div>
            </div>
          </draggable>
        </div>

        <div class="drag-list-item add">
          <div class="header">可添加的卡片</div>
          <template v-for="item in selectData">
            <div class="content" v-if="item.componentName" :key="item.componentName">
              <div class="start" @click="addItem(item.id)">
                <ion-icon name="add-circle-outline"></ion-icon>
              </div>
              <div class="drag-list-pic"><img  :src="item.detailImage?item.detailImage:'assets/images/add-task-list-card.jpg'" alt=""></div>
              <div class="drag-list-text">
                <div>{{$t( `app.portlets.${item.portletCodeName.toLowerCase()}.caption`)}}</div>
                <div v-if="item.detailText">{{item.detailText}}</div>
                <div v-else>暂无描述</div>
              </div>
              <div class="end">
                <!-- <ion-icon v-show="false" name="drag-point"></ion-icon> -->
              </div>
            </div>
          </template>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Provide,
  Emit,
  Watch,
} from "vue-property-decorator";
import draggable from "vuedraggable";
import { Http } from "@/ibiz-core/utils";
@Component({
  components: {
    draggable,
  },
})
export default class AppCustomize extends Vue {

    /**
     * 已添加数据
     *
     * @type {Array}
     * @memberof AppCustomize
     */
    public selectedData?: any = [];


    public selectMode = [];

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof AppCustomize
     */
    @Prop() protected _viewparams!: string;

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof AppCustomize
     */
    protected utilService:any =  window.utilServiceConstructor;

    /**
     * 传入数据list_add
     *
     * @type {Array}
     * @memberof AppCustomize
     */
    public selectData?: any = [];

    /**
     * 减少item
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    public delteItem(id: any) {
        let item: any = this.selectedData.find((v: any) => v.id === id);
        let length: number = this.selectData.length;
        item.id = length + 1;
        this.selectedData.splice(id - 1, 1);
        this.selectedData.forEach((v: any, i: any) => {
        v.id = i + 1;
        });
        this.selectData.push(item);
        this.customizeChange();
    }

    /**
     * 添加item
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    public addItem(id: any) {
        let item: any = this.selectData.find((v: any) => v.id === id);
        let length: number = this.selectedData.length;
        item.id = length + 1;
        this.selectData.splice(id - 1, 1);
        this.selectData.forEach((v: any, i: any) => {
        v.id = i + 1;
        });
        this.selectedData.push(item);
        this.customizeChange();
    }

    /**
     * 标题显示状态
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    public titleStatus = true;

    /**
     * 拖拽结束
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    public dragEnd() {
        this.customizeChange();
    }

    /**
     * 监听selectedData
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    @Watch("selectedData", { immediate: true, deep: true })
    onSelectedDataChange() {
        this.selectedData.forEach((item: any, index: number) => {
          item.id = index + 1;
        });
    }

    /**
     * 监听selectData
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    @Watch("selectData", { immediate: true, deep: true })
    onSelectDataChange() {
        this.selectData.forEach((item: any, index: number) => {
          item.id = index + 1;
        });
    }

    /**
     * 生命周期created
     *
     * @returns {void}
     * @memberof AppCustomize
     */
    public created() {
        this.loadPortletList({}, {});
        this.thirdPartyInit();
    }

    /**
     * 获取可添加仪表盘数据
     *
     * @memberof AppCustomize
     */
    public loadPortletList(context: any, viewparams: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        Http.getInstance()
            .get("./assets/json/portlet-data.json")
            .then((response: any) => {
            if (response && response.status === 200 && response.data) {
                let result: Array<any> = [];
                if (typeof response.data == "string") {
                const index: number = response.data.lastIndexOf(",");
                result = JSON.parse(response.data);
                } else {
                result = response.data;
                }
                this.parseData(result);
                resolve({ data: result });
            }
            })
            .catch((response: any) => {
            console.log(response);
            });
        });
    }

  /**
   *  第三方容器初始化
   *
   * @type {function}
   * @memberof AppRichTextEditor
   */
  protected  thirdPartyInit(){
        this.$viewTool.setViewTitleOfThirdParty("自定义仪表盘");
        this.$viewTool.setThirdPartyEvent(this.closeView);
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
  }

    /**
     * 解析data
     *
     * @memberof AppCustomize
     */
    public parseData(data: any) {
        this.selectMode.forEach((i: any, ins: number) => {
        data.forEach((item: any, index: number) => {
            if (i.componentName == item.componentName) {
            data.splice(index, 1);
            }
        });
        });
        this.selectData = data;
        this.selectedData = this.selectMode;
    }

    /**
     * modleId
     *
     * @type {string}
     * @memberof AppCustomize
     */
    public modelId: string = "";

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof AppCustomize
     */
    public utilServiceName: string = "";

    /**
     * customizeChange
     * 
     * @memberof AppCustomize
     */
    public customizeChange() {
        this.saveModel(
        this.utilServiceName,
        {},
        {
            utilServiceName: this.utilServiceName,
            modelid: this.modelId,
            model: this.selectedData,
        }
        );
    }

    /**
     * 生命周期钩子
     * 
     * @memberof AppCustomize
     */
    public mounted() {
        let parm: any = JSON.parse(this._viewparams);
        if (parm) {
        this.modelId = parm.modelId ? parm.modelId : "";
        this.utilServiceName = parm.utilServiceName ? parm.utilServiceName : "";
        this.selectMode = parm.selectMode ? parm.selectMode : "";
        }
    }

    /**
     * 关闭视图
     * 
     * @memberof AppCustomize
     */
    public closeView() {
        this.$emit("close", [this.selectMode]);
    }

    /**
     * 保存模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @returns
     * @memberof AppDashboardDesignService
     */
    public saveModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
        this.utilService
            .getService(serviceName)
            .then((service: any) => {
            service
                .saveModelData(JSON.stringify(context), "", viewparams)
                .then((response: any) => {
                resolve(response);
                })
                .catch((response: any) => {
                reject(response);
                });
            })
            .catch((response: any) => {
            reject(response);
            });
        });
    }
}
</script>
<style lang = "less">
@import "./app-customize.less";
</style>