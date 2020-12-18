<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzReportlyReportlyMobMDViewBase from './ibz-reportly-reportly-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-reportly/my-reportly-mobmdctrl/my-reportly-mobmdctrl.vue';
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
export default class IbzReportlyReportlyMobMDView extends IbzReportlyReportlyMobMDViewBase {

}
</script>