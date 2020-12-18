<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectStatusBarMobBase from './project-status-bar-mob-portlet-base.vue';
import view_dashboard_sysportlet9_chart from '@widgets/project/project-status-bar-mob-chart/project-status-bar-mob-chart.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet9_chart, 
         
    }
})
export default class ProjectStatusBarMob extends ProjectStatusBarMobBase {

}
</script>