<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductStatsMobMDViewBase from './product-stats-mob-mdview-base.vue';

import view_mdctrl from '@widgets/product-stats/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class ProductStatsMobMDView extends ProductStatsMobMDViewBase {

}
</script>