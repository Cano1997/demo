<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskMyCompleteTaskMobMDView1Base from './task-my-complete-task-mob-mdview1-base.vue';

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
export default class TaskMyCompleteTaskMobMDView1 extends TaskMyCompleteTaskMobMDView1Base {

}
</script>