<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyWeeklyBase from './my-weekly-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/ibz-weekly/my-weekly-panel/my-weekly-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyWeekly extends MyWeeklyBase {

}
</script>