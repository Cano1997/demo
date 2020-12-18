<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MOB_Build_CreateBugBase from './mob-build-create-bug-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/bug/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MOB_Build_CreateBug extends MOB_Build_CreateBugBase {

}
</script>