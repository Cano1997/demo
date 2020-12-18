<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductStatusChartMobBase from './product-status-chart-mob-portlet-base.vue';
import view_dashboard_sysportlet8_chart from '@widgets/product/product-status-pie-mob-chart/product-status-pie-mob-chart.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet8_chart, 
         
    }
})
export default class ProductStatusChartMob extends ProductStatusChartMobBase {

}
</script>