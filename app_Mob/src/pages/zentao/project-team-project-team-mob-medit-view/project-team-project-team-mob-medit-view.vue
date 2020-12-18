<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectTeamProjectTeamMobMEditViewBase from './project-team-project-team-mob-medit-view-base.vue';

import view_meditviewpanel from '@widgets/ibzprojectteam/project-team-mob-multieditviewpanel/project-team-mob-multieditviewpanel.vue';
@Component({
    components: {
        view_meditviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectTeamProjectTeamMobMEditView extends ProjectTeamProjectTeamMobMEditViewBase {

}
</script>