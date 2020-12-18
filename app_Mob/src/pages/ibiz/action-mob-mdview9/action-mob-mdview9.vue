<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ActionMobMDView9Base from './action-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/action/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class ActionMobMDView9 extends ActionMobMDView9Base {

}
</script>