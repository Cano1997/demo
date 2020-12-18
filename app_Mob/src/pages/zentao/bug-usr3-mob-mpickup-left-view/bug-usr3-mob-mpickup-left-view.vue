<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobMPickupLeftViewBase from './bug-usr3-mob-mpickup-left-view-base.vue';

import view_pickupviewpanel from '@widgets/bug/usr3-mob-mpickup-left-viewpickupviewpanel-pickupviewpanel/usr3-mob-mpickup-left-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class BugUsr3MobMPickupLeftView extends BugUsr3MobMPickupLeftViewBase {

}
</script>