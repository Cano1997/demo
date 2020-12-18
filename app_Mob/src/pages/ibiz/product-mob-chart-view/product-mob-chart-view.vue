<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductMobChartViewBase from './product-mob-chart-view-base.vue';

import view_chart from '@widgets/product/product-status-pie-mob-chart/product-status-pie-mob-chart.vue';
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
export default class ProductMobChartView extends ProductMobChartViewBase {

}
</script>