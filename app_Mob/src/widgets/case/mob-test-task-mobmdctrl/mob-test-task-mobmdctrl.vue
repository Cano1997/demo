<script lang='ts'>
import { Component } from 'vue-property-decorator';
import Mob_TestTaskBase from './mob-test-task-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/case/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Mob_TestTask extends Mob_TestTaskBase {

}
</script>