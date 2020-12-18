<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReleaseMobPickupViewBase from './release-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/release/mob-pickup-viewpickupviewpanel-pickupviewpanel/mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class ReleaseMobPickupView extends ReleaseMobPickupViewBase {

}
</script>