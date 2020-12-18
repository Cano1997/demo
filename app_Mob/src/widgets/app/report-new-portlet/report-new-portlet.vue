<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReportNewBase from './report-new-portlet-base.vue';
import view_db_appmenu2_appmenu from '@widgets/app/report-new-appmenu/report-new-appmenu.vue';

 
@Component({
    components: {
        view_db_appmenu2_appmenu, 
         
    }
})
export default class ReportNew extends ReportNewBase {

}
</script>