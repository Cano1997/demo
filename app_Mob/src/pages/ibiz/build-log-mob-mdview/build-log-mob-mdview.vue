<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BuildLogMobMDViewBase from './build-log-mob-mdview-base.vue';

import view_mdctrl from '@widgets/build/mob-log-mobmdctrl/mob-log-mobmdctrl.vue';
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
export default class BuildLogMobMDView extends BuildLogMobMDViewBase {

}
</script>