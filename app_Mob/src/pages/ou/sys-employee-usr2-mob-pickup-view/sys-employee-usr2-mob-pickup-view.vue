<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysEmployeeUsr2MobPickupViewBase from './sys-employee-usr2-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/sys-employee/usr2-mob-pickup-viewpickupviewpanel-pickupviewpanel/usr2-mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class SysEmployeeUsr2MobPickupView extends SysEmployeeUsr2MobPickupViewBase {

}
</script>