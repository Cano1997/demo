<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugAssMobOptionViewBase from './bug-ass-mob-option-view-base.vue';

import view_form from '@widgets/bug/assign-to-mob-form/assign-to-mob-form.vue';
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
export default class BugAssMobOptionView extends BugAssMobOptionViewBase {

}
</script>