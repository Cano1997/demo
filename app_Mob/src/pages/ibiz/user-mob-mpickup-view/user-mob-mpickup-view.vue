<script lang='ts'>
import { Component } from 'vue-property-decorator';
import UserMobMPickupViewBase from './user-mob-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/user/mob-mpickup-viewpickupviewpanel-pickupviewpanel/mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class UserMobMPickupView extends UserMobMPickupViewBase {

}
</script>