<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductMobTabExpViewBase from './product-mob-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/product/mob-tab-exp-viewtabexppanel-tabexppanel/mob-tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductMobTabExpView extends ProductMobTabExpViewBase {

}
</script>