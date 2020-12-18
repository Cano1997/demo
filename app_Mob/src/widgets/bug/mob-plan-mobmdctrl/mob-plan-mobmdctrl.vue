<script lang='ts'>
import { Component } from 'vue-property-decorator';
import Mob_PlanBase from './mob-plan-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/bug/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Mob_Plan extends Mob_PlanBase {

}
</script>