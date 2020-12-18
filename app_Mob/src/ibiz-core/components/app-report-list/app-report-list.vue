<template>
    <div class="app-report-list">
        <template v-for="item in data">
            <div :key="item.date" class="app-report-list-item">
                <div class="date">{{item.date}}</div>
                <template v-for="_item in item.items">
                    <div class="item_content" :key="_item.id" @click="onClick(_item)">
                        <div class="img">
                            <img  v-if="_item.reliconUrl" :src="_item.reliconUrl" alt="">
                            <ion-icon v-else name="person-outline" ></ion-icon>
                            </div>
                        <div class="item_content_content">
                            <div class="item_content_content_header">
                                <div class="relname"><div v-show="_item.reportstatus == 0" class="print"></div>{{_item.relname}}</div>
                                <div class="submittime">{{_item.submittime}}</div>
                            </div>
                            <div class="item_content_content_text">
                                <div class="worktoday" v-html="_item.worktoday_html"></div>
                                <div class="planstomorrow" v-html="_item.planstomorrow_html"></div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from "vue-property-decorator";
import { Environment } from "@/environments/environment";
import { CodeListService } from "@/ibiz-core";
@Component({
})
export default class AppReportList extends Vue {

    /**
     * 视图参数
     *
     * @memberof AppReportList
     */
    @Prop() protected items?: any;

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppReportList
     */
    public codeListService: CodeListService = new CodeListService();

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 渲染data
     *
     * @type {CodeListService}
     * @memberof AppReportList
     */
    public data:any = []; 

    /**
     * 用户数据
     *
     * @type {CodeListService}
     * @memberof AppReportList
     */
    public userData :any = [];

    @Watch('items',{immediate: true, deep: true})
    on_items_change(newVal:any,oldVal:any){
       this.on_parse_item(newVal).then((res:any)=>{
           this.data = res;
       });
    }

    /**
     * 解析数据
     *
     * @memberof AppReportList
     */
    public async on_parse_item(items:any): Promise<any>{
        this.userData = await this.codeListService.getItems("UserRealName");
        let temp_items :any= [];
        for (let index = 0; index < items.length; index++) {
            const temp = items[index];
            temp.relname = this.getUserReName(temp.account)
            temp.reliconUrl = this.getUserReIconUrl(temp.account);
            temp.worktoday_html = this.getText(temp.worktoday);
            temp.planstomorrow_html = this.getText(temp.planstomorrow);
            temp_items.push(temp);
        }
        
        return this.parseDataGroup(temp_items);
    }

    /**
     * 获取文本
     *
     * @returns {void}
     * @memberof AppReportList
     */
    public getText(str:string) {
        if(!str){
            return "";
        }
        str = str.replace(/\<[^>]*\>(([^<])*)/g, function() {
            let mark = "";
            return arguments[1];
        });
        return str.substring(0, str.length);

    }

    /**
     * 获取用户真实姓名
     *
     * @returns {string}
     * @memberof AppReportList
     */
    public getUserReName(id: string): string {
        let index = this.userData.findIndex((item:any) => { return item.value == id })
        return index > -1 ? this.userData[index].label : "";
    }

    /**
     * 获取用户头像Url
     *
     * @returns {string}
     * @memberof AppReportList
     */
    public getUserReIconUrl(id: string): string {
        let index = this.userData.findIndex((item:any) => { return item.value == id });
        if(index === -1){
            return '';
        }
        if(this.userData[index].icon || this.userData[index].icon[0]){
            let icon = JSON.parse(this.userData[index].icon)
            return `${this.imageUrl}/${icon[0].id}`
        }
        return '';
    }

    /**
     * 日期分组
     *
     * @returns {any}
     * @memberof AppReportList
     */
    public parseDataGroup(items:any):any{
        let temp :any= [];
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            let _index = temp.findIndex((i:any)=>{return i.date == element.date});
            if(_index != -1){
                temp[_index].items.push(element);
            }else{
                temp.push({date:element.date,items:[element]});
            }
        }
        temp.sort(function(now:any, next:any) {
            return  new Date(next.date).getTime() - new Date(now.date).getTime();
        });
        for (let index = 0; index < temp.length; index++) {
            const element = temp[index];
            element.items.sort(function(now:any, next:any) {
                if(next.submittime){
                    return next.submittime.replace(":","") - now.submittime.replace(":","");
                }
            });
        }
        return temp;
    }

    /**
     * 点击
     *
     * @returns {void}
     * @memberof AppReportList
     */
    public onClick(item:any) {
        this.$emit("item_click",item);
    }

}
</script>
<style lang="less">
@import "./app-report-list.less";
</style>