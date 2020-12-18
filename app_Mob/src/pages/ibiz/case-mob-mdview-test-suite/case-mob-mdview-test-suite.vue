<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseMobMDView_TestSuiteBase from './case-mob-mdview-test-suite-base.vue';

import view_searchform from '@widgets/case/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/case/exp-test-suite-mobmdctrl/exp-test-suite-mobmdctrl.vue';
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
export default class CaseMobMDView_TestSuite extends CaseMobMDView_TestSuiteBase {

}
</script>