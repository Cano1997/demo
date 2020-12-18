<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyMySubmitMobMDViewBase from './ibz-monthly-my-submit-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-monthly/my-submit-mobmdctrl/my-submit-mobmdctrl.vue';
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
export default class IbzMonthlyMySubmitMobMDView extends IbzMonthlyMySubmitMobMDViewBase {

}
</script>