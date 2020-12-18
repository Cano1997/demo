<script lang='ts'>
import { Component } from 'vue-property-decorator';
import SysUpdateFeaturesYMobMDView9Base from './sys-update-features-ymob-mdview9-base.vue';

import view_mdctrl from '@widgets/sys-update-features/moby-mobmdctrl/moby-mobmdctrl.vue';
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
export default class SysUpdateFeaturesYMobMDView9 extends SysUpdateFeaturesYMobMDView9Base {

}
</script>