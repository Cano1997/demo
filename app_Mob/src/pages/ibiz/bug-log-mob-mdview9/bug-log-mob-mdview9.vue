<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugLogMobMDView9Base from './bug-log-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/bug/mob-log-mobmdctrl/mob-log-mobmdctrl.vue';
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
export default class BugLogMobMDView9 extends BugLogMobMDView9Base {

}
</script>