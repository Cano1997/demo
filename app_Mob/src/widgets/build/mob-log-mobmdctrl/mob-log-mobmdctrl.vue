<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobLogBase from './mob-log-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/build/mob-8373-panel/mob-8373-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MobLog extends MobLogBase {

}
</script>