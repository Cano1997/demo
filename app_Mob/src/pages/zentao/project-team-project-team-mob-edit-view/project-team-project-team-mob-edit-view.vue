<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectTeamProjectTeamMobEditViewBase from './project-team-project-team-mob-edit-view-base.vue';

import view_form from '@widgets/project-team/project-team-mob-form/project-team-mob-form.vue';
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
export default class ProjectTeamProjectTeamMobEditView extends ProjectTeamProjectTeamMobEditViewBase {

}
</script>