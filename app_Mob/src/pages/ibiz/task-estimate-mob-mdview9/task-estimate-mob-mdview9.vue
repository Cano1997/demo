<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskEstimateMobMDView9Base from './task-estimate-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/task-estimate/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class TaskEstimateMobMDView9 extends TaskEstimateMobMDView9Base {

}
</script>