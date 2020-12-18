<script lang='ts'>
import { Component } from 'vue-property-decorator';
import AppPortalView2_dbBase from './app-portal-view2-db-dashboard-base.vue';
import view_db_appmenu1 from '@widgets/app/my-portlet/my-portlet.vue';
import view_db_appmenu2 from '@widgets/app/report-new-portlet/report-new-portlet.vue';

 
@Component({
    components: {
        view_db_appmenu1, 
        view_db_appmenu2, 
         
    }
})
export default class AppPortalView2_db extends AppPortalView2_dbBase {

}
</script>