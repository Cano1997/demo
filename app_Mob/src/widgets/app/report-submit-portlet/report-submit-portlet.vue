<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReportSubmitBase from './report-submit-portlet-base.vue';
import view_db_appmenu4_appmenu from '@widgets/app/report-submit-appmenu/report-submit-appmenu.vue';

 
@Component({
    components: {
        view_db_appmenu4_appmenu, 
         
    }
})
export default class ReportSubmit extends ReportSubmitBase {

}
</script>