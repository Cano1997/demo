<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyCompleteTaskMonthlyBase from './my-complete-task-monthly-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/task/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyCompleteTaskMonthly extends MyCompleteTaskMonthlyBase {

}
</script>