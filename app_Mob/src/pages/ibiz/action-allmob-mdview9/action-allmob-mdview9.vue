<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ActionALLMobMDView9Base from './action-allmob-mdview9-base.vue';

import view_mdctrl from '@widgets/action/trends-mob-mobmdctrl/trends-mob-mobmdctrl.vue';
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
export default class ActionALLMobMDView9 extends ActionALLMobMDView9Base {

}
</script>