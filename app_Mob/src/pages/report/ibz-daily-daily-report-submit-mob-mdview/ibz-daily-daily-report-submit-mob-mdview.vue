<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyDailyReportSubmitMobMDViewBase from './ibz-daily-daily-report-submit-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-daily/daily-report-submit-mob-mobmdctrl/daily-report-submit-mob-mobmdctrl.vue';
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
export default class IbzDailyDailyReportSubmitMobMDView extends IbzDailyDailyReportSubmitMobMDViewBase {

}
</script>