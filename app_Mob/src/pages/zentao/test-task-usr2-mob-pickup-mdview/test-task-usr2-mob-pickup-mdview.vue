<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TestTaskUsr2MobPickupMDViewBase from './test-task-usr2-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/test-task/mob-test-task-link-case-mobmdctrl/mob-test-task-link-case-mobmdctrl.vue';
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
export default class TestTaskUsr2MobPickupMDView extends TestTaskUsr2MobPickupMDViewBase {

}
</script>