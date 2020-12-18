<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyUsr2MobMDViewBase from './ibz-weekly-usr2-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-weekly/my-weekly-mobmdctrl/my-weekly-mobmdctrl.vue';
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
export default class IbzWeeklyUsr2MobMDView extends IbzWeeklyUsr2MobMDViewBase {

}
</script>