<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseStepMobMDView9Base from './case-step-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/case-step/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class CaseStepMobMDView9 extends CaseStepMobMDView9Base {

}
</script>