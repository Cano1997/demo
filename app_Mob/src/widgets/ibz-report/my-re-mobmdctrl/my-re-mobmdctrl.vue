<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyReBase from './my-re-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/ibz-report/my-submit-panel/my-submit-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyRe extends MyReBase {

    /**
    * 点击回调事件
    *
    * @memberof MySubmit
    */
    public item_click(item:any){
        if(Object.is(item.type,'daily')){
            this.mdctrl_click('udc8b3e6',item)
        }
        if(Object.is(item.type,'monthly')){
            this.mdctrl_click('ub3137fd',item)
        }
        if(Object.is(item.type,'weekly')){
            this.mdctrl_click('uc168ebb',item)
        }
        if(Object.is(item.type,'reportly')){
            this.mdctrl_click('u266c08f',item)
        }
    }

    /**
     * 列表项左滑右滑触发行为
     *
     * @param {*} $event 点击鼠标事件
     * @param {*} tag 操作标识
     * @param {*} item 行数据
     * @memberof Mdctrl
     */
    public mdctrl_click(tag: any, item: any): void {
        this.selectedArray = [];
        this.selectedArray.push(item);
        if (Object.is(tag, 'udc8b3e6')) {
            this.mdctrl_udc8b3e6_click();
        }
        if (Object.is(tag, 'uc168ebb')) {
            this.mdctrl_uc168ebb_click();
        }
        if (Object.is(tag, 'ub3137fd')) {
            this.mdctrl_ub3137fd_click();
        }
        if (Object.is(tag, 'u266c08f')) {
            this.mdctrl_u266c08f_click();
        }
        this.closeSlidings(item);
    }

    /**
     * vue 生命周期 activated
     *
     * @memberof MyRe
     */
    public activated() {
        this.refresh()
    }
    
}
</script>