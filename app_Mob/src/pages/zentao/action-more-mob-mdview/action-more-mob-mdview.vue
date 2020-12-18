<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ActionMoreMobMDViewBase from './action-more-mob-mdview-base.vue';

import view_mdctrl from '@widgets/action/trends-mob-more-mobmdctrl/trends-mob-more-mobmdctrl.vue';
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
export default class ActionMoreMobMDView extends ActionMoreMobMDViewBase {

}
</script>