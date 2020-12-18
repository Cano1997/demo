<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobTabExpViewtabexppanelBase from './mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/product/mob-tab-exp-viewtabviewpanel-tabviewpanel/mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/product/mob-tab-exp-viewtabviewpanel2-tabviewpanel/mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product/mob-tab-exp-viewtabviewpanel4-tabviewpanel/mob-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/product/mob-tab-exp-viewtabviewpanel5-tabviewpanel/mob-tab-exp-viewtabviewpanel5-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel4, 
        view_tabviewpanel5, 
         
    }
})
export default class MobTabExpViewtabexppanel extends MobTabExpViewtabexppanelBase {

}
</script>