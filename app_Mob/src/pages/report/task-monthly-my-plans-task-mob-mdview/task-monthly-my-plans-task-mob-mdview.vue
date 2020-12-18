<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskMonthlyMyPlansTaskMobMDViewBase from './task-monthly-my-plans-task-mob-mdview-base.vue';

import view_mdctrl from '@widgets/task/my-plans-task-monthly-mobmdctrl/my-plans-task-monthly-mobmdctrl.vue';
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
export default class TaskMonthlyMyPlansTaskMobMDView extends TaskMonthlyMyPlansTaskMobMDViewBase {

}
</script>