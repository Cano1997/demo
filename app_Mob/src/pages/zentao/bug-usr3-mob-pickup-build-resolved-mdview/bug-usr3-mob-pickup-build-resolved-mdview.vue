<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobPickupBuildResolvedMDViewBase from './bug-usr3-mob-pickup-build-resolved-mdview-base.vue';

import view_searchform from '@widgets/bug/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/bug/mob-build-link-bug-mobmdctrl/mob-build-link-bug-mobmdctrl.vue';
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
export default class BugUsr3MobPickupBuildResolvedMDView extends BugUsr3MobPickupBuildResolvedMDViewBase {

}
</script>