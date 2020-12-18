<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyMainInfoMobTabExpViewBase from './ibz-monthly-main-info-mob-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/ibz-monthly/main-info-mob-tab-exp-viewtabexppanel-tabexppanel/main-info-mob-tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzMonthlyMainInfoMobTabExpView extends IbzMonthlyMainInfoMobTabExpViewBase {

}
</script>