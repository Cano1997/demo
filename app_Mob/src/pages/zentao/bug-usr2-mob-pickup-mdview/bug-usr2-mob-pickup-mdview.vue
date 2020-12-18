<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr2MobPickupMDViewBase from './bug-usr2-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-product-plan-link-bug-mobmdctrl/mob-product-plan-link-bug-mobmdctrl.vue';
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
export default class BugUsr2MobPickupMDView extends BugUsr2MobPickupMDViewBase {

}
</script>