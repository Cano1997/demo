<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugNewMobEditViewBase from './bug-new-mob-edit-view-base.vue';

import view_form from '@widgets/bug/mob-new-from-form/mob-new-from-form.vue';
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
export default class BugNewMobEditView extends BugNewMobEditViewBase {

}
</script>