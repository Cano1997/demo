<template>
    <div class="app-story-list-item">
        <div class="app-story-list-item_top">
            <div class="multiple" v-if="item.parent == '-1'">父</div>
            <div class="multiple" v-else-if="item.isleaf == '1'">子</div>
            <strong><div class="name" :style="{'color':item.color}"> {{item.srfmajortext}}<span class="estimate">(工时：{{item.estimate}} h)</span></div></strong>
            <div class="pri" :class="item.pri_className">{{item.pri_text}}</div>
        </div>
        <div class="app-story-list-item_bottom">
            <div class="status" :style="{'color':item.status_color}">{{item.status_text}}</div>
            <div class="stage" :style="{'color':item.stage_color}">{{item.stage_text}}</div>
            <div class="assignedto">
                <div v-if="item.assignedto_img" class="assignedto_item_img"><img :src="item.assignedto_img" alt=""></div>
                <div v-else-if="item.assignedto_text" class="assignedto_item">{{item.assignedto_text}}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from "vue-property-decorator";
import { ImagePreview } from 'vant';
import { Environment } from "@/environments/environment";
import { CodeListService } from "@/ibiz-core";
@Component({
    components: { [ImagePreview.Component.name]: ImagePreview.Component, }
})
export default class appStoryList extends Vue {

    /**
     * 列表项
     */
    @Prop() protected item?: any;
    @Watch('item')
    on_item_change(){
        this.parseData();
    }

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 需求优先级代码表
     */
    public Story__pri: any;

    /**
     * 需求状态代码表
     */
    public Story__status: any;

    /**
     * 需求阶段代码表
     */
    public Story__stage: any;
    
    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppReportList
     */
    public codeListService: CodeListService = new CodeListService();

    /**
     * 解析
     */
    public parseData(){
        this.item.pri_text = this.getCodeListText('Story__pri',this.item.pri).text;
        this.item.pri_className = this.getCodeListText('Story__pri',this.item.pri).className;
        this.item.stage_text = this.getCodeListText('Story__stage',this.item.stage).label;
        this.item.stage_color = this.getCodeListText('Story__stage',this.item.stage).color;
        this.item.status_text = this.getCodeListText('Story__status',this.item.status).label;
        this.item.status_color = this.getCodeListText('Story__status',this.item.status).color;

        // 设置指派名称
        this.item.assignedto_text = this.getCodeListText('UserRealName',this.item.assignedto).label;
        if (this.item.assignedto_text) {
            this.item.assignedto_text = this.item.assignedto_text.substring(0, 1);
        }
        this.item.assignedto_img = this.getUserImg(this.item.assignedto);
        this.$forceUpdate();
    }

    /**
     * 获取用户头像
     */
    public getUserImg(value:string) {
        let icon = this.getCodeListText('UserRealName',value).icon;
        if (icon) {
            icon = JSON.parse(icon);
        }
        if(icon && icon[0] && icon[0].id){
            return `${this.imageUrl}/${icon[0].id}`;
        }
        return '';
    }

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{
        this.Story__pri = this.$store.getters.getCodeList('Story__pri').items;
        this.Story__stage = this.$store.getters.getCodeList('Story__stage').items;
        this.Story__status =this.$store.getters.getCodeList('Story__status').items;
        this.UserRealName = await this.codeListService.getItems('UserRealName');
        return true
    }

    /**
     * 获取代码表文本
     */
    public getCodeListText(tag:string,id:string):any{
        let _this: any = this;
        if(!_this[tag]){
            return id;
        }
        let index = _this[tag].findIndex((item:any) => { return item.value == id })
        return index > -1 ? _this[tag][index]: id;
    }

    /**
     * 生命周期
     */
    public created(){
        this.initCodeList().then((res)=>{
            this.parseData();
        });
    }

}
</script>
<style lang="less">
@import "./app-story-list";
</style>