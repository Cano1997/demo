<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugTestMobMDViewBase from './bug-test-mob-mdview-base.vue';

import view_searchform from '@widgets/bug/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/bug/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class BugTestMobMDView extends BugTestMobMDViewBase {

}
</script>