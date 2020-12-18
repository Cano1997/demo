<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyUsr2MobTabExpViewMyReceivedBase from './ibz-weekly-usr2-mob-tab-exp-view-my-received-base.vue';

import view_tabexppanel from '@widgets/ibz-weekly/usr2-mob-tab-exp-view-my-receivedtabexppanel-tabexppanel/usr2-mob-tab-exp-view-my-receivedtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzWeeklyUsr2MobTabExpViewMyReceived extends IbzWeeklyUsr2MobTabExpViewMyReceivedBase {

}
</script>