<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugColseMobEditViewBase from './bug-colse-mob-edit-view-base.vue';

import view_form from '@widgets/bug/close-mob-form/close-mob-form.vue';
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
export default class BugColseMobEditView extends BugColseMobEditViewBase {

}
</script>