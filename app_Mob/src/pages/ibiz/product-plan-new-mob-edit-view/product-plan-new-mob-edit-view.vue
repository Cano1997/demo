<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductPlanNewMobEditViewBase from './product-plan-new-mob-edit-view-base.vue';

import view_form from '@widgets/product-plan/mob-new-form-form/mob-new-form-form.vue';
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
export default class ProductPlanNewMobEditView extends ProductPlanNewMobEditViewBase {

}
</script>