<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr6MobMDViewBase from './bug-usr6-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-plan-mobmdctrl/mob-plan-mobmdctrl.vue';
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
export default class BugUsr6MobMDView extends BugUsr6MobMDViewBase {

}
</script>