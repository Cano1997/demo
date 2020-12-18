<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryMobDashboardViewBase from './ibz-my-territory-mob-dashboard-view-base.vue';

import view_dashboard from '@widgets/ibz-my-territory/mob-home-dashboard/mob-home-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzMyTerritoryMobDashboardView extends IbzMyTerritoryMobDashboardViewBase {

}
</script>