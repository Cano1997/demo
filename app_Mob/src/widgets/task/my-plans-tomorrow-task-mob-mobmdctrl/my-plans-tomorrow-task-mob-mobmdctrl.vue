<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyPlansTomorrowTaskMobBase from './my-plans-tomorrow-task-mob-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/task/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyPlansTomorrowTaskMob extends MyPlansTomorrowTaskMobBase {

}
</script>