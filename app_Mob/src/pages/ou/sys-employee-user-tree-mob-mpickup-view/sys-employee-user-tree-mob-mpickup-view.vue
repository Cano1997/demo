<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeUserTreeMobMPickupViewBase from './sys-employee-user-tree-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/sys-employee/user-tree-mob-mpickup-viewpickupviewpanel-pickupviewpanel/user-tree-mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class SysEmployeeUserTreeMobMPickupView extends SysEmployeeUserTreeMobMPickupViewBase {

}
</script>