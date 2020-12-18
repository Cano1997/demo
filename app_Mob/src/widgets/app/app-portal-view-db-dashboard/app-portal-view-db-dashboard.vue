<script lang='ts'>
import { Component } from 'vue-property-decorator';
import AppPortalView_dbBase from './app-portal-view-db-dashboard-base.vue';
import view_db_appmenu1 from '@widgets/app/imgswipe-style-menu-portlet/imgswipe-style-menu-portlet.vue';
import view_db_appmenu2 from '@widgets/app/icon-style-menu-portlet/icon-style-menu-portlet.vue';
import view_db_appmenu3 from '@widgets/app/list-menu-portlet/list-menu-portlet.vue';

 
@Component({
    components: {
        view_db_appmenu1, 
        view_db_appmenu2, 
        view_db_appmenu3, 
         
    }
})
export default class AppPortalView_db extends AppPortalView_dbBase {

}
</script>