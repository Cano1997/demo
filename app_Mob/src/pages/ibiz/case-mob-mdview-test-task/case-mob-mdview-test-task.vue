<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseMobMDView_TestTaskBase from './case-mob-mdview-test-task-base.vue';

import view_searchform from '@widgets/case/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/case/exp-test-task-mobmdctrl/exp-test-task-mobmdctrl.vue';
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
export default class CaseMobMDView_TestTask extends CaseMobMDView_TestTaskBase {

}
</script>