<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MainInfoMobTabExpViewtabexppanelBase from './main-info-mob-tab-exp-viewtabexppanel-tabexppanel-base.vue';
import view_tabviewpanel2 from '@widgets/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel2-tabviewpanel/main-info-mob-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel-tabviewpanel/main-info-mob-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-monthly/main-info-mob-tab-exp-viewtabviewpanel3-tabviewpanel/main-info-mob-tab-exp-viewtabviewpanel3-tabviewpanel.vue';

 
@Component({
    components: {
        view_tabviewpanel2, 
        view_tabviewpanel, 
        view_tabviewpanel3, 
         
    }
})
export default class MainInfoMobTabExpViewtabexppanel extends MainInfoMobTabExpViewtabexppanelBase {

}
</script>