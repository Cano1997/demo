<script lang='ts'>
import { Component } from 'vue-property-decorator';
import FavoriteMOBDasBase from './favorite-mobdas-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/task/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class FavoriteMOBDas extends FavoriteMOBDasBase {

}
</script>