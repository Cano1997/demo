<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectModuleMobPickupViewBase from './project-module-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/project-module/mob-pickup-viewpickupviewpanel-pickupviewpanel/mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class ProjectModuleMobPickupView extends ProjectModuleMobPickupViewBase {

}
</script>