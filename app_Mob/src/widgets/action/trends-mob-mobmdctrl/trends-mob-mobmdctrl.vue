<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TrendsMobBase from './trends-mob-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/action/mob-6080-panel/mob-6080-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class TrendsMob extends TrendsMobBase {

}
</script>