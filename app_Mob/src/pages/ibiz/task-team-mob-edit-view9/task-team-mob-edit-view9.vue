<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskTeamMobEditView9Base from './task-team-mob-edit-view9-base.vue';

import view_form from '@widgets/ibztaskteam/mob-main-form/mob-main-form.vue';
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
export default class TaskTeamMobEditView9 extends TaskTeamMobEditView9Base {

}
</script>