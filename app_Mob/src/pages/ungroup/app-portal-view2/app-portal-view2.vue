<script lang='ts'>
import { Component } from 'vue-property-decorator';
import AppPortalView2Base from './app-portal-view2-base.vue';

import view_dashboard from '@widgets/app/app-portal-view2-db-dashboard/app-portal-view2-db-dashboard.vue';
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
export default class AppPortalView2 extends AppPortalView2Base {

}
</script>