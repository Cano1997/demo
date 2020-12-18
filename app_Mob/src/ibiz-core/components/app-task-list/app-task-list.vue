<template>
    <div class="app-task-list-item">
        <div class="app-task-list-item_top">
            <div class="left_tag" v-if="item.left_tag">{{item.left_tag}}</div>
            <strong><div class="name" :style="{'color':item.color}"> {{item.srfmajortext}}</div></strong>
            <div class="pri" :class="item.pri_className">{{item.pri_text}}</div>
        </div>
        <div class="app-task-list-item_center">
            <div class="deadline">{{item.deadline}}</div>
            <div class="delay" v-if="item.delay">{{item.delay}}</div>
        </div>
        <div class="app-task-list-item_bottom">
            <div class="speace">{{item.tasktype_text}}</div>
            <div class="status" :style="{'color':item.status_color}">{{item.status_text}}</div>
            <!-- <div class="openeddate">{{item.openeddate}}</div> -->
            <div class="assignedto" >
                <div v-if="item.multiple != '1' && !item.assignedto_img" class="assignedto_item">{{item.assignedto_text}}</div>
                <div v-if="item.assignedto_img" class="assignedto_item_img"><img :src="item.assignedto_img" alt=""></div>
                <template v-for="(_item,index) in assignedtoArr" >
                    <template v-if="item.multiple == '1' && index < 2 " >
                        <div v-if="!_item.img" :key="index" class="assignedto_item">{{_item.name}}</div>
                        <div v-if="_item.img" :key="index" class="assignedto_item_img"><img :src="_item.img" alt=""></div>
                    </template>
                </template>
                <div class="ion" v-if="assignedtoArr.length >= 3"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
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
export default class appTaskList extends Vue {

    /**
     * 列表项
     */
    @Prop() protected item?: any;
    @Watch('item')
    on_item_change(){
        this.parseData();
    }

    /**
     * 多人任务指派
     */
    public assignedtoArr :any[] = [];

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 任务优先级代码表
     */
    public Task__pri: any;

    /**
     * 任务状态代码表
     */
    public Task__status: any;
    
    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * 任务类型
     */
    public Task__type : any;

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
        // 代码表转化
        this.item.pri_text = this.getCodeListText('Task__pri',this.item.pri).label;
        this.item.pri_className = this.getCodeListText('Task__pri',this.item.pri).className;
        this.item.status_text = this.getCodeListText('Task__status',this.item.status).label;
        this.item.status_color = this.getCodeListText('Task__status',this.item.status).color;
        this.item.tasktype_text = this.getCodeListText('Task__type',this.item.type).label;
        this.item.openeddate = this.item.openeddate.substring(5,10);
        // 设置指派名称
        // 多人
        if(Object.is(this.item.multiple,'1')){
            const assignedto: any = this.item.assignedto.split(',')
            for (let index = 0; index < assignedto.length; index++) {
                const element = assignedto[index];
                let name = this.getCodeListText('UserRealName',element).label;
                if(name) name = name.substring(0,1);
                let img = this.getUserImg(element);
                this.assignedtoArr.push({name:name,img:img});
            }
        }else{
        // 单人
            this.item.assignedto_text = this.getCodeListText('UserRealName',this.item.assignedto).label;
            this.item.assignedto_text = this.item.assignedto_text?this.item.assignedto_text.substring(0,1):"";
            this.item.assignedto_img = this.getUserImg(this.item.assignedto);
        }
        // 任务标记
        if(Object.is(this.item.multiple,'1')){
            this.item.left_tag = '多';
        }else if(Object.is(this.item.parent,'-1')){
            this.item.left_tag = '父';
        }else if(Object.is(this.item.isleaf,'1')){
            this.item.left_tag = '子';
        }
        this.$forceUpdate();
    }

    /**
     * 获取用户头像
     */
    public getUserImg(value:string) {
        let icon = JSON.parse(this.getCodeListText('UserRealName',value).icon);
        if(icon && icon[0] && icon[0].id){
            return `${this.imageUrl}/${icon[0].id}`;
        }
        return '';
    }

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{
        this.Task__pri = this.$store.getters.getCodeList('Task__pri').items;
        this.Task__status = this.$store.getters.getCodeList('Task__status').items;
        this.Task__type =this.$store.getters.getCodeList('Task__type').items;
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
@import "./app-task-list";
</style>