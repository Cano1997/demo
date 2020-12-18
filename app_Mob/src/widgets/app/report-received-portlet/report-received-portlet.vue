<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ReportReceivedBase from './report-received-portlet-base.vue';
import view_db_appmenu3_appmenu from '@widgets/app/report-received-appmenu/report-received-appmenu.vue';

 
@Component({
    components: {
        view_db_appmenu3_appmenu, 
         
    }
})
export default class ReportReceived extends ReportReceivedBase {

}
</script>