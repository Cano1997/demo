<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildMobPickupViewBase from './build-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/build/mob-pickup-viewpickupviewpanel-pickupviewpanel/mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class BuildMobPickupView extends BuildMobPickupViewBase {

}
</script>