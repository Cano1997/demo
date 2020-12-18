<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectProjectTeamManageMobEditViewBase from './project-project-team-manage-mob-edit-view-base.vue';

import view_form from '@widgets/project/mob-project-team-manage-form/mob-project-team-manage-form.vue';
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
export default class ProjectProjectTeamManageMobEditView extends ProjectProjectTeamManageMobEditViewBase {

}
</script>