<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyDailyMobTabExpViewtabexppanelBase from './my-daily-mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel-tabviewpanel/my-daily-mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel/my-daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-daily/my-daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel/my-daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
         
    }
})
export default class MyDailyMobTabExpViewtabexppanel extends MyDailyMobTabExpViewtabexppanelBase {

}
</script>