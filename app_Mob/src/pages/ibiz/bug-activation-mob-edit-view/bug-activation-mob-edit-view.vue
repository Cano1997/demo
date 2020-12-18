<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugActivationMobEditViewBase from './bug-activation-mob-edit-view-base.vue';

import view_form from '@widgets/bug/activation-mob-form/activation-mob-form.vue';
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
export default class BugActivationMobEditView extends BugActivationMobEditViewBase {

}
</script>