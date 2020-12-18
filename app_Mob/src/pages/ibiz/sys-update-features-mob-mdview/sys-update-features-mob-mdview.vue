<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysUpdateFeaturesMobMDViewBase from './sys-update-features-mob-mdview-base.vue';

import view_mdctrl from '@widgets/sys-update-features/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class SysUpdateFeaturesMobMDView extends SysUpdateFeaturesMobMDViewBase {

}
</script>