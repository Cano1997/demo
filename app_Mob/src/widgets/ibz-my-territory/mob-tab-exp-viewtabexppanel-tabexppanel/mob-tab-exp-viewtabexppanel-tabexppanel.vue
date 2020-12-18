<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobTabExpViewtabexppanelBase from './mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel4 from '@widgets/ibz-my-territory/mob-tab-exp-viewtabviewpanel4-tabviewpanel/mob-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-my-territory/mob-tab-exp-viewtabviewpanel-tabviewpanel/mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/ibz-my-territory/mob-tab-exp-viewtabviewpanel5-tabviewpanel/mob-tab-exp-viewtabviewpanel5-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel4, 
        view_tabviewpanel, 
        view_tabviewpanel5, 
         
    }
})
export default class MobTabExpViewtabexppanel extends MobTabExpViewtabexppanelBase {

}
</script>