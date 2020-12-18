<script lang='ts'>
import { Component } from 'vue-property-decorator';
import FavoriteMOBBase from './favorite-mob-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/story/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class FavoriteMOB extends FavoriteMOBBase {

}
</script>