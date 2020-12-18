<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductMobPickupViewBase from './product-mob-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/product/mob-pickup-viewpickupviewpanel-pickupviewpanel/mob-pickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class ProductMobPickupView extends ProductMobPickupViewBase {

}
</script>