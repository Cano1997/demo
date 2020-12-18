<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyCompleteTaskMobBase from './my-complete-task-mob-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/task/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyCompleteTaskMob extends MyCompleteTaskMobBase {

}
</script>