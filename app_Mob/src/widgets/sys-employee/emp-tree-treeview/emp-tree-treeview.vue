<script lang='ts'>
import { Component } from 'vue-property-decorator';
import EmpTreeBase from './emp-tree-treeview-base.vue';

 
@Component({
    components: {
         
    }
})
export default class EmpTree extends EmpTreeBase {

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 解析节点数据
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public parseNodes(nodes:any) {
        let rootNodes :any= [];
        let valueNodes :any= [];
        for (let index = 0; index < nodes.length; index++) {
            const item = nodes[index];
            let ele :any= this.$refs[item.srfkey+'checkbox'];
            if(!item.leaf){
                rootNodes.push(item);
            }else{
                if(item.strIcon && item.strIcon !== 'default_text'){
                            let tempIcon =  JSON.parse(item.strIcon);
                            if(tempIcon && tempIcon[0] && tempIcon[0].id){
                                item.strIcon = `${this.imageUrl}/${tempIcon[0].id}`;
                            }
                }
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
                valueNodes.push(item);
            }
        }
        this.rootNodes = rootNodes;
        this.valueNodes = valueNodes;
        this.$forceUpdate();
    }
}
</script>