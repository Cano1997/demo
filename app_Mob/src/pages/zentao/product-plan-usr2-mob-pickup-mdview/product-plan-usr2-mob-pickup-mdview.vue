<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductPlanUsr2MobPickupMDViewBase from './product-plan-usr2-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/product-plan/mob-project-link-story-mobmdctrl/mob-project-link-story-mobmdctrl.vue';
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
export default class ProductPlanUsr2MobPickupMDView extends ProductPlanUsr2MobPickupMDViewBase {

}
</script>