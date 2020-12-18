<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskTeamMobMEditView9Base from './task-team-mob-medit-view9-base.vue';

import view_meditviewpanel from '@widgets/ibztaskteam/main-multieditviewpanel/main-multieditviewpanel.vue';
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
export default class TaskTeamMobMEditView9 extends TaskTeamMobMEditView9Base {

}
</script>