<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectModuleMobPickupMDViewBase from './project-module-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/project-module/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectModuleMobPickupMDView extends ProjectModuleMobPickupMDViewBase {

}
</script>