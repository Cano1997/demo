<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeTreeMobPickupViewBase from './sys-employee-tree-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/sys-employee/tree-mob-pickup-viewpickupviewpanel-pickupviewpanel/tree-mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class SysEmployeeTreeMobPickupView extends SysEmployeeTreeMobPickupViewBase {

}
</script>