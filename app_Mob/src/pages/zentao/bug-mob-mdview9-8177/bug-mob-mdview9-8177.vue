<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugMobMDView9_8177Base from './bug-mob-mdview9-8177-base.vue';

import view_mdctrl from '@widgets/bug/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class BugMobMDView9_8177 extends BugMobMDView9_8177Base {

}
</script>