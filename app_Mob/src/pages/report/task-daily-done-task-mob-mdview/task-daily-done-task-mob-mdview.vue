<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskDailyDoneTaskMobMDViewBase from './task-daily-done-task-mob-mdview-base.vue';

import view_mdctrl from '@widgets/task/my-complete-task-mob-mobmdctrl/my-complete-task-mob-mobmdctrl.vue';
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
export default class TaskDailyDoneTaskMobMDView extends TaskDailyDoneTaskMobMDViewBase {

}
</script>