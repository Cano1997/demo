<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductCloseMobEditViewBase from './product-close-mob-edit-view-base.vue';

import view_form from '@widgets/product/mob-close-form/mob-close-form.vue';
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
export default class ProductCloseMobEditView extends ProductCloseMobEditViewBase {

}
</script>