<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzReportMobMDViewBase from './ibz-report-mob-mdview-base.vue';

import view_searchform from '@widgets/ibz-report/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/ibz-report/my-submit-mobmdctrl/my-submit-mobmdctrl.vue';
@Component({
    components: {
        view_searchform, 
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzReportMobMDView extends IbzReportMobMDViewBase {

}
</script>