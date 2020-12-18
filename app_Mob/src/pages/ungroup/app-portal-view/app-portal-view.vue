<script lang='ts'>
import { Component } from 'vue-property-decorator';
import AppPortalViewBase from './app-portal-view-base.vue';

import view_dashboard from '@widgets/app/app-portal-view-db-dashboard/app-portal-view-db-dashboard.vue';
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
export default class AppPortalView extends AppPortalViewBase {

}
</script>