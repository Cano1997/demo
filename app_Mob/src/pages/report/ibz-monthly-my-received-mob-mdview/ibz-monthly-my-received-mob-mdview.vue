<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyMyReceivedMobMDViewBase from './ibz-monthly-my-received-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-monthly/my-received-mobmdctrl/my-received-mobmdctrl.vue';
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
export default class IbzMonthlyMyReceivedMobMDView extends IbzMonthlyMyReceivedMobMDViewBase {

}
</script>