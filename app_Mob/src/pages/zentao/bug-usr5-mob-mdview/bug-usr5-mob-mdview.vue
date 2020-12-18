<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr5MobMDViewBase from './bug-usr5-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-build-create-bug-mobmdctrl/mob-build-create-bug-mobmdctrl.vue';
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
export default class BugUsr5MobMDView extends BugUsr5MobMDViewBase {

}
</script>