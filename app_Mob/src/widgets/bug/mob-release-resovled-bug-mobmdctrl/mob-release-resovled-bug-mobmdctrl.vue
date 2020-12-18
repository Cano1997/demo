<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MOB_Release_ResovledBugBase from './mob-release-resovled-bug-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/bug/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MOB_Release_ResovledBug extends MOB_Release_ResovledBugBase {

}
</script>