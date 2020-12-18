<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskMyCompleteTaskMobMDViewWeeklyBase from './task-my-complete-task-mob-mdview-weekly-base.vue';

import view_mdctrl from '@widgets/task/my-complete-task-monthly-mobmdctrl/my-complete-task-monthly-mobmdctrl.vue';
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
export default class TaskMyCompleteTaskMobMDViewWeekly extends TaskMyCompleteTaskMobMDViewWeeklyBase {

}
</script>