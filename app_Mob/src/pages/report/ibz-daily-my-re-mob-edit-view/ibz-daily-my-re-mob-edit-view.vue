<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyMyReMobEditViewBase from './ibz-daily-my-re-mob-edit-view-base.vue';

import view_form from '@widgets/ibz-daily/daily-info-mob-form/daily-info-mob-form.vue';
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
export default class IbzDailyMyReMobEditView extends IbzDailyMyReMobEditViewBase {

}
</script>