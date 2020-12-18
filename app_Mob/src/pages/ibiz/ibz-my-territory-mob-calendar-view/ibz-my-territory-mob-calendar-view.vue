<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryMobCalendarViewBase from './ibz-my-territory-mob-calendar-view-base.vue';

import view_calendar from '@widgets/ibz-my-territory/my-work-calendar/my-work-calendar.vue';
@Component({
    components: {
        view_calendar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzMyTerritoryMobCalendarView extends IbzMyTerritoryMobCalendarViewBase {

}
</script>