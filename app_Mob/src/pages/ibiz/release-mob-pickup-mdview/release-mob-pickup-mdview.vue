<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReleaseMobPickupMDViewBase from './release-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/release/mob-2622-mobmdctrl/mob-2622-mobmdctrl.vue';
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
export default class ReleaseMobPickupMDView extends ReleaseMobPickupMDViewBase {

}
</script>