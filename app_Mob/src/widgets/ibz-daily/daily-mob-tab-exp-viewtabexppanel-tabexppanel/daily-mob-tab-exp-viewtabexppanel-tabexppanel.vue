<script lang='ts'>
import { Component } from 'vue-property-decorator';
import DailyMobTabExpViewtabexppanelBase from './daily-mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel from '@widgets/ibz-daily/daily-mob-tab-exp-viewtabviewpanel-tabviewpanel/daily-mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-daily/daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel/daily-mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-daily/daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel/daily-mob-tab-exp-viewtabviewpanel3-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
         
    }
})
export default class DailyMobTabExpViewtabexppanel extends DailyMobTabExpViewtabexppanelBase {

}
</script>