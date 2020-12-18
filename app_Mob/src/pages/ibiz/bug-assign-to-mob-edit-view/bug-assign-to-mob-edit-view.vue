<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugAssignToMobEditViewBase from './bug-assign-to-mob-edit-view-base.vue';

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
export default class BugAssignToMobEditView extends BugAssignToMobEditViewBase {

}
</script>