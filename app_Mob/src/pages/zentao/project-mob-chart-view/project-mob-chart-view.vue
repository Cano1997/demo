<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectMobChartViewBase from './project-mob-chart-view-base.vue';

import view_chart from '@widgets/project/project-status-bar-mob-chart/project-status-bar-mob-chart.vue';
@Component({
    components: {
        view_chart, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectMobChartView extends ProjectMobChartViewBase {

}
</script>