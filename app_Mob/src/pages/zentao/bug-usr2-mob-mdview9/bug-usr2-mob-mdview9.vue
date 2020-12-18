<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr2MobMDView9Base from './bug-usr2-mob-mdview9-base.vue';

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
export default class BugUsr2MobMDView9 extends BugUsr2MobMDView9Base {

}
</script>