<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr4MobMDViewBase from './bug-usr4-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-build-resolved-bug-mobmdctrl/mob-build-resolved-bug-mobmdctrl.vue';
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
export default class BugUsr4MobMDView extends BugUsr4MobMDViewBase {

}
</script>