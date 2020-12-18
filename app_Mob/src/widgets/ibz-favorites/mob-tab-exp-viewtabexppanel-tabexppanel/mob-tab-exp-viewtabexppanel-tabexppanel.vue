<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MobTabExpViewtabexppanelBase from './mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/ibz-favorites/mob-tab-exp-viewtabviewpanel-tabviewpanel/mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-favorites/mob-tab-exp-viewtabviewpanel2-tabviewpanel/mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
         
    }
})
export default class MobTabExpViewtabexppanel extends MobTabExpViewtabexppanelBase {

}
</script>