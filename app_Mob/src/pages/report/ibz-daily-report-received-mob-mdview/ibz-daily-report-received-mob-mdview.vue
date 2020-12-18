<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyReportReceivedMobMDViewBase from './ibz-daily-report-received-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-daily/report-received-mob-mobmdctrl/report-received-mob-mobmdctrl.vue';
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
export default class IbzDailyReportReceivedMobMDView extends IbzDailyReportReceivedMobMDViewBase {

}
</script>