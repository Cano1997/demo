<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskAssMobMDView9Base from './task-ass-mob-mdview9-base.vue';

import view_searchform from '@widgets/task/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/task/ass-mob-dashboard-mobmdctrl/ass-mob-dashboard-mobmdctrl.vue';
@Component({
    components: {
        view_searchform, 
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskAssMobMDView9 extends TaskAssMobMDView9Base {

}
</script>