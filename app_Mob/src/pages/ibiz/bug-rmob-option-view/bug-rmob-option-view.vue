<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugRMobOptionViewBase from './bug-rmob-option-view-base.vue';

import view_form from '@widgets/bug/resolve-mob-form/resolve-mob-form.vue';
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
export default class BugRMobOptionView extends BugRMobOptionViewBase {

}
</script>