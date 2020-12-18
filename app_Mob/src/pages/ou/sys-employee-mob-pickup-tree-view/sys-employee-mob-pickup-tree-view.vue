<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeMobPickupTreeViewBase from './sys-employee-mob-pickup-tree-view-base.vue';

import view_tree from '@widgets/sys-employee/emp-tree-treeview/emp-tree-treeview.vue';
@Component({
    components: {
        view_tree, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class SysEmployeeMobPickupTreeView extends SysEmployeeMobPickupTreeViewBase {

}
</script>