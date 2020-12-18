<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyDailyPlansTomorrowTaskMobMDViewBase from './ibz-daily-daily-plans-tomorrow-task-mob-mdview-base.vue';

import view_mdctrl from '@widgets/task/my-plans-tomorrow-task-mob-mobmdctrl/my-plans-tomorrow-task-mob-mobmdctrl.vue';
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
export default class IbzDailyDailyPlansTomorrowTaskMobMDView extends IbzDailyDailyPlansTomorrowTaskMobMDViewBase {

}
</script>