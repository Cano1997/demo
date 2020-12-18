<script lang='ts'>
import { Component } from 'vue-property-decorator';
import Exp_TestSuiteBase from './exp-test-suite-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/case/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Exp_TestSuite extends Exp_TestSuiteBase {

}
</script>