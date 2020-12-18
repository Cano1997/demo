<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugEditNewMobEditViewBase from './bug-edit-new-mob-edit-view-base.vue';

import view_form from '@widgets/bug/mob-main-data-edit-form/mob-main-data-edit-form.vue';
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
export default class BugEditNewMobEditView extends BugEditNewMobEditViewBase {

}
</script>