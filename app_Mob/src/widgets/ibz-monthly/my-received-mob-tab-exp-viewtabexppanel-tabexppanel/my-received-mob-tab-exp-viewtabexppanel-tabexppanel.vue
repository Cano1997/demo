<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyReceivedMobTabExpViewtabexppanelBase from './my-received-mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel2 from '@widgets/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel2-tabviewpanel/my-received-mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel-tabviewpanel/my-received-mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-monthly/my-received-mob-tab-exp-viewtabviewpanel3-tabviewpanel/my-received-mob-tab-exp-viewtabviewpanel3-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel2, 
        view_tabviewpanel, 
        view_tabviewpanel3, 
         
    }
})
export default class MyReceivedMobTabExpViewtabexppanel extends MyReceivedMobTabExpViewtabexppanelBase {

}
</script>