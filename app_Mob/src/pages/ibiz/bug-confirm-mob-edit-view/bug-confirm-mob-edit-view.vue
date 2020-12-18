<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugConfirmMobEditViewBase from './bug-confirm-mob-edit-view-base.vue';

import view_form from '@widgets/bug/confirm-mob-form/confirm-mob-form.vue';
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
export default class BugConfirmMobEditView extends BugConfirmMobEditViewBase {

}
</script>