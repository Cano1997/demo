<script lang='ts'>
import { Component } from 'vue-property-decorator';
import CaseUsr2MobPickupMDViewBase from './case-usr2-mob-pickup-mdview-base.vue';

import view_searchform from '@widgets/case/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/case/mob-task-case-mobmdctrl/mob-task-case-mobmdctrl.vue';
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
export default class CaseUsr2MobPickupMDView extends CaseUsr2MobPickupMDViewBase {

}
</script>