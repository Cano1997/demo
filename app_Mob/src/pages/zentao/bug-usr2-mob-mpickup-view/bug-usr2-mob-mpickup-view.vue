<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr2MobMPickupViewBase from './bug-usr2-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/bug/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel/usr2-mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class BugUsr2MobMPickupView extends BugUsr2MobMPickupViewBase {

}
</script>