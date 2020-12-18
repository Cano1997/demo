<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductLineMobPickupMDViewBase from './product-line-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/product-line/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class ProductLineMobPickupMDView extends ProductLineMobPickupMDViewBase {

}
</script>