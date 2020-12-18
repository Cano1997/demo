<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildMobMPickupViewBase from './build-mob-mpickup-view-base.vue';

import view_searchform from '@widgets/build/mob-def-searchform/mob-def-searchform.vue';
import view_pickupviewpanel from '@widgets/build/mob-mpickup-viewpickupviewpanel-pickupviewpanel/mob-mpickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_searchform, 
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class BuildMobMPickupView extends BuildMobMPickupViewBase {

}
</script>