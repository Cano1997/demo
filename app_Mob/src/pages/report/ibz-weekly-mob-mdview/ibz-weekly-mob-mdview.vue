<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyMobMDViewBase from './ibz-weekly-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-weekly/weekly-my-recevied-mobmdctrl/weekly-my-recevied-mobmdctrl.vue';
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
export default class IbzWeeklyMobMDView extends IbzWeeklyMobMDViewBase {

}
</script>