<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobTabExpViewtabexppanelBase from './mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel3 from '@widgets/product-plan/mob-tab-exp-viewtabviewpanel3-tabviewpanel/mob-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/product-plan/mob-tab-exp-viewtabviewpanel2-tabviewpanel/mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product-plan/mob-tab-exp-viewtabviewpanel4-tabviewpanel/mob-tab-exp-viewtabviewpanel4-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel3, 
        view_tabviewpanel2, 
        view_tabviewpanel4, 
         
    }
})
export default class MobTabExpViewtabexppanel extends MobTabExpViewtabexppanelBase {

}
</script>