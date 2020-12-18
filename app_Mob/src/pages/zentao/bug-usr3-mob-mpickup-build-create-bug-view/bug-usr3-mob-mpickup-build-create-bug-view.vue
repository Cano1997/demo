<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobMPickupBuildCreateBugViewBase from './bug-usr3-mob-mpickup-build-create-bug-view-base.vue';

import view_pickupviewpanel from '@widgets/bug/usr3-mob-mpickup-build-create-bug-viewpickupviewpanel-pickupviewpanel/usr3-mob-mpickup-build-create-bug-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class BugUsr3MobMPickupBuildCreateBugView extends BugUsr3MobMPickupBuildCreateBugViewBase {

}
</script>