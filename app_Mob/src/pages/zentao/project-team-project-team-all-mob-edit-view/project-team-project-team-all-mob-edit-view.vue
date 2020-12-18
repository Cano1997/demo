<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectTeamProjectTeamAllMobEditViewBase from './project-team-project-team-all-mob-edit-view-base.vue';

import view_form from '@widgets/project-team/project-team-relation-form/project-team-relation-form.vue';
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
export default class ProjectTeamProjectTeamAllMobEditView extends ProjectTeamProjectTeamAllMobEditViewBase {

}
</script>