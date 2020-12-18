<script lang='ts'>
import { Component } from 'vue-property-decorator';
import Mob_MyBase from './mob-my-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/bug/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Mob_My extends Mob_MyBase {

}
</script>