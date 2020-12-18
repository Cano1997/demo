<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskMobPickupMDViewBase from './task-mob-pickup-mdview-base.vue';

import view_searchform from '@widgets/task/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/task/mob-3335-mobmdctrl/mob-3335-mobmdctrl.vue';
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
export default class TaskMobPickupMDView extends TaskMobPickupMDViewBase {

}
</script>