<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugResolveMobEditViewBase from './bug-resolve-mob-edit-view-base.vue';

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
export default class BugResolveMobEditView extends BugResolveMobEditViewBase {

}
</script>