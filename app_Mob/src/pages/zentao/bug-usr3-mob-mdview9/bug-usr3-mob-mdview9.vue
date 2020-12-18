<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugUsr3MobMDView9Base from './bug-usr3-mob-mdview9-base.vue';

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
export default class BugUsr3MobMDView9 extends BugUsr3MobMDView9Base {

}
</script>