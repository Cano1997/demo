<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductMobEditViewBase from './product-mob-edit-view-base.vue';

import view_form from '@widgets/product/mob-main-form/mob-main-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductMobEditView extends ProductMobEditViewBase {

}
</script>