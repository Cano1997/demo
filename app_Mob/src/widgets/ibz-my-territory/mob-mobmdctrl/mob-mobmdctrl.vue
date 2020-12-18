<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobBase from './mob-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/ibz-my-territory/my-work-mob-panel/my-work-mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Mob extends MobBase {

}
</script>