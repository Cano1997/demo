<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskTeamMobMDView9Base from './task-team-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/task-team/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class TaskTeamMobMDView9 extends TaskTeamMobMDView9Base {

}
</script>