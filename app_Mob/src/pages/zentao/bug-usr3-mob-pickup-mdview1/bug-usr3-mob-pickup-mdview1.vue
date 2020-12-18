<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobPickupMDView1Base from './bug-usr3-mob-pickup-mdview1-base.vue';

import view_searchform from '@widgets/bug/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/bug/mob-release-link-left-bug-mobmdctrl/mob-release-link-left-bug-mobmdctrl.vue';
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
export default class BugUsr3MobPickupMDView1 extends BugUsr3MobPickupMDView1Base {

}
</script>