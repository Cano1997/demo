<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr2MobMDViewBase from './bug-usr2-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-release-link-re-bug-mobmdctrl/mob-release-link-re-bug-mobmdctrl.vue';
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
export default class BugUsr2MobMDView extends BugUsr2MobMDViewBase {

}
</script>