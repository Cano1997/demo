<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzMonthlyMobEditViewBase from './ibz-monthly-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-monthly/monthly-info-ding-ding-form/monthly-info-ding-ding-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzMonthlyMobEditView extends IbzMonthlyMobEditViewBase {

}
</script>