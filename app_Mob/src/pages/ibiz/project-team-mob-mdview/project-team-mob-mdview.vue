<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectTeamMobMDViewBase from './project-team-mob-mdview-base.vue';

import view_mdctrl from '@widgets/project-team/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectTeamMobMDView extends ProjectTeamMobMDViewBase {

}
</script>