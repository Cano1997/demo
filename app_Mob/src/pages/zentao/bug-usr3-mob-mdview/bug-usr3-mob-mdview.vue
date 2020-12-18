<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobMDViewBase from './bug-usr3-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-release-yi-liu-bug-mobmdctrl/mob-release-yi-liu-bug-mobmdctrl.vue';
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
export default class BugUsr3MobMDView extends BugUsr3MobMDViewBase {

}
</script>